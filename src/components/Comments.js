import React from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const Comments = ({ data: { loading, comments }}) => {
  if (loading) {
    return "loading..."
  }

  return (
    <div>
      {console.log('coms', comments)}
    </div>
  )
}

export const COMMENTS_QUERY = gql`
  query Comments {
    comments {
      id
      text
      author
    }
  }
`

export const withComments = graphql(COMMENTS_QUERY)

export default compose(
  withComments
)(Comments)