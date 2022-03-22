<template>
    <div align="center">
        <h2>Notice Information</h2>
        <notice-read v-if="notice" :notice="notice"></notice-read>
        <p v-else>loading...</p>
        <template v-if="isAdmin">
            <router-link :to="{ name: 'NoticeModifyPage', params: {noticeNo}}">Notice Edit</router-link>
            <button @click="deletePost">delete</button>
        </template>
        <router-link :to="{ name: 'NoticeListPage' }">List</router-link>
    </div>

</template>
<script>
import client from '/@modules/client.js'
import NoticeRead from '/@components/notice/NoticeRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'NoticeReadPage',
    components: { NoticeRead },
    props: {
        noticeNo: {
            type: String,
            required: true
        }
    },
    setup(props) { 
        const isAdmin = inject("isAdmin")
        const notice = inject("notice")
        const fecthNotice = inject("fetchNotice")

        fecthNotice(props.noticeNo)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const deletePost = () => {
            const {noticeNo} = notice.value
            client.delete(`/notices/${noticeNo}`)
                .then(res => {
                    alert("Notice Delete Complete")
                    router.push({ name: 'NoticeListPage' })
                })
                .catch(err => {
                    if(err.response.status === 401) {
                        alert('plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.response.status === 403){
                        alert('plz Access Allow')
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }
                })
        }
        return {
            isAdmin,
            notice,
            deletePost,
        }
    }
}
</script>