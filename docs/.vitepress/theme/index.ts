import 'windi-base.css'
import 'windi-components.css'
import 'windi-utilities.css'
import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'

import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import DemoWrapper from './DemoWrapper.vue'

if (import.meta.env.DEV) {
  import('../../../dist/es/mand-mobile.min.css')
}

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('DemoWrapper', DemoWrapper)
  },
}

export default theme