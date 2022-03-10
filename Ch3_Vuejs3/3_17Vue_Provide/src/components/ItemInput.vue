<template>
    <div> {{item.name}}의 가격 : <input type="text" v-on:input="item.price = $event.target.value" v-bind:value="item.price"></div>
</template>

<script>
export default{
    name: 'ItemInput',
    props: ['item'],
}
</script>