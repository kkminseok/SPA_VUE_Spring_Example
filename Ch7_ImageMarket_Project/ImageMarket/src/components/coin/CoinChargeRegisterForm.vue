<template>
    <form @submit.prevent="fireChargeCoin">
        <table>
            <tr>
                <td>Charge Coin</td>
                <td><input type="text" v-model="amount"></td>
            </tr>
        </table>

        <div>
            <button type="submit">Charge</button>
            <router-link :to="{ name: 'CoinChargeListPage' }">Coin Charger List</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'CoinChargeRegisterForm',
    emits: ['charge-coin'],
    setup(props,context) {
        const amount = ref('')

        const fireChargeCoin = () => {
            context.emit('charge-coin', { amount: amount.value })
        }

        return {
            amount,
            fireChargeCoin,
        }
    }
}
</script>