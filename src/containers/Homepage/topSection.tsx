import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import blob from '../../assets/images/blob.svg'
import logo from '../../assets/images/logo_me-min.png'
// import vector from '../../assets/images/vector_01.svg'

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Title>Developer{<br />} Designer{<br />} UI and UX Expert</Title>
                <Slogan>Solutions don't come easy</Slogan>
                {/* <Vector src={vector} alt="vector" /> */}
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
    max-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        px-4
        lg:px-24
    `}
`

const LeftContainer = styled.div`
    ${tw`
        h-full
        w-1/2
        flex
        flex-col
        justify-center
        flex-wrap
        content-center
        relative
    `}

`

const Title = styled.h1`
    ${tw`
        text-4xl
        font-semibold
        font-medium
        leading-relaxed
    `}
`

const Slogan = styled.h2`
    ${tw`
        text-2xl
        text-gray-500
        font-semibold
        font-medium
    `}
`

// const Vector = styled.img`
//     z-index: -1;
//     top: 11em;
//     left: 5em;
//     ${tw`
//         absolute
//         h-1/6
//     `}
// `

const RightContainer = styled.div`
    ${tw`
        h-full
        w-1/2
        relative
    `}
`

const BlobContainer = styled.div`
    position: absolute;
    z-index: -1;
    ${tw`
    
    `}

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }
`

const LogoContainer = styled.div`
    ${tw`
        h-full
        w-auto
        flex
        justify-center
    `}

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }
`
