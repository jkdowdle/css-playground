import React from 'react'

import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Test = ({ data: { loading, hello }, updateValue }) => {
  return (
    <div>
      <input
        type="text"
        onChange={({ target: { value } }) => updateValue(value)}
      />
      <h2>{!loading && hello}</h2>
    </div>
  )
}

const query = gql`
  query HelloWorld {
    hello @client
  }
`

const withQuery = graphql(query)

const mutation = gql`
  mutation UpdateHello($value: String) {
    updateHello(value: $value) @client
  }
`

const withMutation = graphql(mutation, {
  props: ({ mutate }) => {
    const updateValue = value =>
      mutate({
        variables: { value }
      })

    return {
      updateValue
    }
  }
})

const enhanced = compose(withQuery, withMutation)

export default enhanced(Test)
