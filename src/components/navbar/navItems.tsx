import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

export function NavItems() {
    return (
        <ListContainer>
            <NavItem >
                <a href="/#">Home</a>
            </NavItem>
            <NavItem >
                <a href="/#">myProjects</a>
            </NavItem>
            <NavItem >
                <a href="/#">myEducation</a>
            </NavItem>
            <NavItem >
                <a href="/#">mySkills</a>
            </NavItem>
            <NavItem >
                <a href="/#">extra</a>
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
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
`