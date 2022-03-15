<template>
    <div align="center">
        <h2>board edit</h2>
        <board-modify-form v-if="board"
            :board="board"
            :boardNo="boardNo"
            @modify-post="modifyPost"/>
        <p v-else>loading ...</p>
    </div>
</template>
<script>
import BoardModifyForm from "../components/BoardModifyForm.vue";
import client from '../modules/client.js'
import { router } from '../router/router.js'
import { ref } from 'vue'
export default {
    name: 'BoardModifyPage',
    components: {BoardModifyForm},
    props:{
        boardNo:{
            type:String,
            required:true
        }
    },
    setup(props){
        const board = ref({})

        client.get(`/boards/${props.boardNo}`)
        .then(res =>{
            board.value=res.data
        })
        .catch(err=> {
            alert(err.response.data.message)
            router.back()
        })

        const modifyPost = (payload) =>{
            const {title, content} = payload

            client.put(`/boards/${props.boardNo}`,{title,content})
            .then(res =>{
                alert("edit complete")
                router.push({
                    name: 'BoardReadPage',
                    params: {boardNo :res.data.boardNo.toString()}
                })
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }

        return {
            board,
            modifyPost,
        }
    }
}
</script>