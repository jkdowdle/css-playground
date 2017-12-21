import styled from 'styled-components'

export const Main = styled.div`
  filter: ${({ blured }) => blured && `opacity(0.2) drop-shadow(2px 3px 2px #333)`};
  transition: filter 300ms ease;
  -webkit-transition : -webkit-filter 300ms linear;
  padding: 0.25rem;
`

export const SideMenu = styled.nav`
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
  overflow: hidden;
`

export const Canvas = styled.div`
  position: relative;
  width: 100%;
  transform: ${({ open }) => `translate3d(${open ? '335px' : '0'}, 0, 0)`};  
  transition: all 300ms cubic-bezier(.694, .0482, .335, 1);
  height: 100vh;
  background: #edf6f6;
`

export const Toggle = styled.button`
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

export const Ul = styled.ul`
  list-style: none;
  padding: 0 1rem;
`

export const NavCirc = styled.li`
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ active, position }) => active === position ? '#2196f3' : '#fff'};
  border-radius: 1rem;
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`

export const UlCirc = Ul.extend`
  display: flex;
  justify-content: center;
`

export const Pannels = styled.div`

`

export const Pannel = styled.div`
  width: 100%;
  position: absolute;
  left: ${({ active, left, position }) => {
    // const scale = {
    //   3: 0,
    //   2: 375,
    //   1: 750,
    // }
    // const view = 375
    // const canvas = view * 3
    // const pos = canvas - (view * position)
    // console.log('pan', lleft)
    return `${left}px`
  }};
  top: 100px;
  transition: all 300ms cubic-bezier(.694, .0482, .335, 1);
`

// export const SIDEBAR_STATE = gql`
//   query SidebarState {
//     sidebarOpen @client
//     activePannel @client
//   }
// `

// export const withState = graphql(SIDEBAR_STATE, {
//   props: ({ data: { loading }}) => {
//     if(loading) {
//       return {}
//     }

//     return {
      
//     }
//   }
// })