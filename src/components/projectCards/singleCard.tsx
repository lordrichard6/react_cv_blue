import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import thumb from '../../assets/images/thumb.jpg'
import { Variables } from '../../assets/variables'

export function SingleCard() {
    return (
        <CardContainer>
            <CardThumbnail>
                <img src={thumb} alt="tumbnail" />
            </CardThumbnail>
            <CardTitle>
                myProject
            </CardTitle>
            <Button>
                <h1>open</h1>
            </Button>
            <Icon>
                <FontAwesomeIcon icon={faGithub} />
            </Icon>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 16.5em;
    min-height: 23em;
    max-height: 26em;
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
        text-3xl
        font-bold
        self-center
        my-2
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