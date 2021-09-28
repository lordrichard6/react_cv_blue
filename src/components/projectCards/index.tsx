import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
// import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
// import '@brainhubeu/react-carousel/lib/style.css'
// import { useMediaQuery } from 'react-responsive'
// import { SCREENS } from '../../components/responsive'
import sanityClient from '../../client'

import { SingleCard } from './singleCard'
import { SecondaryTitle } from '../../assets/styles'

export function ProjectCards() {
    // const [current, setCurrent] = useState(0)
    const [projectData, setProjectData] = useState<any[]>([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            mainImage,
            tech,
            projectType,
            projectLink,
            projectGithub,
            tags,
        }`
        )
            .then(data => setProjectData(data))
            .catch(console.error);
    }, [])

    // const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    // console.log(projectData)

    // const numberOfDots = isMobile ? projectData.length : Math.ceil(projectData.length / 3)

    return (
        <CardContainer>
            <SecondaryTitle>
                Projects
            </SecondaryTitle>
            {/* <Carousel
                value={current}
                onChange={setCurrent}
                slides={projectData}
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
            > */}
            <InnerContainer>
                {projectData && projectData.map((project: any, index: number) => (
                    <SingleCard
                        key={project.index}
                        img={project.mainImage}
                        title={project.title}
                        tech={project.tech}
                        link={project.projectLink}
                        git={project.projectGithub}
                    />
                )
                )}
            </InnerContainer>
            {/* </Carousel>
            <Dots
                value={current}
                onChange={setCurrent}
                number={numberOfDots}
            /> */}
        </CardContainer>
    )
}

const CardContainer = styled.div`
    ${tw`
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

const InnerContainer = styled.div`
    ${tw`
        grid
        grid-flow-row
        grid-cols-1
        lg:grid-cols-3
        2xl:grid-cols-4
        gap-4
    `}
`