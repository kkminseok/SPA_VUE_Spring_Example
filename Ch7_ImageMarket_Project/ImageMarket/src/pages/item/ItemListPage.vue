<template>
    <div align="center">
        <h2>Item List</h2>
        <template v-if="isAdmin">
            <router-link :to="{ name: 'ItemRegisterPage' }">Add Item</router-link>
        </template>
        <item-list :items="items"></item-list>
    </div>
</template>
<script>
import ItemList from '/@components/item/ItemList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'ItemListPage',
    components: { ItemList },
    setup() {
        const isAdmin = inject("isAdmin")
        const items = inject("items")
        const fetchItemList = inject("fetchItemList")

        onMounted(() => {
            fetchItemList()
        })

        return {
            isAdmin,
            items,
        }
    }
}
</script>