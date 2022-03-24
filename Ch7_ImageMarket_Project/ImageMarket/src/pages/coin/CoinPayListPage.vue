<template>
    <div align="center">
        <h2>Buy Log</h2>
        <coin-pay-list :payCoins="payCoins"></coin-pay-list>
    </div>
</template>
<script>
import CoinPayList from '/@components/coin/CoinPayList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'CoinPayListPage',
    components: { CoinPayList },
    setup() {
        const payCoins = inject("payCoins")
        const fetchPayCoinList = inject("fetchPayCoinList")

        onMounted(() => {
            fetchPayCoinList()
        })

        return {
            payCoins,
        }
    }
}
</script>