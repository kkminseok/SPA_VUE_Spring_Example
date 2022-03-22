<template>
    <div align="center">
        <h2>Board Edit</h2>
        <board-modify-form v-if="board"
            :board="board"
            @modify-post="modifyPost"
        />
        <p v-else>loading...</p>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import BoardModifyForm from '/@components/board/BoardModifyForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'BoardModifyPage',
    components: { BoardModifyForm },
    props: {
        boardNo: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const board = inject("board")
        const fetchBoard = inject("fetchBoard")

        fetchBoard(props.boardNo)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const modifyPost = (payload) => {
            const { title, content, writer } = payload
            client.put(`/boards/${props.boardNo}`, {title,content, writer})
                .then(res => {
                    alert('Edit Complete')
                    router.push({ 
                        name: 'BoardReadPage',
                        params: { boardNo: res.data.boardNo.toString()}
                    })
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.response.status === 403 ){
                        alert('Plz Access Allow')
                        router.back()
                    }else{
                        alert(err.response.data.message)
                    }
                })

        }
        return {
            board,
            modifyPost,
        }
    }
    
}

</script>