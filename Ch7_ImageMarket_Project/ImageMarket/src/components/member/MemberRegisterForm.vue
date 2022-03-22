<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>UserId</td>
                <td><input type="text" v-model="userId"></td>
            </tr>
            <tr>
                <td>UserPw</td>
                <td><input type="text" v-model="userPw"></td>
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
            <button type="submit">Submit</button>
            <router-link :to="{ name: 'MemberListPage' }">List</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'MemberRegisterForm',
    props: {
        jobCodes: {
            type: Array
        }
    },
    emits: ['add-post'],
    setup(props, context) {
        const userId = ref('')
        const userName = ref('')
        const userPw = ref('')
        const job = ref('00')

        const fireAddPost = () => {
            context.emit('add-post',{
                userId: userId.value,
                userName: userName.value,
                userPw: userPw.value,
                job: job.value,
            })
        }

        return {
            userId,
            userName,
            userPw,
            job,
            fireAddPost,
        }
    }
}
</script>