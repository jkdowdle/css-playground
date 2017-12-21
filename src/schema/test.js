import gql from 'graphql-tag'

export default {
  Query: {
    hello: () => 'Start typing!'
  },
  Mutation: {
    updateHello(_, { value }, { cache }) {
      const query = gql`
        query HelloWorld {
          hello @client
        }
      `

      // const prev = cache.readQuery({ query })

      const data = {
        hello: value
      }

      cache.writeQuery({ query, data })

      return value
    }
  }
}