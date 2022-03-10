<template>
    <div>
        <ul>
            <li v-for="item in items" v-bind:key="item.name">
                {{item.name}} : {{item.price}} * {{item.quantity}} = {{item.price * item.quantity}}
            </li>
        </ul>
        <p>total : {{totalPrice}}</p>
    </div>
</template>

<script>
import {computed, inject} from 'vue'

export default {
    name: "ItemList",
    setup() {
        //공유 데이터 접근
        const items = inject('items')

        const totalPrice = computed(()=>{
            return items.value.reduce(function(sum,item){
                return sum + (item.price * item.quantity)
            },0)
        })

        return {
            items,
            totalPrice,
        }
    },
}
</script>