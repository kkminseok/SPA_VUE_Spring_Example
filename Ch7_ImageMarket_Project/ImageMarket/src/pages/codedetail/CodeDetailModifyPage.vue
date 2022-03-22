<template>
    <div align="center">
        <h2>Edit Code</h2>
        <code-detail-modify-form v-if="codeGroups && codeDetail"
            :codeDetail="codeDetail"
            :codeGroups="codeGroups"
            @modify-post="modifyPost" />
        <p v-else>loading...</p>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import CodeDetailModifyForm from '/@components/codedetail/CodeDetailModifyForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'CodeDetailModifyPage',
    components: { CodeDetailModifyForm },
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
    setup(props){
        const codeGroups = inject("codeGroups")
        const codeDetail = inject("codeDetail")
        const fetchCodeGroupList = inject("fetchCodeGroupList")
        const fetchCodeDetail = inject("fetchCodeDetail")

        fetchCodeGroupList()
            .then(res => {
                fetchCodeDetail({ groupCode: props.groupCode, codeValue: props.codeValue})
                .catch(err=> {
                    alert(err.response.data.message)
                    router.back()
                })
            })
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

            const modifyPost = (payload) => {
                const { codeValue, codeName } = payload

                client.put(`/codedetails/${props.groupCode}/${props.codeValue}`,{ codeValue, codeName})
                    .then(res => {
                        alert('Edit Complete')
                        router.push({
                            name: 'CodeDetailReadPage',
                            params: { groupCode: res.data.groupCode, codeValue: res.data.codeValue }
                        })
                    })
                    .catch(err => {
                        if(err.response.status === 401){
                            alert('Login Plz')
                            router.push({ name: 'Signin' })
                        }else if(err.response.status === 403){
                            alert('Plz Access Allow')
                            router.back()
                        }else {
                            alert(err.response.data.message)
                        }
                    })
            }
            return {
                codeGroups,
                codeDetail,
                modifyPost,
            }
    }
}
</script>