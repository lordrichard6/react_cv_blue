import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faLinkedin, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faDungeon } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/images/icon.png'

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
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>contactMe</HeaderTitle>

                    <FormContainer>
                        <form id="contact-form">
                            <input
                                type="text"
                                name="name"
                                //   value={name}
                                //   onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                //   value={email}
                                //   onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <textarea
                                name="message"
                                //   value={message}
                                //   onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"

                            />
                        </form>
                        <SubmitButton
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </SubmitButton>
                    </FormContainer>

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
                            href="https://www.linkedin.com/in/pauloreizinho/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Icon>
                        <Icon
                            href="https://www.linkedin.com/in/pauloreizinho/"
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
    background-color: #1d2124;
    ${tw`
        flex
        flex-col
        w-full
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

const IconContainer = styled.div`
    color: #0094B5;
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
        h-10
        mx-2
    `}
`

const FormContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    w-3/5
    text-xs
  `}

  input {
    ${tw`
      w-full 
      h-10 
      rounded-sm 
      p-2
      m-1
      bg-gray-600
    `}
  }

  textarea {
    ${tw`
      w-full
      rounded-sm
      p-2
      m-1
      bg-gray-600
    `}
  }
`

const SubmitButton = styled.button`
  ${tw`
    w-1/3 
    py-1
    m-1 
    rounded-sm 
    bg-gray-600
    self-center
    text-lg
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
    background-color: #0094B5;
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