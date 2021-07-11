import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Title, Text, TercearyTitle } from '../../assets/styles'
// import { courses } from '../../assets/static'
import sanityClient from '../../client'

export function CoursesSection() {
    const [courseData, setCourseData] = useState<any[]>([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "course"]{
            title,
            start,
            finish,
            place,
            text,
        }`
        )
            .then(data => setCourseData(data))
            .catch(console.error);
    }, [])

    return (
        <PageContainer>
            <SectionTitle>Courses</SectionTitle>
            {courseData && courseData.map((n: any, index: number) => {
                return (
                    <InnerContainer>
                        <TercearyTitle>{n.title}</TercearyTitle>
                        <TextCourse>{n.place}</TextCourse>
                        <TextBase>{n.start} - {n.finish}</TextBase>
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