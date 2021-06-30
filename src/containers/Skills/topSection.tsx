import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

// import { Variables } from '../../assets/variables'
import { Title, Text, TercearyTitle } from '../../assets/styles'
import { ProgressBar } from '../../components/progressBar'

export function TopSection() {
    return (
        <SectionContainer>
            <LeftSection>
                <InnerSection>
                    <Title>Skills &<br />Experience</Title>
                    <Text>
                        Based on my personal choice and time spent learning, I have stronger skills on the front-end,
                        the visual aspect is of big importance and on that I feel like a "Monet" looking to create my
                        "Lady with the Umbrella". <br/>
                        I have learned HTML and CSS, then went on to Javascript, then Sass. I decided to go to React as
                        my framework(library) of choice, not because of it's popularity, but because of it's component
                        based structure and workflow. <br/>
                        But anyway, i don't mean to leave you on a cliffhanger but if you
                        want to hear more about my learning path and work experience, feel free to contact me.

                    </Text>
                </InnerSection>
            </LeftSection>
            <RightSection>
                <InnerSection>
                    <SkillsContainer>
                        <TercearyTitle>Front-End</TercearyTitle>
                        <ProgressBar completed={80} />
                        <TercearyTitle>Back-End</TercearyTitle>
                        <ProgressBar completed={50} />
                        <TercearyTitle>UX & UI</TercearyTitle>
                        <ProgressBar completed={70} />
                        <TercearyTitle>React.js</TercearyTitle>
                        <ProgressBar completed={80} />
                    </SkillsContainer>
                    <ExperienceContainer>
                        <TercearyTitle>Front-End</TercearyTitle>
                        <TextCompany>Feinheit</TextCompany>
                        <TextBase>2019 - 2020</TextBase>
                        <TextBase>
                            An Agency for webdesign,
                            online markting, 
                            campaining, social media,
                            CMS and IT Infrastructure.
                        </TextBase>
                    </ExperienceContainer>
                </InnerSection>
            </RightSection>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-row
        self-center
        overflow-x-hidden
        my-20
        lg:mx-20
        lg:px-20     
    `}
`

const LeftSection = styled.div`
    ${tw`
        flex
        flex-col
        w-1/2

    `}
`

const RightSection = styled.div`
    ${tw`
        flex
        flex-col
        flex-wrap
        w-1/2
        content-center
    `}
`

const InnerSection = styled.div`
    ${tw`
        flex
        flex-col
        2xl:w-4/5
        px-8
        self-end
    `}
`

const SkillsContainer = styled.div`
    ${tw`
        flex
        flex-col
    `}
`

const ExperienceContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-4/5
        bg-gray-300
        mt-12
        px-4
    `}
`

const TextCompany = styled(Text)`
    ${tw`
        font-bold
        text-gray-500
        mt-4
    `}
`

const TextBase = styled(Text)`
    ${tw`
        text-gray-500
        mb-2
    `}
`