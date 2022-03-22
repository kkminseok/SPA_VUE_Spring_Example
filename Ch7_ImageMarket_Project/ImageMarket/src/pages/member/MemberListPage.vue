<template>
    <div align="center">
        <h2>Member List</h2>
        <router-link :to="{ name: 'MemberRegisterPage' }">Add New Member</router-link>
        <member-list :members="members"></member-list>
    </div>
</template>
<script>
import MemberList from '/@components/member/MemberList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'MemberListPage',
    components: { MemberList },
    setup() {
        const members = inject("members")
        const fetchMemberList = inject("fetchMemberList")

        onMounted(() => {
            fetchMemberList()
        })

        return {
            members,
        }
    }
}
</script>