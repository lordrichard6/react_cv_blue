import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import { ProjectCards } from '../../components/projectCards'
import { LatestProject } from '../../components/latestProject'

export function Projects() {
    return (
        <PageContainer>
            <TopSection />
            <LatestProject />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
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