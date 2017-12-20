import gql from 'graphql-tag'

export default {
  Query: {
    hello: () => 'hello',
    sidebarOpen: () => false,
    activePannel: () => 3
  },
  Mutation: {
    toggleSidebar: () => ({}),
    activatePannel: (_, { pannel }, { cache }) => {

      const query = gql`
        query ActivePannel {
          activePannel @client
        }
      `

      const prev = cache.readQuery({ query })

      console.log('prev', prev)

      return 55
    }
  }
}