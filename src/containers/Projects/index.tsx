import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import { TopSection } from './topSection'
import { ProjectCards } from '../../components/projectCards'
import { LatestProject } from '../../components/latestProject'
import { projectsInfo } from '../../assets/static'
import { pageTransition } from '../../assets/animations'
// import {BgShape} from '../../components/bgShape'

export function Projects() {
    return (
        <PageContainer
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            {/* <PageContainer> */}
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
            {/* </PageContainer> */}
        </PageContainer>
    )
}

const PageContainer = styled(motion.div)`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`