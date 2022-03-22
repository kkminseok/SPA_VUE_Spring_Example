<template>
    <div align="center">
        <h2>Coin Charge</h2>
        <coin-charge-register-form @charge-coin="chargeCoin"/>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import CoinChargeRegisterForm from '/@components/coin/CoinChargeRegisterForm.vue'
import { router } from '/@router/router.js'

export default {
    name: 'CoinChargeRegisterPage',
    components: { CoinChargeRegisterForm },
    setup() {
        const chargeCoin = (payload) => {
            const { amount } = payload
            client.post(`/coins/charge/${amount}`, {amount})
                .then(res => {
                    alert(res.data)
                    router.push({
                        name: 'CoinChargeListPage'
                    })
                })
                .catch(err => {
                    if(err.response.status === 401) {
                        alert('Plz Login')
                        router.push({ name: 'Signin' })
                    }else if(err.response.status === 403){
                        alert('plz access allow')
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }
                })
        }
        return {
            chargeCoin,
        }
    }
}
</script>