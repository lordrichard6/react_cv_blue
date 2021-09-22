import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import { TopSection } from './topSection'
import { TechSection } from './techSection'
import { CoursesSection } from './coursesSection'
import { pageTransition } from '../../assets/animations'
import techBg from '../../assets/images/stacked-waves-haikei.svg'
import topWaves from '../../assets/images/layered-waves-haikei-2.svg'
import bottomWaves from '../../assets/images/layered-waves-haikei-3.svg'


export function Skills() {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            <PageContainer>
                <TopSection />
                <TopWaves/>
                <InnerWaves>
                    <TechSection />
                </InnerWaves>
                <BottomWaves/>
                <CoursesSection />
            </PageContainer>
        </motion.div>
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
const InnerWaves = styled.div`
    aspect-ratio: 900/600;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${techBg});
    ${tw`
        w-full
        h-full
        items-center
        lg:flex
        justify-center
    `}
`

const TopWaves = styled.div`
    aspect-ratio: 900/200;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${topWaves});
    ${tw`
        lg:mt--44
    `}
`

const BottomWaves = styled.div`
    aspect-ratio: 900/200;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${bottomWaves});
    ${tw`
    lg:mb--40
    `}
`
