<template>
    <div>
        <ul>
            <li v-for="item in items" v-bind:key="item.name">
                {{item.name}} : {{item.price}} * {{item.qu}} = {{item.price * item.qu}}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue'

export default{
    name: 'ItemList',
    props: {
        items:{
            type:Object,
            default: () =>{
                return []
            }
        }
    },
    setup(props){
        const totalPrice = computed(()=>{
            return props.items.reduce(function(sum,item){
                return sum + (item.price * item.qu)
            },0)
        })

        return {
            totalPrice,
        }
    }
}
</script>