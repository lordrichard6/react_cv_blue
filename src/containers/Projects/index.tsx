import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import { TopSection } from './topSection'
import { ProjectCards } from '../../components/projectCards'
import { LatestProject } from '../../components/latestProject'
import { projectsInfo } from '../../assets/static'
import { pageTransition } from '../../assets/animations'
import { Variables } from '../../assets/variables'
// import {BgShape} from '../../components/bgShape'
import svg from '../../assets/images/layered-waves-haikei.svg'

export function Projects() {
    return (
        <PageContainer
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            {/* <BgShape /> */}
            <TopSection />
            <ShapeDivider/>
            {/* </ShapeDivider> */}
            <ProjectsContainer>
                <LatestProject
                    title={projectsInfo[0].title}
                    link={projectsInfo[0].link}
                    git={projectsInfo[0].git}
                    img={projectsInfo[0].img}
                    text={projectsInfo[0].text}
                />
                <ProjectCards />
            </ProjectsContainer>
        </PageContainer>
    )
}

const PageContainer = styled(motion.div)`
    ${tw`
        flex
        flex-col
        w-screen
        h-full 
        items-center
        overflow-x-hidden
    `}
`

const ShapeDivider = styled.div`
    aspect-ratio: 900/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${svg});
    ${tw`
        lg:mt--44
    `}
`

const ProjectsContainer = styled.div`
    background-color: ${Variables.primary};
    ${tw`
        flex
        flex-col
        items-center
        w-full
    `}
`

