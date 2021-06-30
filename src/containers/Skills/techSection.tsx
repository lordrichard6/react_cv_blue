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
                            <Text>{n.name}</Text>
                        </Icon>
                    )
                })}
            </IconsContainer>
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
    `}
    img {
        ${tw`
            w-auto
            h-20         
        `}
    }
`

const Icon = styled.div`
    ${tw`
        
    `}
`