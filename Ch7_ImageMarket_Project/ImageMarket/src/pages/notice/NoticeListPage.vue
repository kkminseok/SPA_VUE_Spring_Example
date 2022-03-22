<template>
    <div align="center">
        <h2>Notice List</h2>
        <router-link v-if="isAdmin" :to="{ name: 'NoticeRegisterPage' }">Add new Notice</router-link>
        <notice-list :notices="notices"></notice-list>
    </div>
</template>
<script>
import NoticeList from '/@components/notice/NoticeList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'NoticeListPage',
    components: {NoticeList},  
    setup() {
        const isAdmin = inject("isAdmin")
        const notices = inject("notices")
        const fetchNoticeList = inject("fetchNoticeList")

        onMounted(() => {
            fetchNoticeList()
        })

        return {
            isAdmin,
            notices,
        }
    }
}
</script>