<template>
    <div align="center">
        <h2>Member Information</h2>
        <member-read v-if="member && jobCodes"
            :member="member"
            :jobCodes="jobCodes"/>
        <p v-else>loading...</p>
        <router-link :to="{ name: 'MemberModifyPage' ,params: { userNo } }">Edit</router-link>
        <button @click="deletePost">Delete</button>
        <router-link :to=" { name: 'MemberListPage' }">List</router-link>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import MemberRead from '/@components/member/MemberRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'MemberReadPage',
    components: { MemberRead },
    props: {
        userNo: {
            type: String,
            required: true
        }
    },
    setup(props) { 
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

        const deletePost = () => {
            const { userNo } = member.value
            client.delete(`/users/${userNo}`)
                .then(res => {
                    alert('Delete Complete')
                    router.push({name: 'MemberListPage'})
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.response.status === 403){
                        alert('Plz Access Allow')
                        router.back()
                    }else{
                        alert(err.response.data.message)
                    }
                    
                })
        }
        return {
            member,
            jobCodes,
            deletePost,
        }
    }
}
</script>