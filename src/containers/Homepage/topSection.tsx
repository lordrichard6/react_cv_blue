import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ReactTypingEffect from 'react-typing-effect'

import {BgAnimation} from '../../components/bgAnimation'
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
                <BgAnimation />
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
    ${tw`
        w-full
        h-full
        max-w-screen-2xl
        flex
        flex-col
        lg:flex-row
        flex-wrap
        justify-between
        lg:mt-10
        2xl:my-60
        lg:px-24
        relative
    `}
`

const LeftContainer = styled.div`
    ${tw`
        h-auto
        lg:w-1/2
        flex
        flex-col
        justify-center
        flex-wrap
        content-center
        p-12
        lg:p-0
        my-32
        lg:m-0
        relative
        z-10
    `}

`

const TypingContainer = styled.div`
    color: ${Variables.primary};
    ${tw`
        flex
        flex-col
        text-3xl
        md:text-5xl
        2xl:text-7xl
        font-semibold
        leading-loose
        w-full
    `}
`

const Slogan = styled.h2`
    ${tw`
        text-xl
        md:text-2xl
        2xl:text-3xl
        text-gray-500
        font-semibold
        font-medium
        my-4
    `}
`

const RightContainer = styled.div`
    ${tw`
        h-auto
        w-full
        lg:w-1/2
        absolute
        top-1/4
        lg:relative
        z-0
        opacity-20
        lg:opacity-100
    `}
`

const BlobContainer = styled.div`
    
    ${tw`
        absolute
        z-0
    `}
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
            z-10
            w-3/4
            h-full
        `}
        
    }
`
