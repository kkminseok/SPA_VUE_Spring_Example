<template>
    <div align="center">
        <h2>Charge Log</h2>
        <coin-charge-list :chargeCoins="chargeCoins"></coin-charge-list>
    </div>
    
</template>
<script>
import CoinChargeList from '/@components/coin/CoinChargeList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'CoinChargeListPage',
    components: { CoinChargeList },
    setup() {
        const chargeCoins = inject("chargeCoins")
        const fetchChargeCoinList = inject("fetchChargeCoinList")

        onMounted(() => {
            fetchChargeCoinList()
        })

        return {
            chargeCoins,
        }
    }
}
</script>