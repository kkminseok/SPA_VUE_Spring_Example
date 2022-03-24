import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const usePds = () => {
    const state = reactive({
        pdsItems: [],
        pdsItem: null,
        attachments: [],
    })

    const pdsItems = computed(() => state.pdsItems)
    const pdsItem = computed(() => state.pdsItem)
    const attachments = computed(() => state.attachments)

    const FETCH_LIST = (pdsItems) => {
        state.pdsItems = pdsItems
    }

    const FETCH_ONE = (pdsItem) => {
        state.pdsItem = pdsItem
    }

    const FETCH_ATTACH_LIST = (attachments) => {
        state.attachments = attachments
    }

    const ADD_ATTACH = (attach) => {
        state.attachments.push(attach)
    }

    const REMOVE_ATTACH = (index) => {
        state.attachments.splice(index,1)
    }

    const fetchPdsList = () => {
        return client.get('/pds')
            .then(res => {
                FETCH_LIST(res.data)
            })
    }

    const fetchPds = (itemId) => {
        return client.get(`/pds/${itemId}`)
            .then(res => {
                FETCH_ONE(res.data)

                return client.get(`/pds/attach/${itemId}`)
            }).then(res =>{
                FETCH_ATTACH_LIST(res.data)
            })
    }

    const addAttach = (file) => {
        let formData = new FormData()

        formData.append("file",file)

        return client.post('/pds/upload',formData,
        {
            headers: {
                'Content-Type' : 'multipar/form-data'
            }
        })
        .then(res => {
            ADD_ATTACH(res.data)
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    const removeAttach = (index) => {
        REMOVE_ATTACH(index)
    }

    return {
        pdsItem,
        pdsItems,
        attachments,
        fetchPds,
        fetchPdsList,
        addAttach,
        removeAttach,
    }
}