import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import PdsListPage from '/@pages/pds/PdsListPage.vue'
import PdsRegisterPage from '/@pages/pds/PdsRegisterPage.vue'
import PdsModifyPage from '/@pages/pds/PdsModifyPage.vue'
import PdsReadPage from '/@pages/pds/PdsReadPage.vue'

export const PdsRouters = [
  {
    path: '/pds',
    name: 'PdsListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: PdsListPage,
      footer: Footer
    }
  },
  {
    path: '/pds/register',
    name: 'PdsRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: PdsRegisterPage,
      footer: Footer
    },
  },
  {
    path: '/pds/:itemId',
    name: 'PdsReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: PdsReadPage,
      footer: Footer
    },
    props: {
      default: true
    }
  },
  {
    path: '/pds/:itemId/modify',
    name: 'PdsModifyPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: PdsModifyPage,
      footer: Footer
    },
    props: {
      default: true
    },
  }
]
