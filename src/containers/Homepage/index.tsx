import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import { Navbar } from '../../components/navbar'
import { AboutMe } from './aboutMe'
import { Footer } from '../../components/footer'
import { Shape } from '../../components/shape'

export function Homepage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Shape />
            <AboutMe />
            <Footer />
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