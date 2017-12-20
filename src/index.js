import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'

import client from './app-client'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    {<App />}
  </ApolloProvider>, 
  document.getElementById('root')
)

registerServiceWorker()
