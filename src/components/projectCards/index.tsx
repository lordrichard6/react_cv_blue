import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import { SingleCard } from './singleCard'

export function ProjectCards() {
    const [current, setCurrent] = useState(0)

    const cards = [
        <SingleCard />,
        <SingleCard />,
        <SingleCard />,
        <SingleCard />,
        <SingleCard />,
        <SingleCard />,
    ]

    const numberOfDots = Math.ceil(cards.length / 3)

    return (
        <CardContainer>
            <Title>
                React.js
            </Title>
            <Carousel 
                value={current} 
                onChange={setCurrent} 
                slides={cards} 
                plugins={['clickToChange', {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3,
                    }
                }]}
            >
            </Carousel>
            <Dots 
                value={current} 
                onChange={setCurrent}
                number={numberOfDots} 
            />
        </CardContainer>
    )
}

const CardContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        px-4
        md:px-0
        mb-10
    `}
`

const Title = styled.h1`
    ${tw`
        
    `}
`