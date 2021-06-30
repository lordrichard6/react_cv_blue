import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import thumb from '../../assets/images/thumb.jpg'
import { Variables } from '../../assets/variables'
import { Text } from '../../assets/styles'

type card = {
    title: string
    link: string
    git: string
    img: string
    tech: string
}

export function SingleCard({title, link, git, img, tech}: card) {
    return (
        <CardContainer>
            <CardThumbnail>
                <img src={img} alt="tumbnail" />
            </CardThumbnail>
            <CardTitle>
                {title}
            </CardTitle>
            <TechText>{tech}</TechText>
            <Button>
                <a href={link}><h1>open</h1></a>
            </Button>
            <Icon>
                <a href={git}><FontAwesomeIcon icon={faGithub} /></a>
            </Icon>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 16.5em;
    min-height: 23em;
    max-height: 28em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        justify-center
        content-center
        bg-gray-300
        rounded-md
        m-4
        shadow-md
    `}
`
const CardThumbnail = styled.div`
    width: 100%;
    height: auto;
    ${tw`
        rounded-t-md
    `}
    img {
        width: 100%;
        height: 100%;
        ${tw`
            rounded-t-md
        `}
    }
`

const CardTitle = styled.h1`
    color: ${Variables.primary};
    ${tw`
        text-2xl
        font-bold
        self-center
        mt-2
    `}
`

const TechText = styled(Text)`
    ${tw`
        text-gray-500
        mb-2
        self-center
    `}
`

const Button = styled.button`
    background-color: ${Variables.primary};
    ${tw`
        rounded-md
        w-1/3
        self-center
        text-white
        text-2xl
        py-1
    `}
`

const Icon = styled.div`
    color: ${Variables.primary};
    ${tw`
        self-center
        text-4xl
        my-2
    `}
`