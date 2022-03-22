<template>
    <div align="center">
        <h2>Add Post Board</h2>
        <board-register-form @add-post="addPost"/>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import BoardRegisterForm from '/@components/board/BoardRegisterForm.vue'
import { router } from '/@router/router.js'

export default { 
    name: 'BoardRegisterPage',
    components: { BoardRegisterForm },
    setup() {
        const addPost = (payload) => {
            const {title, content, writer} = payload
            client.post('/boards', {title, content, writer})
                .then(res => {
                    alert('ADD POST Complete')
                    router.push({
                        name: 'BoardReadPage',
                        params: { boardNo: res.data.boardNo.toString() }
                    })
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
            addPost,
        }
    }
}
</script>