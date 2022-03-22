<template>
    <div align="center">
        <h2>Notice Edit</h2>
        <notice-modify-form v-if="notice"
                            :notice="notice"
                            @modify-post="modifyPost"></notice-modify-form>
        <p v-else>loading...</p>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import NoticeModifyForm from '/@components/notice/NoticeModifyForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'


export default {
    name: 'NoticeModifyPage',
    components: { NoticeModifyForm },
    props: {
        noticeNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const notice = inject("notice")
        const fetchNotice = inject("fetchNotice")

        fetchNotice(props.noticeNo)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })
        const modifyPost = (payload) => {
            const {title, content} = payload
            client.put(`/notices/${props.noticeNo}`, { title,content })
                .then(res => {
                    alert('Edit Notice Complete')
                    router.push({
                        name: 'NoticeReadPage',
                        params: { noticeNo: res.data.noticeNo.toString() }
                    })
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.repsonse.status === 403){
                        alert('Plz Access Allow')
                        router.back()
                    }else{
                        alert(err.response.data.message)
                    }
                })
                
        }
        return {
            notice,
            modifyPost,
        }
    }
}
</script>