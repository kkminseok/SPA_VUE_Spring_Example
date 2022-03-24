import { reactive, computed} from 'vue'
import client from '/@modules/client.js'

export const useCoin = () => {
    const state = reactive({
        chargeCoins: [],
        payCoins: [],
    })

    const chargeCoins = computed(() => state.chargeCoins)
    const payCoins = computed(() => state.payCoins)

    const FETCH_CHARGECOIN_LIST = (chargeCoins) => {
        state.chargeCoins = chargeCoins
    }

    const FETCH_PAYCOIN_LIST = (payCoins) => {
        state.payCoins = payCoins
    }

    const fetchChargeCoinList = () => {
        return client.get('/coins')
            .then(res => {
                FETCH_CHARGECOIN_LIST(res.data)
            })
    }

    const fetchPayCoinList = () => {
        return client.get('/coins/pay')
            .then(res => {
                FETCH_PAYCOIN_LIST(res.data)
            })
    }

    

    return {
        chargeCoins,
        fetchChargeCoinList,
        payCoins,
        fetchPayCoinList,
    }
}