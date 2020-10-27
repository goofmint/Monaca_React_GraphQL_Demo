import Vue from 'vue'
import App from './App.vue'
// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from '@apollo/client/link/context'

// JS import
const VueOnsen = require('vue-onsenui') // eslint-disable-line @typescript-eslint/no-var-requires

Vue.use(VueOnsen)
Vue.config.productionTip = false

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  const accessToken = '583f12153e9d76df10187ac3ce728df1f56a55cf'
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    }
  }
})

const apolloClient = new ApolloClient({
  // eslint-disable-next-line
  cache: new InMemoryCache(),
  // eslint-disable-next-line
  link: authLink.concat(httpLink)
})

new Vue({
  apolloProvider: apolloClient,
  render: h => h(App),
}).$mount('#app')
