<template>
  <ul>
    <li v-for ="item in items" v-bind:key="item.name">
      {{item.name}} : {{item.price}} * {{item.qu}} = {{item.price * item.qu}} 원
    </li>
  </ul>
</template>

<script>
import {ref} from 'vue'

export default{
  setup(){
    const message = ref("3_8 message vue template")

    const items = ref([
      {name : 'CPU',price: 36000, qu : 1},
      {name : 'mainboard', price : 80000, qu:2},
      {name : 'memory', price : 160000, qu:2 }
    ])

    return {
      message,
      items
    }
  }
}

</script>