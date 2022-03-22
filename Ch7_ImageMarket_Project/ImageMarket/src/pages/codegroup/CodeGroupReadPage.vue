
<template>
    <div align="center">
        <h2>CodeGroup Information</h2>
        <code-group-read v-if="codeGroup" :codeGroup="codeGroup"/>
        <router-link :to="{ name: 'CodeGroupModifyPage', params: { groupcCode } }">Edit</router-link>
        <button @click="deletePost">Delete</button>
        <router-link :to=" { name: 'CodeGroupListPage' }">List</router-link>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import CodeGroupRead from '/@components/codegroup/CodeGroupRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'CodeGroupReadPage',
    components: { CodeGroupRead },
    props: {
        groupCode: {
            type: String,
            required: true
        }
    },
    setup(props){
        const codeGroup = inject("codeGroup")
        const fetchCodeGroup = inject("fetchCodeGroup")

        fetchCodeGroup(props.groupCode)
        .catch(err => {
            alert(err.response.data.message)
            router.back()
        })

        const deletePost = () =>{
            const {groupCode} = codeGroup.value
            client.delete(`/codegroups/${groupCode}`)
            .then(res => {
                alert("Code delete Complete")
                router.push({ name: 'CodeGroupListPage'})
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('Plz Logn')
                    router.push({ name: 'Signin'})
                } else if(err.response.status === 403){
                    alert('Plz Access Allow')
                    router.back()
                }else{
                    alert(err.response.data.message)
                }
            })
        }

        return {
            codeGroup,
            deletePost,
        }
    }

}

</script>
