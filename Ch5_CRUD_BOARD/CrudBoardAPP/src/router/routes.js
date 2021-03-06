import BoardListPage from '../pages/BoardListPage.vue'
import BoardRegisterPage from '../pages/BoardRegisterPage.vue'
import BoardReadPage from '../pages/BoardReadPage.vue'
import BoardModifyPage from '../pages/BoardModifyPage.vue'

const routes = [
  {
    path: '/',
    name: 'BoardListPage',
    components: {
      default: BoardListPage
    }
  },
  
  {
    path: '/board/create',
    name: 'BoardRegisterPage',
    components: {
      default: BoardRegisterPage
    }
  },
  
  {
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      default: BoardReadPage
    },
    props: {
      default: true
    }
  },
  
  {
    path: '/board/:boardNo/edit',
    name: 'BoardModifyPage',
    components: {
      default: BoardModifyPage
    },
    props: {
      default: true
    }
  },
  
]

export default routes
