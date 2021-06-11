import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"

export function AboutMe() {
    return (
        <AboutMeContainer>
            {/* <Shape />
            <ShapeDown /> */}
            <TextContainer>
                <Title>About me</Title>
                <Text>
                My name is Paulo Reizinho, is was born in 1986 in a 
                small town in the middle of Portugal but
                I'm currently living in Swiss land more precisely in Zurich.{<br />}{<br />} 
                I took Administration with focus in accounting but thing is, 
                it's a boring job and as surpising as it may sound, 
                I love coding and the challenges that come with it 
                specially when you find a solution for an hard problem. 
                Course is never to late to change careers and create great 
                things on the process provided that you have what it takes.{<br />}{<br />}
                Well, I've been learning web Development since 2019 with highs and lows. 
                Focusing on the front-end with a special interest in the design of visually 
                appealing UI and an intuitive UX so people don't get lost. 
                My main tech is React, but my learning journey will never stop, 
                but I'm leaning more to Next.js. I do my designs with Figma and Photoshop,
                for styling I like to use a hybrid approach with styled-components and tailwind,
                which bring a organized and maintainable code and beautifull to look at.{<br />}{<br />}
                I recently got interested in blockchain and it's ecosytem.
                Any more info please contact me, all my contacts are in the footer.
                </Text>
            </TextContainer>
            
        </AboutMeContainer>
    )
}

const AboutMeContainer = styled.div`
    background-color: #0094B5; 
    ${tw`
        w-screen
        pb-24
        relative
    `}
`

// const Shape = styled.div`
//     min-height: 500px;
//     background-color: #0094B5; 
//     z-index: -1;  
//     ${tw`
//         w-full
//         absolute
//         transform
//         skew-y-12
//     `}
// `

// const ShapeDown = styled.div`
//     min-height: 500px;
//     background-color: #0094B5;
//     margin-top: 10em;
//     z-index: -1;
//     ${tw`
//         w-full
//         absolute
//     `}
// `

const TextContainer = styled.div`
    ${tw`
        w-3/4
        lg:px-24
    `}
`

const Title = styled.h1`
    z-index: 10;
    ${tw`
        text-white
        text-6xl
    `}
`

const Text = styled.p`
    ${tw`
        text-white
        text-lg
        tracking-wider
        mt-10
    `}
`