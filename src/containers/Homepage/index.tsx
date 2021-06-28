import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import { AboutMe } from './aboutMe'
import { Shape } from '../../components/shape'

export function Homepage() {
    return (
        <PageContainer>
            <TopSection />
            <Shape />
            <AboutMe />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`