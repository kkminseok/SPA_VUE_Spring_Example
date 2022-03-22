<template>
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>Num</td>
                <td><input type="text" :value="member.userNo" disabled></td>
            </tr>
            <tr>
                <td>Id</td>
                <td><input type="text" :value="member.userId" disabled></td>
            </tr>
            <tr>
                <td>User Name</td>
                <td><input type="text" v-model="member.userName"></td>
            </tr>
            <tr>
                <td>Job</td>
                <td>
                    <select v-model="member.job">
                        <option v-for="jobCode in jobCodes" :value="jobCode.value" :key="jobCode.value">
                            {{jobCode.label}}
                        </option>
                    </select>

                </td>
            </tr>
            <tr>
                <td>auth</td>
                <select v-model="member.authList[0].auth">
                    <option value="" selected="selected">===Select===</option>
                    <option value="ROLE_USER">user</option>
                    <option value="ROLE_MEMBER">member</option>
                    <option value="ROLE_ADMIN">admin</option>
                </select>
            </tr>
        </table>

        <div>
            <button type="submit">Edit</button>
            <router-link :to="{ name: 'MemberReadPage', params: {userNo: member.userNo }}">cancle</router-link>
        </div>
    </form>
</template>
<script>
import { computed } from 'vue'

export default { 
    name: 'MemberModifyForm',
    props: {
        member: {
            type: Object,
            required: true
        },
        jobCodes: {
            type: Array
        }
    },
    emis: ['modeify-post'],
    setup(props, context) {
        const userId = props.member.userId
        const userPw = props.member.userPw

        const fireModifyPost = () => {
            const userNo = props.member.userNo
            const userName = props.member.userName
            const job = props.member.job
            const auth = props.member.authList[0].auth

            const userObject = {
                userId: userId,
                userPw: userPw,
                userName: userName,
                job: job,
                authList: [
                    { userNo: userNo, auth: auth},
                    { userNo: userNo, auth: ''},
                    { userNo: userNo, auth: ''}
                ]
            }
            context.emit('modify-post',userObject)
        }
        return {
            userId,
            userPw,
            fireModifyPost,
        }
    }
    
}
</script>