<template>
  <item-main></item-main>
</template>
<script>
import {ref, provide, readonly} from 'vue'
import ItemMain from './components/ItemMain.vue'

export default {
  name: 'App',
  components:{
    ItemMain,
  },
  setup() {
    const items = ref([
      {
        name: 'CPU', price: 462984, quantity: 1
      }, 
      {
        name: '메인보드', price: 112053, quantity: 1
      }, 
      {
        name: '메모리', price: 79608, quantity: 2
      }
    ])

    const changePrice = (newPrice, index) =>{
      items.value[index].price = newPrice
    }

    provide('items',readonly(items))
    provide('changePrice',changePrice)
    
  },
}
</script>