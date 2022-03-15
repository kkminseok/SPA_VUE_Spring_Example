<template>
    <div>
        <!-- 5.7 delete
        <h3>board view</h3>
        <router-link :to="{name: 'BoardReadPage' , params: {boardNo: 100} }">details to board</router-link>
        -->
        <table border ="1">
            <tr>
                <th align="center" width="80">number</th>
                <th align="center" width="320">title</th>
                <th align="center" width="100">user</th>
                <th align="center" width="180">date</th>
            </tr>

            <tr v-if="!boards || (Array.isArray(boards) && boards.length ===0)">
                <td colspan="4">
                    List is Empty
                </td>
            </tr>

            <tr v-else v-for="board in boards" :key="board.boardNo">
                <td align="center">{{board.boardNo}}</td>
                <td align="left"><router-link :to="{name: 'BoardReadPage',params:{boardNo:board.boardNo.toString()}}">{{board.title}}</router-link></td>
                <td align="right">{{board.writer}}</td>
                <td align="center">{{board.regDate}}</td>
            </tr>
        </table>    
    </div>
</template>

<script>
export default {
    name:'BoardList',
    props:{
        boards:{
            type:Array,
        }
    }
}
</script>