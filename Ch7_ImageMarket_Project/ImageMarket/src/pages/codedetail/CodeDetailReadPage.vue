<template>
    <div align="center">
        <h2>Code Information</h2>
        <code-detail-read v-if="codeDetail && codeGroups"
            :codeDetail="codeDetail"
            :codeGroups="codeGroups"/>
        <router-link :to="{ name: 'CodeDetailModifyPage', params: { groupCode, codeValue } }">Edit</router-link>
        <button @click="deletePost">Delete</button>
        <router-link :to="{ name: 'CodeDetailListPage' }">List</router-link>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import CodeDetailRead from '/@components/codedetail/CodeDetailRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'CodeDetailReadPage',
    components: { CodeDetailRead },
    props: {
        groupCode: {
            type: String,
            required: true
        },
        codeValue: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const codeGroups = inject("codeGroups")
        const codeDetail = inject("codeDetail")
        const fetchCodeGroupList = inject("fetchCodeGroupList")
        const fetchCodeDetail = inject("fetchCodeDetail")

        fetchCodeGroupList()
        .then(res =>{
            fetchCodeDetail({groupCode: props.groupCode, codeValue: props.codeValue})
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
            const { groupCode, codeValue } = codeDetail.value
            client.delete(`/codedetails/${groupCode}/${codeValue}`)
            .then(res => {
                alert('Code delete Complete')
                router.push({name: 'CodeDetailListPage'})
            }).catch(err => {
                if(err.response.status === 401){
                    alert("Plz Login")
                    router.push({ name: 'Signin' })
                }else if(err.response.status === 403){
                    alert("Plz Access Allow")
                    router.back()
                }else{
                    alert(err.response.data.message)
                }
            })
            
        }
        
        return {
            codeGroups,
            codeDetail,
            deletePost,
        }
    }
}
</script>