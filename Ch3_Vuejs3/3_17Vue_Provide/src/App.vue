<template>
  <item-main></item-main>
</template>

<script>
import {ref, provide,readonly} from 'vue'
import ItemMain from './components/ItemMain.vue'


export default{
  name: 'App',
  components:{
      ItemMain
  },
  setup(){
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
    //공유할 데이터 정의 , readonly설정시 provide하는 컴포넌트에서만 수정 가능.
    provide('items',readonly(items))
  }
}
</script>