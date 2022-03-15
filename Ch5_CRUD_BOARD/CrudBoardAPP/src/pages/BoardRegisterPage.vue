<template>
    <div align="center">
        <h2>add board</h2>
        <board-register-form @add-post="addPost"></board-register-form>
    </div>
</template>
<script>
import BoardRegisterForm from '../components/BoardRegisterForm.vue'
import client from '../modules/client.js'
import { router } from '../router/router.js'
export default {
    name: 'BoardRegisterPage',
    components : {BoardRegisterForm},
    setup() {
        const addPost = (payload) => {
            const {title, writer, content} = payload;

            client.post('/boards' ,{title, content, writer})
            .then(res => {
                alert('commit complete 등록완료')
                router.push({
                    name: 'BoardReadPage',
                    params: {boardNo: res.data.boardNo}
                })
            })
            .catch(err=>{
                alert(err.response)
            })
        }
        return {
            addPost,
        }
    }
}
</script>