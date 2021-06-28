import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ReactTypingEffect from 'react-typing-effect'

import { Variables } from '../../assets/variables'
import blob from '../../assets/images/blob.svg'
import logo from '../../assets/images/logo_me-min.png'

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <TypingContainer>
                    <ReactTypingEffect text='Developer' speed={120} eraseDelay={700} />
                    <ReactTypingEffect text='Designer' speed={140} eraseDelay={700} />
                    <ReactTypingEffect text='UI and UX Expert' speed={100} eraseDelay={700} />
                </TypingContainer>
                {/* <Title>Developer{<br />} Designer{<br />} UI and UX Expert</Title> */}
                <Slogan>Solutions don't come easy</Slogan>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={blob} alt="blob" />
                </BlobContainer>
                <LogoContainer>
                    <img src={logo} alt="blob" />
                </LogoContainer>
            </RightContainer>
        </TopSectionContainer>
    )
}

const TopSectionContainer = styled.div`
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-col
        lg:flex-row
        justify-between
        px-4
        lg:px-24
    `}
`

const LeftContainer = styled.div`
    ${tw`
        h-full
        md:h-full
        lg:w-1/2
        flex
        flex-col
        justify-center
        flex-wrap
        content-center
        relative
        mb-10
        md:mb-36
    `}

`

const TypingContainer = styled.h1`
    color: ${Variables.primary};
    ${tw`
        flex
        flex-col
        text-4xl
        md:text-5xl
        font-semibold
        leading-relaxed
        w-full
    `}
`

const Slogan = styled.h2`
    ${tw`
        text-xl
        md:text-2xl
        text-gray-500
        font-semibold
        font-medium
        my-4
    `}
`

const RightContainer = styled.div`
    max-height: 400px;
    ${tw`
        h-auto
        w-full
        md:w-1/2
        relative
    `}
`

const BlobContainer = styled.div`
    position: absolute;
    z-index: -1;
    ${tw`
        w-full
        h-auto
    `}

    img {
    }
`

const LogoContainer = styled.div`
    ${tw`
        h-auto
        w-full
       flex
       justify-center
    `}

    img {
        ${tw`
            w-3/4
            h-auto
        `}
        
    }
`
