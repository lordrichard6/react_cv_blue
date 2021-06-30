import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import { ProjectCards } from '../../components/projectCards'
import { LatestProject } from '../../components/latestProject'
import { projectsInfo } from '../../assets/static'
// import {BgShape} from '../../components/bgShape'

export function Projects() {
    return (
        <PageContainer>
            {/* <BgShape /> */}
            <TopSection />
            <LatestProject
                title={projectsInfo[9].title}
                link={projectsInfo[9].link}
                git={projectsInfo[9].git}
                img={projectsInfo[9].img}
                text={projectsInfo[9].text}
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