import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Text } from '../../assets/styles'
import thumbnail from '../../assets/images/harrison-hargrave-D5Jp8ueUQGc-unsplash.jpg'
import { Variables } from '../../assets/variables'

export function ArticleSnippet() {
    return (
        <ComponentContainer>
            <TextContainer>
                <InnerContainer>
                    <TextTitle>news</TextTitle>
                    <TextDate>20 - JUN</TextDate>
                </InnerContainer>
                <TextDescription>
                    An Agency for webdesign,
                    online markting,
                    campaining, social media,
                    CMS and IT Infrastructure.
                </TextDescription>
            </TextContainer>
            <img src={thumbnail} alt="thumbnail" />
        </ComponentContainer>
    )
}

const ComponentContainer = styled.div`
    ${tw`
        flex
        flex-row
        w-4/5
        bg-gray-300
        bg-opacity-50
        p-8
        my-2
    `}
    img {
        ${tw`
            w-1/4
            pr-4
        `}
    }
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
    color: ${Variables.secondary};
    ${tw`
        uppercase
        font-bold
    `}
`

const TextDate = styled(Text)`
    ${tw`
        uppercase
        text-gray-500
    `}
`

const TextDescription = styled(Text)`
    color: ${Variables.secondary};
    ${tw`
        
    `}
`