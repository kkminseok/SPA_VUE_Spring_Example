<template>
    <form @submit.prevent="fireRegisterAdmin">
        <table>
            <tr>
                <td>Admin id</td>
                <td><input type="text" v-model="userId"></td>
            </tr>
            <tr>
                <td>pw</td>
                <td><input type="password" v-model="userPw"></td>
            </tr>
            <tr>
                <td>Admin Name</td>
                <td><input type="text" v-model="userName"></td>
            </tr>
        </table>

        <div>
            <button type="submit">submit</button>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'AdminSetupForm',
    emits: ['register-admin'],
    setup(props, context){
        const userId = ref('')
        const userName = ref('')
        const userPw = ref('')

        const fireRegisterAdmin = (payload) => {
            context.emit('register-admin',{
                userId: userId.value,
                userName: userName.value,
                userPw: userPw.value
            })
        }

        return {
            userId,
            userName,
            userPw,
            fireRegisterAdmin,
        }
    }
}
</script>