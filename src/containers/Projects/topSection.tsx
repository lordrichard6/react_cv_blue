import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
            <Title>myProjects</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, commodo, sagittis fringilla sagittis. 
                Risus elementum quisque aenean ut in congue eros, ultrices. Quis egestas imperdiet magna facilisi sed lectus leo arcu. 
                Rhoncus malesuada sociis diam tortor id urna. Faucibus enim laoreet non rhoncus. Nec proin faucibus tellus diam augue. 
                Nec tellus non ut egestas at natoque mauris elit pulvinar. Id in mattis tellus erat venenatis, in faucibus aliquet.
                Adipiscing pellentesque consectetur ultrices malesuada ridiculus faucibus nunc at lacus.
            </Description>
            </LeftContainer>
            <RightContainer>

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
        w-1/2
        pr-10
    `}
`

const RightContainer = styled.div`
    min-height: 400px;
    background-color: #0094B5; 
    ${tw`
        w-1/2
    `}
`

const Title = styled.h1`
    color: #0094B5; 
    ${tw`
        text-6xl
        font-bold
    `}
`

const Description = styled.p`
    ${tw`
        text-base
        mt-10
    `}
`