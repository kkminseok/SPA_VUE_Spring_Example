<template>
    <form @submit.prevent="signup">
        <table>
            <tr>
                <td>ID</td>
                <td><input type="text" v-model="userId"></td>
            </tr>
            <tr>
                <td>Pw</td>
                <td><input type="password" v-model="userPw"></td>
            </tr>
            <tr>
                <td>UserName</td>
                <td><input type="text" v-model="userName"></td>
            </tr>
            <tr>
                <td>Job</td>
                <td>
                    <select v-model="job">
                        <option v-for="jobCode in jobCodes" :value="jobCode.value" :key="jobCode.value">
                            {{jobCode.label}}
                        </option>
                    </select>
                </td>
            </tr>
        </table>

        <div>
            <button type="submit">Signup</button>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'SignupForm',
    props: {
        jobCodes: {
            type: Array
        }
    },
    emits: ['sign-up'],
    setup(props,context) {
        const userId = ref('')
        const userName = ref('')
        const userPw = ref('')
        const job = ref('')

        const signup = () => {
            context.emit('sign-up', {
                userId: userId.value,
                userName: userName.value,
                userPw: userPw.value,
                job: job.value
            })
        }

        return {
            userId,
            userName,
            userPw,
            job,
            signup,
        }
    }
}
</script>