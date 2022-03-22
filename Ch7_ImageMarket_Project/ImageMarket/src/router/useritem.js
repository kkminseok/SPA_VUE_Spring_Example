import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import UserItemListPage from '/@pages/useritem/UserItemListPage.vue'
import UserItemReadPage from '/@pages/useritem/UserItemReadPage.vue'

export const UserItemRouters = [
  {
    path: '/useritem',
    name: 'UserItemListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: UserItemListPage,
      footer: Footer
    },
  },
  {
    path: '/useritem/:userItemNo',
    name: 'UserItemReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: UserItemReadPage,
      footer: Footer
    },
    props: {
      default: true
    },
  }
]
