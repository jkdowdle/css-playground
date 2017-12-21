import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import {
  SideMenu,
  Toggle,
  Pannel,
  Ul,
  UlCirc,
  NavCirc,
  Pannels
} from './styled'

export const SIDEBAR_STATE = gql`
  query SidebarState {
    sidebarOpen @client
    activePannel @client
  }
`

export const withState = graphql(SIDEBAR_STATE, {
  props: ({ ownProps: { position }, data: { activePannel, sidebarOpen } }) => {
    const scale = {
      3: 0,
      2: 375,
      1: 750,
    }
    const view = 375
    const canvas = view * 3
    const pos = canvas - (view * position)
    const lleft = pos - scale[activePannel]
    
    const left = canvas - (view * position)
    const rep = (canvas - (view * position)) - scale[activePannel]

    console.log('left', rep, lleft)

    return {
      lleft
    }
  }
})

const PPanel = withState(Pannel)

export const Sidebar = ({ toggle, open, pannel, pannelSw }) => {
  return (
    <SideMenu open={open}>
      <Toggle onClick={toggle}>x</Toggle>

      <Pannels>
        <PPanel active={pannel} position={3} left={375}>
          <Ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </Ul>
        </PPanel>

        <PPanel active={pannel} position={2} left={375}>
          <Ul>
            <li>Link 5</li>
            <li>Link 6</li>
            <li>Link 7</li>
            <li>Link 8</li>
          </Ul>
        </PPanel>

        <PPanel active={pannel} position={1} left={375}>
          <Ul>
            <li>Link 9</li>
            <li>Link 10</li>
            <li>Link 11</li>
            <li>Link 12</li>
          </Ul>
        </PPanel>
      </Pannels>

      <nav>
        <UlCirc>
          <NavCirc active={pannel} position={3} onClick={() => pannelSw(3)}></NavCirc>
          <NavCirc active={pannel} position={2} onClick={() => pannelSw(2)}></NavCirc>
          <NavCirc active={pannel} position={1} onClick={() => pannelSw(1)}></NavCirc>
        </UlCirc>
      </nav>
    </SideMenu>
  )
}

export default Sidebar