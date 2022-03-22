<template>
    <div align="center">
        <h2>User Register</h2>
        <member-register-form @add-post="addPost" :jobCodes="jobCodes"/>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import MemberRegisterForm from '/@components/member/MemberRegisterForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'MemberRegisterPage',
    components: { MemberRegisterForm },
    setup() {
        const jobCodes = inject("jobCodes")
        const fetchJobCodeList = inject("fetchJobCodeList")

        fetchJobCodeList()
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const addPost = (payload) => {
            const { userId, userName, userPw, job } = payload
            client.post('/users', { userId, userName, userPw, job })
                .then(res => {
                    alert('user regist complete')
                    router.push({
                        name: 'MemberReadPage',
                        params: { userNo: res.data.userNo }
                    })
                })
                .catch(err => {
                    if(err.response.status === 401) {
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    } else if(err.response.status === 403){
                        alert('Plz Access Allow')
                        router.back()
                    } else {
                        alert(err.response.data.message)
                    }
                })
        }
        return { 
            jobCodes,
            addPost,
        }
    }
}
</script>