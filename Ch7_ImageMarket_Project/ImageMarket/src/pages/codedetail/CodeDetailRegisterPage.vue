<template>
    <div align="center">
        <h2>Code Register</h2>
        <code-detail-register-form @add-post="addPost" :codeGroups="codeGroups"/>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import CodeDetailRegisterForm from '/@components/codedetail/CodeDetailRegisterForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'CodeDetailRegisterPage',
    components: { CodeDetailRegisterForm },
    setup() {
        const codeGroups = inject("codeGroups")
        const fetchCodeGroupList = inject('fetchCodeGroupList')

        fetchCodeGroupList()
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const addPost = (payload) => {
            const { groupCode, codeValue, codeName } = payload

            client.post('/codedetails', { groupCode, codeValue, codeName })
                .then(res => {
                    alert('Code add complete')
                    router.push({
                        name: 'CodeDetailReadPage',
                        params: { groupCode: res.data.groupCode, codeValue: res.data.codeValue}
                    })
                })
                .catch(err => {
                    if(err.response.data === 401){
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.response.data === 403){
                        alert('Plz Access Allow')
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }
                })
        }

        return {
            codeGroups,
            addPost,
        }
    }
}
</script>