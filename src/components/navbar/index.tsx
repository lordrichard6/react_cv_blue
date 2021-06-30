import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

import { NavItems } from './navItems'
import { Logo } from '../logo'
import {Variables } from '../../assets/variables'

export function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    background-color: ${Variables.primary};
    min-height: 68px;
    ${tw`
        flex
        flex-row
        flex-wrap
        items-center
        px-4
        lg:px-24
        2xl:px-80
        justify-between
    `}
`;

const LogoContainer = styled.div``