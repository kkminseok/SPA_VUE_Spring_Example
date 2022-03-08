<template>
  <h1>{{message}}</h1>
  <h2>{{Items}}</h2>
</template>

<script>
import {ref} from 'vue';

export default{
  setup(){
    const message = ref("3_7 message Data")

    const Items = ref([
      {name : 'CPU',price: 36000, qu : 1},
      {name : 'mainboard', price : 80000, qu:1},
      {name : 'memory', price : 160000, qu:1 }
    ])

    return {
      message,
      Items
    }
  },

  
}

</script>