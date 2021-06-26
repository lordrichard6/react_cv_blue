import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

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
        h-full
        items-center
        justify-center
        overflow-x-hidden
    `}
`

const Title = styled.h1`
        color: #0094B5;
    ${tw`
        text-6xl
        tracking-widest
    `}
`

const Text = styled.h1`
        color: #0094B5;
    ${tw`
        text-2xl
    `}
`

