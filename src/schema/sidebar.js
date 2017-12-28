import gql from 'graphql-tag'

export default {
  Query: {
    sidebarOpen: () => false,
    activePannel: () => 3,
    // sidebarState: (_, args, { cache }) => {

    //   const query = gql`
    //     query SidebarState {
    //       activePannel @client
    //     }
    //   `

    //   const hola = cache.readQuery({ query })

    //   console.log('hola', hola)

    //   return hola
    // }
  },
  Mutation: {
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
    },
    activatePannel(_, { pannel }, { cache }) {
      const query = gql`
        query ActivePannel {
          activePannel @client
        }
      `

      const data = {
        activePannel: pannel 
      }

      cache.writeQuery({ query, data })

      return data.activePannel
    }
  }
}