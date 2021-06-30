import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Variables } from '../../assets/variables'
import { Title, Text } from '../../assets/styles'

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Title>myProjects</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, commodo, sagittis fringilla sagittis.
                    Risus elementum quisque aenean ut in congue eros, ultrices. Quis egestas imperdiet magna facilisi sed lectus leo arcu.
                    Rhoncus malesuada sociis diam tortor id urna. Faucibus enim laoreet non rhoncus. Nec proin faucibus tellus diam augue.
                    Nec tellus non ut egestas at natoque mauris elit pulvinar. Id in mattis tellus erat venenatis, in faucibus aliquet.
                    Adipiscing pellentesque consectetur ultrices malesuada ridiculus faucibus nunc at lacus.
                </Text>
            </LeftContainer>
            <RightContainer>

            </RightContainer>
        </TopSectionContainer>
    )
}

const TopSectionContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-col
        lg:flex-row
        justify-between
        px-4
        my-24
        lg:px-24
        2xl:px-2
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
    background-color: ${Variables.primary}; 
    ${tw`
        w-1/2
    `}
`