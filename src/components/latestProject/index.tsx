import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Variables } from '../../assets/variables'
import { Text, Title } from '../../assets/styles'

// type project = {
//     title: string
//     link: string
//     git: string
//     img: string
//     text: string
// }

export function LatestProject({ title, link, git, img, text }: any) {
    return (
        <ComponentContainer>
            <div>
                <Description>Latest</Description>
                <a href={link}><img src={img} alt="thumbnail" /></a>
            </div>
            <TextContainer>
                <a href={link}><ProjTitle>{title}</ProjTitle></a>
                <Description>
                    {text}
                </Description>
                <Icon>
                    <a href={git}><FontAwesomeIcon icon={faGithub} /></a>
                </Icon>
            </TextContainer>

        </ComponentContainer>
    )
}

const ComponentContainer = styled.div`
    /* background: ${Variables.secondary}; */
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 12px 12px rgba(0,0,0,0.12);
    ${tw`
        flex
        flex-row
        w-11/12
        lg:w-4/5
        2xl:w-2/4
        p-10
        my-10
        bg-gray-300
        rounded-md
        relative
    `}

    img {
        ${tw`
            rounded-md
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

const TextContainer = styled.div`
    ${tw`
        flex
        flex-col
        flex-wrap
        justify-center
        p-10
    `}
`

const Description = styled(Text)`
    ${tw`
    `}
`

const Icon = styled.div`
    ${tw`
        self-end
        text-3xl
    `}
`