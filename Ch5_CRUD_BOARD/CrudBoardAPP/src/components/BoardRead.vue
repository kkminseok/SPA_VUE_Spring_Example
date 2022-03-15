<template>
    <!-- 5.6 delete
    <div>
        <h3>details board view</h3>
    </div>
    -->
    <table>
        <tr>
            <td>number</td>
            <td><input type="text" :value="board.boardNo" readonly></td>
        </tr>
        <tr>
            <td>date</td>
            <td><input type="text" :value="board.regDate" readonly></td>
        </tr>
        <tr>
            <td>title</td>
            <td><input type="text" :value="board.title" readonly></td>
        </tr>
        <tr>
            <td>user</td>
            <td><input type="text" :value="board.writer" readonly></td>
        </tr>
        <tr>
            <td>content</td>
            <td><textarea :value="board.content" readonly></textarea></td>
        </tr>
    </table>
</template>
<script>
export default {
    name: 'BoardRead',
    props: {
        board: {
            type:Object,
            required: true
        }
    }
}
</script>