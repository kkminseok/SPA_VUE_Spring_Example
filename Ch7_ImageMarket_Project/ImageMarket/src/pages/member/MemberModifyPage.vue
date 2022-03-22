<template>
    <div align="center">
        <h2>Member Modify</h2>
        <member-modify-form v-if="member && jobCodes"
            :member="member"
            :jobCodes="jobCodes"
            @modify-post="modifyPost"/>
        <p v-else>loading...</p>
    </div>

</template>
<script>
import client from '/@modules/client.js'
import MemberModifyForm from '/@components/member/MemberModifyForm.vue'
import { router } from '/@router/router.js' 
import { inject } from 'vue'

export default {
    name: 'MemberModifyPage',
    components: {MemberModifyForm},
    props: {
        userNo: {
            type: String,
            required: true
        }
    },
    setup(props){
        const jobCodes = inject("jobCodes")
        const member = inject("member")
        const fetchJobCodeList = inject("fetchJobCodeList")
        const fetchMember = inject("fetchMember")

        fetchJobCodeList()
            .then(res => {
                fetchMember(props.userNo)
                    .catch(err => {
                        alert(err.response.data.message)
                        router.back()
                    })
            })
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const modifyPost = (payload) =>{
            client.put(`/users/${props.userNo}`, payload)
                .then(res =>{
                    alert("Modfiy Complete")
                    router.push({
                        name: 'MemberReadPage',
                        params: { userNo: res.data.userNo }
                    })
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert("plz Loign")
                        router.push({ name: 'Signin' })
                    }else if(err.response.status === 403){
                        alert('plz access allow')
                        router.back()
                    }else{
                        alert(err.response.data.message)
                    }
                })
        }

        return {
            member,
            jobCodes,
            modifyPost
        }
    }
}
</script>