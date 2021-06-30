import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Variables } from '../../assets/variables'
import { Text, Title } from '../../assets/styles'

type project = {
    title: string
    link: string
    git: string
    img: string
    text: string
}

export function LatestProject({title, link, git, img, text}: project) {
    return (
        <ComponentContainer>
            <Description>Latest</Description>
            <a href={link}><img src={img} alt="thumbnail" /></a>
            <a href={link}><ProjTitle>{title}</ProjTitle></a>
            <Description>
                {text}
            </Description>
            <Icon>
                <a href={git}><FontAwesomeIcon icon={faGithub} /></a>
            </Icon>
        </ComponentContainer>
    )
}

const ComponentContainer = styled.div`
    background: ${Variables.secondary};
    ${tw`
        flex
        flex-col
        w-11/12
        lg:w-4/5
        2xl:w-2/4
        px-10
        py-2
        my-10
    `}

    img {
        ${tw`
            w-full
        `}
    }
`

const ProjTitle = styled(Title)`
    ${tw`
        mt-2
        self-center
        lg:self-end
        text-3xl
        lg:text-4xl
    `}
`

const Description = styled(Text)`
    ${tw`
        text-white
    `}
`

const Icon = styled.div`
    ${tw`
        text-white
        self-end
        text-3xl
    `}
`