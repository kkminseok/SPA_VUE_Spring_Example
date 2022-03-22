import { reactive, computed } from 'vue'
import client from '/@modules/client.js'

export const useBoard = () => {

    const state = reactive({
        boards: [],
        board: null
    })

    const boards = computed(() => state.boards)
    const board = computed(() => state.board)

    const FETCH_LIST = (boards) => {
        state.boards = boards
    }

    const FETCH_ONE = (board) => {
        state.board = board
    }

    const fetchBoardList = () => {
        return client.get('/boards')
            .then(res => {
                FETCH_LIST(res.data)
            })
    }

    const fetchBoard = (boardNo) => {
        return client.get(`/boards/${boardNo}`)
            .then(res => {
                FETCH_ONE(res.data)
            })
    }

    return {
        boards,
        board,
        fetchBoardList,
        fetchBoard
    }
}