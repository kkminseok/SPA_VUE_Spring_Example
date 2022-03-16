<template>
    <div align="center">
        <h2>Item List</h2>
        <router-link :to="{name : 'ItemRegisterPage' }">add to item</router-link>
        <item-list :items="items"/>
    </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
import client from '../modules/client'
import {ref, onMounted } from 'vue'
export default {
    name: 'ItemListPage',
    components: {ItemList},
    setup(){
        const items = ref([])

        onMounted (() =>{
            client.get('/items')
            .then(res =>{
                items.value = res.data
            })
            .catch(err => {
                alert(err.response.data.msg)
            })
        })

        return {
            items,
        }
    }
}

</script>