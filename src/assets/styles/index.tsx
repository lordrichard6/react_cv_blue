import styled from 'styled-components'
import tw from 'twin.macro'

import { Variables } from '../../assets/variables'

export const Title = styled.h1`
    color: ${Variables.primary};
    ${tw`
        text-4xl
        md:text-6xl
        2xl:text-7xl
        font-semibold
        leading-relaxed
        mb-10
    `}
`

export const SecondaryTitle = styled.h1`
    color: ${Variables.primary};
    ${tw`
        text-3xl
        md:text-4xl
        2xl:text-5xl
        font-semibold
        leading-relaxed
    `}
`

export const TercearyTitle = styled.h1`
    color: ${Variables.primary};
    ${tw`
        text-2xl
        md:text-3xl
        mt-4
        font-normal
        leading-relaxed
    `}
`

export const Text = styled.p`
    color: ${Variables.primary};
    ${tw`
        md:text-lg
        tracking-wider
    `}
`