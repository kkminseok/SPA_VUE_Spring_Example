<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">Board Num</th>
                <th align="center" width="320">Board Name</th>
                <th align="center" width="100">Writer</th>
                <th align="center" width="180">Reg Date</th>
            </tr>

            <tr v-if="!boards || (Array.isArray(boards) && boards.length ===0)">
                <td colspan="4">
                    List is Empty
                </td>
            </tr>

            <tr v-else v-for="board in boards" :key="board.boardNo">
                <th align="center">{{board.boardNo}}</th>
                <th align="left"><router-link :to="{ name: 'BoardReadPage', params: {boardNo: board.boardNo.toString()} }">{{board.title}}</router-link></th>
                <th align="right">{{board.writer}}</th>
                <th align="center">{{board.regDate}}</th>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'BoardList',
    props: {
        boards: {
            type: Array
        }
    }
}
</script>