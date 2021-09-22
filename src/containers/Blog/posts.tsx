import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { MainArticle } from '../../components/article'
import { ArticleSnippet } from '../../components/article/small'
// import { Title, SecondaryTitle } from '../../assets/styles'

export function Posts() {
    return (
        <PostsContainer>
            <ArticleSnippet />
            <ArticleSnippet />
        </PostsContainer>
    )
}

const PostsContainer = styled.div`
    ${tw`
        flex
        flex-row
        w-screen
        items-center
        p-20
        bg-cover
        bg-center
    `}
`
