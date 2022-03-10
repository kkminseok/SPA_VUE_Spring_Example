<template>
  <item-main v-bind:items="items"></item-main>
</template>

<script>
import {ref} from 'vue'
import ItemMain from './components/ItemMain.vue'

export default{
  setup() {
    const items = ref([
      {name : 'CPU', price:467263, qu:2},
      {name: 'mainboard', price :384482, qu:4},
      {name: 'memory', price: 79234, qu:2}
    ])    

    return {
      items,
    }
  },
  components:{
    ItemMain,
  }
}
</script>
