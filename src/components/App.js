import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  filter: ${({ blured }) => blured && `opacity(0.2) drop-shadow(2px 3px 2px #333)`};
  transition: filter 300ms ease;
  -webkit-transition : -webkit-filter 300ms linear;
  padding: 0.25rem;
`

const SideMenu = styled.nav`
  padding: 0.5rem};
  box-sizing: border-box;
  position: absolute;
  left: -335px;
  width: 335px;
  background: #373737;
  top: 0;
  bottom: 0;
  color: #fff;
  box-shadow: ${({ open }) => open && `1.5px 0px 0px #373737`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Canvas = styled.div`
  position: relative;
  width: 100%;
  transform: ${({ open }) => `translate3d(${open ? '335px' : '0'}, 0, 0)`};  
  transition: all 300ms cubic-bezier(.694, .0482, .335, 1);
  height: 100vh;
  background: #edf6f6;
`

const Toggle = styled.button`
  align-self: flex-end;
  border-radius: 1rem;
  border: 1px solid white;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0 1rem;
`

const NavCirc = styled.li`
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ active, position }) => active === position ? 'green' : '#fff'};
  border-radius: 1rem;
  margin: 0 0.5rem;
`

const UlCirc = Ul.extend`
  display: flex;
  justify-content: center;
`

const Pannel = styled.div`
  width: 100%;
  position: absolute;
  left: ${({ active, left, position }) => {
    console.log('checking', position, active === position ? '0px' : `${-((left * position) + 335)}px`)
    return active === position ? '0px' : `${-((left * position) + 335)}px`}};
  transition: all 300ms cubic-bezier(.694, .0482, .335, 1);
`

const Sidebar = ({ toggle, open, pannel, pannelSw }) => {
  return (
    <SideMenu open={open}>
      <Toggle onClick={toggle}>x</Toggle>

      <Pannel active={pannel} position={3} left={290}>
        <Ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </Ul>
      </Pannel>

      <Pannel active={pannel} position={2} left={290}>
        <Ul>
          <li>Link 5</li>
          <li>Link 6</li>
          <li>Link 7</li>
          <li>Link 8</li>
        </Ul>
      </Pannel>
      <Pannel active={pannel} position={1} left={290}>
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
    return (
      <Canvas open={this.state.open}>
        <Sidebar pannel={this.state.pannel.active} open={this.state.open} toggle={this.toggle} pannelSw={this.activatePannel} />
        <Main blured={this.state.open}>
          <h2 style={{ margin: 0 }}>App</h2>

          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi placeat minima aperiam voluptatibus quidem maxime perferendis officiis harum maiores? Quod, minima debitis! Soluta assumenda deleniti, vitae sunt id magni vero.</p>
            <p>Maiores veniam quas fuga voluptatibus quo natus libero corrupti saepe ullam cumque autem sit unde provident facere sunt placeat laboriosam hic, sed nemo dolores voluptas ad ut assumenda nulla. Facere.</p>
            <p>Et sed maiores veniam minus quod tempore, enim fugiat non culpa! Voluptatibus porro ab illum totam quo provident harum tempora doloremque corporis exercitationem, laborum cupiditate deserunt, non, nulla ex eum!</p>
          </div>
          
          <button onClick={this.toggle}>Open</button>
        </Main>
      </Canvas>
    )
  }
}

export default App
