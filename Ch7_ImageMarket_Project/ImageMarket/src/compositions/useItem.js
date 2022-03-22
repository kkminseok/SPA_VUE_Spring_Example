import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const useItem = () => {
    const state = reactive({
        items: [],
        item: null,
    })

    const items = computed(() => state.items)
    const item = computed(() => state.item)

    const FETCH_LIST = (items) => {
        state.items = items
    }
    
    const FETCH_ONE = (item) => {
        state.item = item
    }

    const fetchItemList = () => {
        return client.get('/items')
            .then(res => {
                FETCH_LIST(res.data)
            })
    }

    const fetchItem = (itemId) => {
        return client.get(`/items/${itemId}`)
            .then(res => {
                FETCH_ONE(res.data)
            })
    }

    return {
        items,
        item,
        fetchItem,
        fetchItemList,
    }
}