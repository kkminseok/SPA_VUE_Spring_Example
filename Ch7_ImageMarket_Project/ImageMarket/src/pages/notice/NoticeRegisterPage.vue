<template>
    <div align="center">
        <h2>Notice Add</h2>
        <notice-register-form @add-post="addPost"></notice-register-form>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import NoticeRegisterForm from '/@components/notice/NoticeRegisterForm.vue'
import { router } from '/@router/router.js'

export default {
    name: 'NoticeRegisterPage',
    components: { NoticeRegisterForm },
    setup() {
        const addPost = (payload) => {
            const { title, content } = payload
            client.post('/notices', { title, content }) 
                .then(res => {
                    alert('ADD Notice Complete')
                    router.push({
                        name: 'NoticeReadPage',
                        params: { noticeNo: res.data.noticeNo.toString() }
                    })
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.response.status === 403) {
                        alert('Plz Access Allow')
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }

                })
        }
        return {
            addPost,
        }
    }
}
</script>