<template>
    <div align="center">
        <h2>pds List</h2>
        <router-link v-if="isAdmin" :to="{ name: 'PdsRegisterPage' }">Add Pds</router-link>
        <pds-list :pdsItems="pdsItems"/>
    </div>
</template>
<script>
import PdsList from '/@components/pds/PdsList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'PdsListPage',
    components: { PdsList },
    setup() {
        const isAdmin = inject("isAdmin")
        const pdsItems = inject("pdsItems")
        const fetchPdsList = inject("fetchPdsList")

        onMounted(() => {
            fetchPdsList()
        })

        return {
            isAdmin,
            pdsItems,
        }
    }
}
</script>