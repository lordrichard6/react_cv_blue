import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faLinkedin, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faDungeon } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/images/icon.png'
import { Variables } from '../../assets/variables'
import { FormComponent } from './form'

export function Footer() {

    return (
        <FooterContainer>
            <InnerContainer>
                <SectionContainer>
                    <HeaderTitle>Thanks for visiting</HeaderTitle>
                    <LogoContainer>
                        <img src={logo} alt="logo" />
                        <h2>Paulo Reizinho</h2>
                    </LogoContainer>
                    <SmallText>
                        This website is powered  by:
                    </SmallText>
                    <IconContainer>
                        <FontAwesomeIcon icon={faReact} />
                    </IconContainer>
                    <Button><a href="https://drive.google.com/file/d/14Ou5up4Gowv7XMNx6ct1oUE7-1m5DK2s/view?usp=sharing">Download my CV</a></Button>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>contactMe</HeaderTitle>
                    <FormComponent />
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>myInfo</HeaderTitle>
                    <IconContainer>
                        <Icon
                            href="https://www.linkedin.com/in/pauloreizinho/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Icon>
                        <Icon
                            href="https://www.instagram.com/l0rdr1chard/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Icon>
                        <Icon
                            href="https://github.com/lordrichard6/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </Icon>
                    </IconContainer>
                    <HorizontalContainer>
                        <BlueIcon>
                            <FontAwesomeIcon icon={faDungeon} />
                        </BlueIcon>
                        <SmallText>Currently living in Zurich</SmallText>
                    </HorizontalContainer>
                    <HorizontalContainer>
                        <BlueIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </BlueIcon>
                        <SmallText>paulolopesreizinho@gmail.com</SmallText>
                    </HorizontalContainer>
                    <HorizontalContainer>
                        <BlueIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </BlueIcon>
                        <SmallText>+41 78 798 95 33</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>
                    Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.
                    All rights reserved.
                </CopyrightText>
            </BottomContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: ${Variables.secondary};
    ${tw`
        flex
        flex-col
        w-screen
        pt-6
        px-4
        lg:px-20
        items-center
        justify-center
        text-white
    `}
`

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-col
        md:flex-row
        w-full
        h-full
        flex-wrap
    `}
`

const SectionContainer = styled.div`
    ${tw`
        md:w-1/3
        flex
        flex-col
        items-center
        justify-center
        my-2
    `}
`

const HeaderTitle = styled.h1`
    ${tw`
        text-2xl
        font-bold
        mb-2
    `}
`

const LogoContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-row
        justify-center
    `}
    img {
        ${tw`
            w-20
            pr-2
        `}
    }

    h2 {
        ${tw`
            w-1/3
            text-2xl
            leading-relaxed
        `}
    }
`

const SmallText = styled.p`
    ${tw`
        
    `}
`

const Button = styled.button`
    background-color: ${Variables.primary};
    ${tw`
        rounded-md
        self-center
        text-white
        text-base
        mt-1
        py-1
        px-2
    `}
`

const IconContainer = styled.div`
    color: ${Variables.primary};
    ${tw`
        flex
        justify-center
        w-full
        text-3xl
        pt-2
    `}
`

const Icon = styled.a`
    ${tw`
        mx-2
    `}
`

const HorizontalContainer = styled.div`
    ${tw`
        flex
        w-full
        justify-start
        items-center
        my-2
        xl:ml-10
        2xl:ml-40
    `}
`

const BlueIcon = styled.span`
    background-color: ${Variables.primary};
    ${tw`
        w-9
        h-9
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`

const BottomContainer = styled.div`
    ${tw`
        w-full
        flex
        max-w-screen-2xl
        justify-center
        md:justify-start
        mt-7
        md:mt-1
    `}
`

const CopyrightText = styled.small`
    font-size: 12px;
    ${tw`
        text-gray-200
    `}
`