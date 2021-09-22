import styled from 'styled-components'
import tw from 'twin.macro'

// import { Variables } from '../../assets/variables'
import svg from '../../assets/images/layered-peaks-haikei.svg'


export function Shape() {
    return (
        <ShapeContainer>
            {/* <ShapeElement></ShapeElement> */}
        </ShapeContainer>
    )
}

const ShapeContainer = styled.div`
    z-index: -10;
    aspect-ratio: 900/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${svg});
    ${tw`
        lg:mt--44
    `}
`

