import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const useUserItem = () => {
    const state = reactive({
        userItems: [],
        userItem: null,
    })

    const userItems = computed(() => state.userItems)
    const userItem = computed(()=> state.userItem)

    const FETCH_USERITEM_LIST = (userItems) => {
        state.userItems = userItems
    }

    const FETCH_USERITEM = (userItem) => {
        state.userItem = userItem
    }

    const fetchUserItemList = () => {
        return client.get('/useritems')
            .then(res => {
                FETCH_USERITEM_LIST(res.data)
            })
    }

    const fetchUserItem = (userItemNo) => {
        return client.get(`/useritems/${userItemNo}`)
            .then(res => {
                FETCH_USERITEM(res.data)
            })
    }

    return {
        userItem,
        userItems,
        fetchUserItem,
        fetchUserItemList,
    }
}