<template>
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>Board Num</td>
                <td><input :value="board.boardNo" type="text" disabled></td>
            </tr>
            <tr>
                <td>Board Title</td>
                <td><input type="text" v-model="board.title"></td>
            </tr>
            <tr>
                <td>Writer</td>
                <td><input type="text" :value="board.writer" disabled></td>
            </tr>
            <tr>
                <td>Content</td>
                <td><textarea v-model="board.content" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">Edit</button>
            <router-link :to="{ name: 'BoardReadPage' , params: { boardNo: board.boardNo.toString()} }">Cancle</router-link>
        </div>
    </form>
</template>
<script>
export default {
    name: 'BoardModifyForm',
    props: {
        board: {
            type: Object,
            required: true
        }
    },
    emits: ['modify-post'],
    setup(props, context) {
        const fireModifyPost = () => {
            context.emit('modify-post',{
                title : props.board.title,
                content: props.board.content,
                writer: props.board.writer,
            })
        }

        return {
            fireModifyPost,
        }
    }
}
</script>