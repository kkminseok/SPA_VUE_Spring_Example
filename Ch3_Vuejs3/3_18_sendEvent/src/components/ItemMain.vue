<template>
    <ul>
        <li v-for="(item,index) in items" v-bind:key="item.name">
            <item-input v-bind:item="item" v-bind:item-index="index" v-on:change-price="handleChangePrice"></item-input>
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
        const items = inject('items')
        const changePrice = inject('changePrice')

        const handleChangePrice = (newPrice, index) =>{
            changePrice(newPrice,index)
        }

        return{
            items,
            handleChangePrice,
        }
    }
}
</script>