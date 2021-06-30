import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

import { SCREENS } from "../responsive"
import logo from '../../assets/images/icon.png'
import { Variables } from '../../assets/variables'


export function Logo() {
    return (
        <LogoContainer>
            <Image>
                <img src={logo} alt="logo" />
            </Image>
            <LogoText>Paulo Lopes Reizinho</LogoText>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
    /* color: ${Variables.primary}; */
    ${tw`
        text-white
        text-2xl
        md:text-3xl
        font-semibold
        m-1
    `}
    @media (min-width: ${SCREENS.md}){
        letter-spacing: 0.2em;
    }
`;

const Image = styled.div`
    width: auto;
    ${tw`
        h-6
        md:h-9
    `}

    img {
        width: auto;
        height: 100%;
    }
`;