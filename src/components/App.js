import React from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Sidebar from './Sidebar'
import {
  Canvas,
  Main
} from './styled'

import Test from './test'

export class App extends React.Component {
  state = {
    open: false,
    pannel: {
      active: 3
    }
  }

  toggle = () => this.setState({ open: !this.state.open })

  activatePannel = (position) => this.setState({ pannel: { active: position }})

  render() {
    const { sidebarOpen, toggleSidebar } = this.props

    return (
      <Canvas open={sidebarOpen}>
        <Sidebar pannel={this.state.pannel.active} open={sidebarOpen} toggle={toggleSidebar} pannelSw={this.activatePannel} />
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
}

const query = gql`
  query SidebarState {
    sidebarOpen @client
  }
`

const withQuery = graphql(query, { props: ({ data: { loading, sidebarOpen }}) => ({ sidebarOpen }) })

const mutation = gql`
  mutation ToggleSidebar {
    toggleSidebar @client
  }
`

const withMutation = graphql(mutation, { 
  props: ({ mutate }) => {
    return {
      toggleSidebar: () => mutate()
    }
  }
})

export default compose(
  withQuery,
  withMutation
)(App)
