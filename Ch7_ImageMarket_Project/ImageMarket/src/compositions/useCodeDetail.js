import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const useCodeDetail = () => {

    const state = reactive({
        codeDetails: [],
        codeDetail: null,
    })

    const codeDetails = computed(()=> state.codeDetails)
    const codeDetail = computed(() => state.codeDetail)

    const FETCH_LIST = (codeDetails) =>{
        state.codeDetails = codeDetails
    }

    const FETCH_ONE = (codeDetail) => {
        state.codeDetail = codeDetail
    }

    const fetchCodeDetailList = () => {
        return client.get('/codedetails')
        .then(res => {
            FETCH_LIST(res.data)
        })
    }

    const fetchCodeDetail = (payload) => {
        const {groupCode, codeValue} = payload

        return client.get(`/codedetails/${groupCode}/${codeValue}`)
        .then(res => {
            FETCH_ONE(res.data)
        })
    }

    return {
        codeDetail,
        codeDetails,
        fetchCodeDetailList,
        fetchCodeDetail,
    }
}