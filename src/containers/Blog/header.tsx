import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { MainArticle } from '../../components/article'
// import { ArticleSnippet } from '../../components/article/small'
import { Title, SecondaryTitle } from '../../assets/styles'
import HeaderImg from '../../assets/images/harrison-hargrave-D5Jp8ueUQGc-unsplash.jpg'

export function Header() {
    return (
        <HeaderContainer>
            <Title>Blog</Title>
            <Slogan>Welcome to my Blog page, where I will post diversed Articles.</Slogan>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-image: url(${HeaderImg});
    opacity: 0.80;
    ${tw`
        flex
        flex-col
        w-screen
        items-center
        p-20
        bg-cover
        bg-center
    `}
`

const Slogan = styled(SecondaryTitle)`
    opacity: 1;
    ${tw`
        text-2xl
        mb-20
    `}
`