import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { TopSection } from './topSection'
import { TechSection } from './techSection'
import { CoursesSection } from './coursesSection'


export function Skills() {
    return (
        <PageContainer>
            <TopSection />
            <TechSection />
            <CoursesSection />
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

