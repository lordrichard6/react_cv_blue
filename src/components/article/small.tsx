import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Text } from '../../assets/styles'
import thumbnail from '../../assets/images/harrison-hargrave-D5Jp8ueUQGc-unsplash.jpg'
// import { Variables } from '../../assets/variables'

export function ArticleSnippet() {
    return (
        <ComponentContainer>
            <TextContainer>
                <InnerContainer>
                    <TextTitle>TECH</TextTitle>
                    <PostTitle>This is a blog post</PostTitle>
                    <TextDate>20 - JUN</TextDate>
                </InnerContainer>
            </TextContainer>
        </ComponentContainer>
    )
}

const ComponentContainer = styled.div`
    background-image: url(${thumbnail});
    
    ${tw`
        flex
        flex-row
        w-4/5
        bg-gray-300
        bg-opacity-50
        p-8
        my-2
        bg-cover
        bg-bottom
    `}
`

const TextContainer = styled.div`
    ${tw`
        w-9/12
        px-4
    `}
`

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-row
        justify-between
        flex-wrap
        content-center
        mb-4
    `}
`

const TextTitle = styled(Text)`
    ${tw`
        uppercase
        font-bold
        text-white
    `}
`

const TextDate = styled(Text)`
    ${tw`
        uppercase
        text-gray-500
    `}
`

const PostTitle = styled(Text)`
    ${tw`
        text-white
    `}
`