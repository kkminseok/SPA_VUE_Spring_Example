<template>
    <div align="center">
        <h2>CodeGroup List</h2>
        <router-link :to="{name: 'CodeGroupRegisterPage' }">Add New</router-link>
        <code-group-list :codeGroups="codeGroups"/>
    </div>
</template>
<script>
import CodeGroupList from '/@components/codegroup/CodeGroupList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'CodeGroupListPage',
    components: { CodeGroupList },
    setup() {
        const codeGroups = inject("codeGroups")
        const fetchCodeGroupList = inject("fetchCodeGroupList")

        onMounted(() => {
            fetchCodeGroupList()
        })

        return {
            codeGroups,
        }
    }
}
</script>