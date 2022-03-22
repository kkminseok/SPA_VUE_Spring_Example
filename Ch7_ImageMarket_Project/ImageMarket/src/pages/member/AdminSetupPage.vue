<template>
    <div align="center">
        <h2>Admin Register</h2>
        <admin-setup-form @register-admin="registerAdmin"/>
    </div>
</template>

<script>
import client from '/@modules/client.js'
import { router } from '/@router/router.js'
import AdminSetupForm from '/@components/member/AdminSetupForm.vue'

export default {
    name: 'AdminSetupPage',
    components: { AdminSetupForm },
    setup() {
        const registerAdmin = (payload) => {
            const { userId, userName, userPw } = payload
            client.post('/users/setup', { userId, userName, userPw })
            .then(res => {
                alert('admin register success')
                router.push({
                    name: 'Home'
                })
            })
            .catch(err => {
                alert(err.response.data)
            })
        }

        return {
            registerAdmin,
        }
    }
}
</script>