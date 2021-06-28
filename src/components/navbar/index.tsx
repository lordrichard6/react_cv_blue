import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

import { NavItems } from './navItems'
import { Logo } from '../logo'

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
    min-height: 68px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        px-4
        lg:px-24
        justify-between
    `}
`;

const LogoContainer = styled.div``