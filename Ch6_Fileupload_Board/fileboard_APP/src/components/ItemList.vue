<template>
    <div>
        <!-- 6.7 delete
        <h3>item list view</h3>
        <router-link :to="{name : 'ItemReadPage', params: {itemId:100}}">Detail to item</router-link>
        -->
        <table border="1">
            <tr>
                <th align="center" width="80">Item Id</th>
                <th align="center" width="320">Item Name</th>
                <th align="center" width="100">Item Price</th>
            </tr>

            <tr v-if="!items || (Array.isArray(items) && items.length===0)">
                <td colspan="3">
                    List is Empty
                </td>
            </tr>

            <tr v-else v-for="item in items" :key="item.itemId">
                <td align="center">{{ item.itemId }}</td>
                <td align="left"><router-link :to="{ name: 'ItemReadPage', params: {itemId : item.itemId.toString() }}"> {{item.itemName}}</router-link></td>
                <td align="right"> {{item.price }} won</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : 'ItemList',
    props: {
        items: {
            type: Array
        }
    }
}

</script>