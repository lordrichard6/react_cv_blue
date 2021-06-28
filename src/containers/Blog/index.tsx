import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { MainArticle } from '../../components/article'
import { ArticleSnippet } from '../../components/article/small'
import { Title, Text, TercearyTitle } from '../../assets/styles'

export function Blog() {
    return (
        <PageContainer>
            <Title>Blog</Title>
            <MainArticle />
            <ArticleSnippet />
            <ArticleSnippet />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        items-center
        overflow-x-hidden
        my-20
        lg:px-20
    `}
`

