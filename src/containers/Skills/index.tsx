import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import { TopSection } from './topSection'
import { TechSection } from './techSection'
import { CoursesSection } from './coursesSection'
import { pageTransition } from '../../assets/animations'


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
                <TechSection />
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

