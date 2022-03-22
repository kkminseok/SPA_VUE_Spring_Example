<template>
    <div align="center">
        <h2>Signup</h2>
        <signup-form @sign-up="signup" :jobCodes="jobCodes"/>
        <p><router-link :to="{ name: 'Signin' }">Login</router-link></p>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import SignupForm from '/@components/auth/SignupForm.vue'
import { inject } from 'vue'
import { router } from '/@router/router.js'

export default { 
    name: 'Signup',
    components: { SignupForm },
    setup() { 
        const jobCodes = inject("jobCodes")
        const fetchJobCodeList = inject("fetchJobCodeList")

        fetchJobCodeList()
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const signup = (payload) => {
            const { userId, userName, userPw, job} = payload
            client.post('/users', { userId, userName, userPw, job})
                .then(res => {
                    alert('Signup Complete')
                    router.push({ name: 'Signin' })
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        }

        return {
            jobCodes,
            signup,
        }
    }
}
</script>