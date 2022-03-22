<template>
    <div align="center">
        <h2>CodeGroup Edit</h2>
        <code-group-modify-form v-if="codeGroup" :codeGroup="codeGroup" @modify-post="modifyPost"/>
        <p v-else>loading...</p>
    </div>
</template>

<script>
import client from '/@modules/client.js'
import CodeGroupModifyForm from '/@components/codegroup/CodeGroupModifyForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default { 
    name: 'CodeGroupModifyPage',
    components: { CodeGroupModifyForm },
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

        const modifyPost = (payload) => {
            const { groupName } = payload

            client.put(`/codegroups/${props.groupCode}`, {groupName})
            .then(res => {
                alert('Edit Complete')
                router.push({
                    name: 'CodeGroupReadPage',
                    params: { groupCode: res.data.groupCode }
                })
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('Plz Login')
                    router.push({name: 'Signin'})
                }else if(err.response.status === 403){
                    alert('Plz Access Allow')
                    router.back()
                }else {
                    alert(err.response.data.message)
                }
            }) 
        }

        return {
            codeGroup,
            modifyPost,
        }
    }
}
</script>