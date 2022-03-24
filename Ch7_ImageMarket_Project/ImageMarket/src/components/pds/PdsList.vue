<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">pds Num</th>
                <th align="center" width="320">pds Name</th>
                <th align="center" width="100">pds look</th>
            </tr>

            <tr v-if="!pdsItems || (Array.isArray(pdsItems) && pdsItems.length ===0 )">
                <td colspan="3">
                    List is Empty.
                </td>
            </tr>

            <tr v-else v-for="item in pdsItems" :key="item.itemId">
                <td align="center"> {{item.itemId}}</td>
                <td align="left"><router-link :to="{ name: 'PdsReadPage', params: {itemId: item.itemId.toString()}}">{{item.itemName}}</router-link></td>
                <td align="right">{{item.viewCnt}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'PdsList',
    props: {
        pdsItems: {
            type:Array
        }
    }
}
</script>