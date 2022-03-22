<template>
    <div align="center">
        <h2>Login</h2>
        <signin-form @sign-in="login"/>
        <p><router-link :to="{ name: 'Signup' }">Signup</router-link></p>
    </div>
</template>
<script>
import SigninForm from '/@components/auth/SigninForm.vue'

//7.10 delete
//import { useAuth } from '/@compositions/useAuth.js'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default { 
    name: 'Signin',
    components: { SigninForm },
    setup(){
        //7.10 delete
        /*
        const {
            signin,
        } = useAuth()
        */
       const signin = inject("signin")

        const login = (payload) => {
            signin(payload).then(res => {
                alert('Login complete')
                router.push({name: 'Home'})
            }).catch(err =>{
                console.log(err)
            })
        }

        return {
            login,
        }
    }
}

</script>