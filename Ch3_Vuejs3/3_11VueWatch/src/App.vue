<template>
  mainboard Price : <input type="text" v-on:input="price = $event.target.value" v-bind:value ="price">
  
</template>

<script>
import {ref, watch} from 'vue';

export default{
  setup(){
    const price = ref(91273)

    watch(
      price,
      (cur,prev) =>{
        console.log("변경되기 전 : ",prev)
        console.log("변경된 후 : ",cur);
        },
        {immediate: true},
    )

    return {
      price
    }
  }
}
</script>