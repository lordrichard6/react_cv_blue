import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Variables } from '../../assets/variables'

export function Page404() {
    return (
        <PageContainer>
            <Title>404</Title>
            <Text>This page is lost into oblivion</Text>
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
`

const Title = styled.h1`
        color: ${Variables.primary};
    ${tw`
        text-6xl
        tracking-widest
    `}
`

const Text = styled.h1`
        color: ${Variables.primary};
    ${tw`
        text-2xl
    `}
`

