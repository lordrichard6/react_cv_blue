import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Navbar } from '../../components/navbar'
import { Footer } from '../../components/footer'
import { TopSection } from './topSection'
import { ProjectCards } from '../../components/projectCards'

export function Projects() {
    return (
        <PageContainer>
            <Navbar />
            {/* <TopSection /> */}
            <ProjectCards />
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