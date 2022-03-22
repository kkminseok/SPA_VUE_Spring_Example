<template>
    <div align="center">
        <h2>Code Group Append</h2>
        <code-group-register-form @add-post="addPost"></code-group-register-form>
    </div>
</template>

<script>
import client from '/@modules/client.js'
import CodeGroupRegisterForm from '/@components/codegroup/CodeGroupRegisterForm.vue'
import { router } from '/@router/router.js' 

export default {
    name: 'CodeGroupRegisterPage',
    components: { CodeGroupRegisterForm },
    setup(){
        const addPost = (payload) => {
            const { groupCode, groupName } = payload
            client.post('/codegroups', { groupCode, groupName })
            .then(res => {
                alert('Add Post Complete')
                router.push({
                    name: 'CodeGroupReadPage',
                    params: { groupCode: res.data.groupCode }
                })
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('Plz Login')
                    router.push({ anme: 'Signin' })
                }else if(err.response.statue === 403){
                    alert('Access not allow')
                    router.back()
                }else{
                    alert(err.response.data.message)
                }
            })
        }
        
        return{
            addPost,
        }
    }
    
}
</script>