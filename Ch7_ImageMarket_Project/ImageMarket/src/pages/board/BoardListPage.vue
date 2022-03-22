<template>
    <div align="center">
        <h2>Board List</h2>
        <router-link v-if="isMember" :to="{ name: 'BoardRegisterPage' }">Add New Post</router-link>
        <board-list :boards="boards"></board-list>
    </div>
</template>
<script>
import BoardList from '/@components/board/BoardList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'BaordListPage',
    components: { BoardList },
    setup() {
        const isMember = inject("isMember")
        const boards = inject("boards")
        const fetchBoardList = inject("fetchBoardList")

        onMounted(() => {
            fetchBoardList()
        })

        return {
            isMember,
            boards,
        }
    }
}
</script>