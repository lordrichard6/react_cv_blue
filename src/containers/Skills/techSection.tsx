import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Title, Text } from '../../assets/styles'
import { techs } from '../../assets/static'

export function TechSection() {
    return (
        <PageContainer>
            <TechTitle>Techs</TechTitle>
            <IconsContainer>
                {techs.map((n) => {
                    return (
                        <Icon>
                            <img src={n.icon} alt={n.desc} />
                            <TechName>{n.name}</TechName>
                        </Icon>
                    )
                })}
            </IconsContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        w-4/5
        flex
        justify-center
        flex-col
        flex-wrap
        content-center
        my-10
        2xl:my-20
    `}
`

const TechTitle = styled(Title)`
    ${tw`
        self-center
    `}
`

const IconsContainer = styled.div`
    ${tw`
        grid
        grid-cols-6
        2xl:grid-cols-8
        gap-10
        2xl:gap-16
        mb-8
        place-items-center
    `}
    img {
        ${tw`
            w-auto
            h-20  
            mb-2     
        `}
    }
`

const Icon = styled.div`
    ${tw`
        grid
        place-items-center
    `}
`

const TechName = styled(Text)`
    ${tw`
        text-center
    `}
`