import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import { ProjectCards } from '../../components/projectCards'
import { LatestProject } from '../../components/latestProject'
import { projectsInfo } from '../../assets/static'

export function Projects() {
    return (
        <PageContainer>
            <TopSection />
            <LatestProject
                title={projectsInfo[8].title}
                link={projectsInfo[8].link}
                git={projectsInfo[8].git}
                img={projectsInfo[8].img}
                text={projectsInfo[8].text}
            />
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