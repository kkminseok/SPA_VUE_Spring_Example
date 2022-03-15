<template>
    <!-- 5.9
    <div>
        <h3>edit board view</h3>
        <button type="submit">edit</button>
        <router-link :to="{name: 'BoardReadPage',params:{boardNo: 100} }">cancle</router-link>
    </div>
    -->
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>number</td>
                <td><input :value="board.boardNo" type="text" disabled></td>
            </tr>
            <tr>
                <td>date</td>
                <td><input :value="board.regDate" type="text" disabled></td>
            </tr>
            <tr>
                <td>title</td>
                <td><input type="text" v-model="board.title"></td>
            </tr>
            <tr>
                <td>user</td>
                <td><input type="text" :value="board.writer" disabled></td>
            </tr>
            <tr>
                <td>content</td>
                <td><textarea v-model="board.content" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">edit</button>
            <router-link :to="{name : 'BoardReadPage', params: {boardNo: boardNo}}">cancle</router-link>
        </div>
    </form>
</template>
<script>
export default {
    name: 'BoardModifyForm',
    props: {
        board : {
            type: Object,
            required: true
        },
        boardNo: {
            type: String,
            required: true
        }
    },
    emits: ['modify-post'],
    setup(props, context){
        const fireModifyPost = () =>{
            context.emit('modify-post',{
                title : props.board.title,
                content : props.board.content
            })
        }

        return {
            fireModifyPost,
        }
    }
}
</script>