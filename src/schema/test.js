import gql from 'graphql-tag'

export default {
  Query: {
    hello: () => 'Start typing!',
    sidebarOpen: () => false
  },
  Mutation: {
    updateHello(_, { value }, { cache }) {
      const query = gql`
        query HelloWorld {
          hello @client
        }
      `

      const prev = cache.readQuery({ query })

      console.log('prev', prev)

      const data = {
        hello: value
      }

      cache.writeQuery({ query, data })
    

      return value
    },
    toggleSidebar(_, args, { cache }) {
      const query = gql`
        query SidebarState {
          sidebarOpen @client
        }
      `

      const { sidebarOpen } = cache.readQuery({ query })

      const data = {
        sidebarOpen: !sidebarOpen
      }

      cache.writeQuery({ query, data })

      return data.sidebarOpen
    }
  }
}