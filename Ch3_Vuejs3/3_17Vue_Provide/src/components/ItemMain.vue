<template>
    <ul>
        <li v-for="item in items" v-bind:key="item.name">
            <item-input v-bind:item="item"></item-input>
        </li>
    </ul>
    <hr>
    <item-list v-bind:items="items"></item-list>
</template>

<script>
import {inject} from 'vue'
import ItemList from './ItemList.vue'
import ItemInput from './ItemInput.vue'

export default{
    name: 'ItemMain',
    components:{
        ItemList,
        ItemInput,
    },
    setup(){
        const items= inject('items')

        return{
            items,
        }
    }
}
</script>