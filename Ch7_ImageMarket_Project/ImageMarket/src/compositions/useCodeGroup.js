import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const useCodeGroup = () => {
    
    const state = reactive({
        codeGroups: [],
        codeGroup: null,
    })

    const codeGroups = computed(() => state.codeGroups)
    const codeGroup = computed(() => state.codeGroup)

    const FETCH_LIST = (codeGroups) => {
        state.codeGroups = codeGroups
    }

    const FETCH_ONE = (codeGroup) => {
        state.codeGroup = codeGroup
    }

    const fetchCodeGroupList = () => {
        return client.get('/codegroups')
        .then(res => {
            FETCH_LIST(res.data)
            console.log("get codegroup list : ",res.data)
        })
    }

    const fetchCodeGroup = (classCode) => {
        return client.get(`/codegroups/${classCode}`)
        .then(res=> {
            FETCH_ONE(res.data)
        })
    }

    return {
        codeGroup,
        codeGroups,
        fetchCodeGroup,
        fetchCodeGroupList,
    }
}