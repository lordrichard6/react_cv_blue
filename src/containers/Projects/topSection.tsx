import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { Variables } from '../../assets/variables'
import { Title, Text } from '../../assets/styles'
import me from '../../assets/images/me.png'

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Title>myProjects</Title>
                <Text>
                    I built dozens of projects, some never saw a github repository, 
                    some were just playing with the technology. But i manage to put some here,
                    some of those were based on youtube tutorials, but hey, give me a break, it's
                    a good way to learn.<br/>
                    Some of the projects are very simple, fetching a service through an API,
                    reaching to a database to display it's items or simply playing around with design.<br/>
                    Either way it's my path of learning and will continue to produce more and better projects
                    as i go.
                </Text>
            </LeftContainer>
            <RightContainer>
                <img src={me} alt="logo" />
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
        my-12
        lg:my-24
        lg:px-24
        2xl:px-2
    `}
`

const LeftContainer = styled.div`
    ${tw`
        self-center
        w-11/12
        lg:w-1/2
        my-10
        lg:m-0
        lg:pr-10
    `}
`

const RightContainer = styled.div`
    min-height: 400px;
    ${tw`
        mt-10
        lg:mt-0
        lg:w-1/2
    `}
`