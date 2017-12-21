import React from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Sidebar from './Sidebar'
import {
  Canvas,
  Main
} from './styled'

import Test from './test'

export const App = ({ sidebarOpen, toggleSidebar, activePannel, activatePannel }) => {
  return (
    <Canvas open={sidebarOpen}>
      <Sidebar pannel={activePannel} open={sidebarOpen} toggle={toggleSidebar} pannelSw={activatePannel} />
      <Main blured={sidebarOpen}>
        <h2 style={{ margin: 0 }}>App</h2>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi placeat minima aperiam voluptatibus quidem maxime perferendis officiis harum maiores? Quod, minima debitis! Soluta assumenda deleniti, vitae sunt id magni vero.</p>
          <p>Maiores veniam quas fuga voluptatibus quo natus libero corrupti saepe ullam cumque autem sit unde provident facere sunt placeat laboriosam hic, sed nemo dolores voluptas ad ut assumenda nulla. Facere.</p>
          <p>Et sed maiores veniam minus quod tempore, enim fugiat non culpa! Voluptatibus porro ab illum totam quo provident harum tempora doloremque corporis exercitationem, laborum cupiditate deserunt, non, nulla ex eum!</p>
        </div>
        <button onClick={toggleSidebar}>Open</button>
        <br />
        <Test />
      </Main>
    </Canvas>
  )
}

const query = gql`
  query SidebarState {
    sidebarOpen @client
    activePannel @client
  }
`

const withQuery = graphql(query, { props: ({ data: { loading, sidebarOpen, activePannel }}) => 
  loading ? ({}) : ({ sidebarOpen, activePannel }) })

const toggleSidebar = gql`
  mutation ToggleSidebar {
    toggleSidebar @client
  }
`

const withToggleSidebar = graphql(toggleSidebar, { 
  props: ({ mutate }) => ({
    toggleSidebar: () => mutate()
  })
})

const activatePannel = gql`
  mutation ActivatePannel($pannel: Int) {
    activatePannel(pannel: $pannel) @client
  }
`

const withActivatePannel = graphql(activatePannel, {
  props: ({ mutate }) => ({
    activatePannel: (pannel) =>
      mutate({ variables: { pannel } })
  })
})

export default compose(
  withQuery,
  withToggleSidebar,
  withActivatePannel
)(App)
