<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">Item Num</th>
                <th align="center" width="120">Item Name</th>
                <th align="center" width="120">Price</th>
                <th align="center" width="180">RegDate</th>
            </tr>
            <tr v-if="!payCoins || (Array.isArray(payCoins) && payCoins.length===0)">
                <td colspan="4">
                    List is Empty.
                </td>
            </tr>

            <tr v-else v-for="payCoin in payCoins" :key="payCoin.historyNo">
                <td align="center">{{ payCoin.historyNo }}</td>
                <td align="left">{{ payCoin.itemName }}</td>
                <td align="left">{{ payCoin.amount }}</td>
                <td align="center">{{ payCoin.regDate }}</td>
            </tr>

        </table>
    </div>
</template>
<script>
export default {
    name: 'CoinPayList',
    props: {
        payCoins: {
            type:Array
        }
    }
}
</script>