import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const useMember = () => {
    const state = reactive({
        jobCodes: [],
        members: [],
        member: null,
    })

    const jobCodes = computed(() => state.jobCodes)
    const members = computed(() => state.members)
    const member = computed(() => state.member)

    const FETCH_JOBCODE_LIST = (jobCodes) => {
        state.jobCodes = jobCodes
    }

    const FETCH_MEMBER_LIST = (members) => {
        state.members = members
    }

    const FETCH_MEMBER = (member) => {
        state.member = member
    }

    const fetchJobCodeList = () => {
        return client.get('/codes/job')
            .then(res => {
                FETCH_JOBCODE_LIST(res.data)
            })
    }

    const fetchMemberList = () => {
        return client.get('/users')
            .then(res => {
                FETCH_MEMBER_LIST(res.data)
            })
    }

    const fetchMember = (userNo) => {
        return client.get(`/users/${userNo}`)
            .then(res => {
                FETCH_MEMBER(res.data)
            })
    }

    
    return {
        jobCodes,
        fetchJobCodeList,
        member,
        members,
        fetchMember,
        fetchMemberList,
    }
}