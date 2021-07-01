import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import { Variables } from '../../assets/variables'
import logo from '../../assets/images/icon.png'
import { pageTransition } from '../../assets/animations'

export function ComingSoon() {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            <PageContainer>
                <img src={logo} alt="logo" />
                <Title>Coming Soon</Title>
                <Title>Be Patient!!</Title>
            </PageContainer>
        </motion.div>
    )
}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        flex-wrap
        w-full
        h-screen
        items-center
        justify-center
        overflow-x-hidden
    `}
    img {
        ${tw`
            w-9/12
            lg:w-1/4
            h-auto
        `}
    }
`

const Title = styled.h1`
        color: ${Variables.primary};
    ${tw`
        text-4xl
        lg:text-6xl
        tracking-widest
    `}
`

