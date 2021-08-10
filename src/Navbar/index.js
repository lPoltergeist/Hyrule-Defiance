import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements';




const Navbar = () => {
    return (
        <>
            <Nav>
            <NavMenu>
            <NavLink to="/about" activeStyle>
                        Home
                    </NavLink>
               
                     <NavLink to="/Monstros" activeStyle>
                        Monstros
                    </NavLink>
                    <NavLink to="/Trilha" activeStyle>
                      Trilha Sonora
                    </NavLink>
                    <NavLink to="/Regras" activeStyle>
                       Regras
                    </NavLink>
                  <NavLink to="/Mapa" activeStyle>
                        Mapa
                    </NavLink> 
                    
                </NavMenu>
              
            </Nav>
        </>
       
        
    )
}





export default Navbar
