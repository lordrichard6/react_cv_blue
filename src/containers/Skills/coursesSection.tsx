import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Title, Text, TercearyTitle } from '../../assets/styles'
import { courses } from '../../assets/static'

export function CoursesSection() {
    return (
        <PageContainer>
            <SectionTitle>Courses</SectionTitle>
            {courses.map((n) => {
                return (
                    <InnerContainer>
                        <TercearyTitle>{n.title}</TercearyTitle>
                        <TextCourse>{n.where}</TextCourse>
                        <TextBase>{n.from} - {n.to}</TextBase>
                        <TextBase>
                            {n.text}
                        </TextBase>
                    </InnerContainer>
                )
            })}
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        justify-center
        flex-col
        flex-wrap
        content-center
        my-6
    `}
`

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-4/5
        bg-gray-300
        mb-8
        px-8
    `}
`

const SectionTitle = styled(Title)`
    ${tw`
        self-center
    `}
`

const TextCourse = styled(Text)`
    ${tw`
        font-bold
        text-gray-500
        mt-4
    `}
`

const TextBase = styled(Text)`
    ${tw`
        text-gray-500
        mb-2
    `}
`