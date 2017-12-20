import React from 'react'

import {
  SideMenu,
  Toggle,
  Pannel,
  Ul,
  UlCirc,
  NavCirc
} from './styled'

export const Sidebar = ({ toggle, open, pannel, pannelSw }) => {
  return (
    <SideMenu open={open}>
      <Toggle onClick={toggle}>x</Toggle>

      <Pannel active={pannel} position={3} left={375}>
        <Ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </Ul>
      </Pannel>

      <Pannel active={pannel} position={2} left={375}>
        <Ul>
          <li>Link 5</li>
          <li>Link 6</li>
          <li>Link 7</li>
          <li>Link 8</li>
        </Ul>
      </Pannel>

      <Pannel active={pannel} position={1} left={375}>
        <Ul>
          <li>Link 9</li>
          <li>Link 10</li>
          <li>Link 11</li>
          <li>Link 12</li>
        </Ul>
      </Pannel>

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