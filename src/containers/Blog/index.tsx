import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Header } from './header'
import {Posts} from './posts'

export function Blog() {
    return (
        <PageContainer>
            <Header />
            <Posts />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-screen
        items-center
        overflow-x-hidden
        lg:px-20
    `}
`

