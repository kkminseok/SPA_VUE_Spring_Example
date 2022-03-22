import { reactive, computed} from 'vue'
import client from '/@modules/client.js'

export const useCoin = () => {
    const state = reactive({
        chargeCoins: [],
    })

    const chargeCoins = computed(() => state.chargeCoins)

    const FETCH_CHARGECOIN_LIST = (chargeCoins) => {
        state.chargeCoins = chargeCoins
    }

    const fetchChargeCoinList = () => {
        return client.get('/coins')
            .then(res => {
                FETCH_CHARGECOIN_LIST(res.data)
            })
    }

    return {
        chargeCoins,
        fetchChargeCoinList,
    }
}