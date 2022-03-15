<template>
    <div align="center">
        <h2>detail board view</h2>
        <board-read v-if="board" :board="board"/>
        <p v-else>loading...</p>
        <router-link :to="{name: 'BoardModifyPage' ,params: {boardNo: boardNo} } ">edit</router-link>
        <button @click="deletePost">delete</button>
        <router-link :to="{name: 'BoardListPage'}">list</router-link>
    </div>
</template>
<script>
import BoardRead from '../components/BoardRead.vue'
import client from '../modules/client.js'
import { ref } from 'vue'
import {router} from '../router/router.js'

export default {
    name: 'BoardReadPage',
    components: {BoardRead},
    props: {
        boardNo : {
            type: String,
            required : true
        }
    },
    setup(props){
        const board = ref({})

        client.get(`/boards/${props.boardNo}`)
        .then(res =>{
            board.value = res.data
        })
        .catch(err => {
            alert(err.response)
        })

        const deletePost = () => {
            const {boardNo} = board.value
            client.delete(`/boards/${boardNo}`)
            .then(res =>{
                alert('delete complete')
                router.push({ name : 'BoardListPage' })
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }

        return {
            board,
            deletePost,
        }
    }
}
</script>
