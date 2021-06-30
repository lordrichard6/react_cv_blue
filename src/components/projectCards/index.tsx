import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '../../components/responsive'

import { SingleCard } from './singleCard'
import { SecondaryTitle } from '../../assets/styles'
import { projectsInfo } from '../../assets/static'

export function ProjectCards() {
    const [current, setCurrent] = useState(0)

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    console.log(projectsInfo)

    const numberOfDots = isMobile ? projectsInfo.length :  Math.ceil(projectsInfo.length / 3)

    return (
        <CardContainer>
            <SecondaryTitle>
                Projects
            </SecondaryTitle>
            <Carousel
                value={current}
                onChange={setCurrent}
                slides={projectsInfo}
                plugins={['clickToChange', {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3,
                    }
                }]}
                breakpoints={{
                    640: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1
                                }
                            }
                        ]
                    },
                    900: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2
                                }
                            }
                        ]
                    }
                }}
            >
                {projectsInfo.map((n) => {
                    return (
                        <SingleCard
                            key={n.id}
                            img={n.img}
                            title={n.title}
                            tech={n.tech}
                            link={n.link}
                            git={n.git}
                        />
                    )
                })}
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
        my-28
    `}
`