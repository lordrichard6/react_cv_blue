import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Variables } from '../../assets/variables'
import { Text } from '../../assets/styles'
import Image from '../../assets/images/harrison-hargrave-D5Jp8ueUQGc-unsplash.jpg'

export function LatestProject() {
    return (
        <ComponentContainer>
            <Description>Latest</Description>
            <img src={Image} alt="image" />
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, commodo, sagittis fringilla sagittis.
                Risus elementum quisque aenean ut in congue eros, ultrices. Quis egestas imperdiet magna facilisi sed lectus leo arcu.
            </Description>
            <Icon>
                <FontAwesomeIcon icon={faGithub} />
            </Icon>
        </ComponentContainer>
    )
}

const ComponentContainer = styled.div`
    background: ${Variables.secondary};
    ${tw`
        flex
        flex-col
        w-4/5
        px-10
        py-2
    `}

    img {
        ${tw`
            mb-4
        `}
    }
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