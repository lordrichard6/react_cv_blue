import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Variables } from '../../assets/variables'
import logo from '../../assets/images/icon.png'

export function ComingSoon() {
    return (
        <PageContainer>
            <img src={logo} alt="logo" />
            <Title>Coming Soon</Title>
            <Title>Be Patient!!</Title>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        flex-wrap
        w-full
        h-screen
        items-center
        justify-center
        overflow-x-hidden
    `}
    img {
        ${tw`
            w-9/12
            lg:w-1/4
            h-auto
        `}
    }
`

const Title = styled.h1`
        color: ${Variables.primary};
    ${tw`
        text-4xl
        lg:text-6xl
        tracking-widest
    `}
`

