import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '../responsive'
import menuStyles from './menuStyles'
import { Link } from 'react-router-dom'

export function NavItems() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    if (isMobile)
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/projects">myProjects</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/education">myEducation</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/skills">mySkills us</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/extra">extra</Link>
                    </NavItem>
                </ListContainer>
            </Menu>
        );

    return (
        <ListContainer>
            <NavItem >
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem >
                <Link to="/projects">myProjects</Link>
            </NavItem>
            <NavItem >
                <Link to="/education">myEducation</Link>
            </NavItem>
            <NavItem >
                <Link to="/skills">mySkills</Link>
            </NavItem>
            <NavItem >
                <Link to="/extra">extra</Link>
            </NavItem>
        </ListContainer>
    )
}

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        text-xs
        lg:text-xl
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-blue-500
    `}
    ${({ menu }) =>
        menu &&
        css`
            ${tw`
                text-white
                text-xl
                mb-3
                focus:text-white
            `}
        `
    }
`