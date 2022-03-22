<template>
    <div align="right">
        <!-- 7.10 delete
        <router-link :to="{ name: 'Signin'}">Login</router-link>
        -->
        <div v-if="isAuthorized">
            <span>{{myinfo.userName}}!! Welcome</span>
            <button @click="logout">logout</button>
        </div>
        <div v-else>
            <router-link :to="{ name: 'Signin'}">Login</router-link>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue'
import { router } from '/@router/router.js'
export default {
    name: 'MainHeader',
    setup(){
        const isAuthorized = inject("isAuthorized")
        const myinfo = inject("myinfo")

        const signout = inject('signout')

        const logout = () => {
            signout()
            alert('Logout')
            router.push({ name: 'Home'})
        }

        return{
            isAuthorized,
            myinfo,
            logout,
        }
    }
}
</script>