<template>
    <div>
        <table>
            <tr>
                <td>Num</td>
                <td><input type="text" :value="member.userNo" readonly></td>
            </tr>
            <tr>
                <td>User Id</td>
                <td><input type="text" :value="member.userId" readonly></td>
            </tr>
            <tr>
                <td>User Name</td>
                <td><input type="text" :value="member.userName" readonly></td>
            </tr>
            <tr>
                <td>Job</td>
                <td>
                    <select :value="member.job" disabled>
                        <option v-for="jobCode in jobCodes" :value="jobCode.value" :key="jobCode.value">
                            {{jobCode.label}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Auth</td>
                <td>
                    <select :value="auth">
                        <option value="" selected="selected">=== Select Plz ===</option>
                        <option value="ROLE_USER">USER</option>
                        <option value="ROLE_MEMBER">MEMBER</option>
                        <option value="ROLE_ADMIN">ADMIN</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { computed } from 'vue'

export default {
    name: 'MemberRead',
    props: {
        member: {
            type: Object,
            required: true
        },
        jobCodes: {
            type: Array
        }
    },
    setup(props) {
        const auth = computed(() =>{
            if(props.member.authList[0]){
                return props.member.authList[0].auth
            }
            
            return ''
        })

        return {
            auth,
        }
    }
}
</script>