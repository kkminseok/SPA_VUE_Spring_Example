import { reactive, computed } from "vue";
import client from '/@modules/client.js'

export const useNotice= () => {
    const state = reactive({
        notices: [],
        notice: null,
    })
    
    const notices = computed(() => state.notices)
    const notice = computed(() => state.notice)

    const FETCH_LIST = (notices) => {
        state.notices = notices
    }

    const FETCH_ONE = (notice) => {
        state.notice = notice
    }

    const fetchNoticeList = () => {
        return client.get('/notices')
            .then(res => {
                FETCH_LIST(res.data)
            })
    }

    const fetchNotice = (noticeNo) => {
        return client.get(`/notices/${noticeNo}`)
            .then(res => {
                FETCH_ONE(res.data)
            })
    }

    return {
        notice,
        notices,
        fetchNotice,
        fetchNoticeList,
    }
}
