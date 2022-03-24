import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import CoinChargeListPage from '/@pages/coin/CoinChargeListPage.vue'
import CoinChargeRegisterPage from '/@pages/coin/CoinChargeRegisterPage.vue'
import CoinPayListPage from '/@pages/coin/CoinPayListPage.vue'

export const CoinRouters = [
  {
    path: '/coin',
    name: 'CoinChargeListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CoinChargeListPage,
      footer: Footer
    },
  },
  {
    path: '/coin/register',
    name: 'CoinChargeRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CoinChargeRegisterPage,
      footer: Footer
    },
  },
  {
    path: '/coin/pay',
    name: 'CoinPayListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: CoinPayListPage,
      footer: Footer
    },
  },
]
