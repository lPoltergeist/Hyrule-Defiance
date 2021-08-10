import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background-color: #017FBA;
height: 30px;
display: flex;
justify-content: center;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
opacity: 0,2;
margin-top: 10px;
`

export const NavLink = styled(Link)`
color: #FFF;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: Triforce;
font-size: 25px;

&.active {
    color: #D7DF01;
    }
`

export const Bars = styled(FaBars)`
display:none;
color: #fff;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #D7DF01;
padding: 10px 22px:
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out:
    background: #fff;
    color: #D7DF01;
}
`;