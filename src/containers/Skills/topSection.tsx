import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Variables } from '../../assets/variables'
import { Title, Text, TercearyTitle } from '../../assets/styles'
import { ProgressBar } from '../../components/progressBar'

export function TopSection() {
    return (
        <SectionContainer>
            <LeftSection>
                <InnerSection>
                    <Title>Skills &<br />Experience</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, commodo, sagittis fringilla sagittis.
                        Risus elementum quisque aenean ut in congue eros, ultrices. Quis egestas imperdiet magna facilisi sed lectus leo arcu.
                        Rhoncus malesuada sociis diam tortor id urna. Faucibus enim laoreet non rhoncus. Nec proin faucibus tellus diam augue.
                        Nec tellus non ut egestas at natoque mauris elit pulvinar. Id in mattis tellus erat venenatis, in faucibus aliquet.
                        Adipiscing pellentesque consectetur ultrices malesuada ridiculus faucibus nunc at lacus.
                    </Text>
                </InnerSection>
            </LeftSection>
            <RightSection>
                <InnerSection>
                    <SkillsContainer>
                        <TercearyTitle>Front-End</TercearyTitle>
                        <ProgressBar completed={80} />
                        <TercearyTitle>Back-End</TercearyTitle>
                        <ProgressBar completed={80} />
                        <TercearyTitle>UX & UI</TercearyTitle>
                        <ProgressBar completed={80} />
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