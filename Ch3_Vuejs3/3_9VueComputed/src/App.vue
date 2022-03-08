<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.name">
      {{item.name}}의 가격 : <input type = "text" v-on:input="item.price = $event.target.value" v-bind:value="item.price">
    </li>
  </ul>
  <hr>
  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item.name">
        {{item.name}} : {{item.price}} * {{item.qu}} = {{item.price * item.qu}}원
      </li>
    </ul>
    <p>합계 : {{totalPrice}} 원</p>
  </div>
</template>

<script>
import {ref, computed} from 'vue';

export default{
  setup(){
    const items = ref([
      {name : 'CPU',price: 36000, qu : 1},
      {name : 'mainboard', price : 80000, qu:2},
      {name : 'memory', price : 160000, qu:2 }
    ])

    const totalPrice = computed(() =>{
      return items.value.reduce(function(sum, item){
        return sum  + (item.price * item.qu)
      },0)
    })

    return {
      items,
      totalPrice
    }
  }
}
</script>