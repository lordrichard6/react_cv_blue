import styled from 'styled-components'
import tw from 'twin.macro'

// import { Variables } from '../../assets/variables'

export function BgShape() {
    return (
        <ShapeContainer>
            <ShapeElement></ShapeElement>
        </ShapeContainer>
    )
}

const ShapeContainer = styled.div`
    z-index: -10;
    min-height: 100vh;
    background: linear-gradient(to right, #00f260, #0575e6); 
    ${tw`
        w-screen
        absolute
    `}
`

const ShapeElement = styled.div`
    background-color: white; 
    min-height: 200px;
    min-width: 100vw;
    clip-path: polygon(100% 50%, 50% 100%, 100% 0%, 50% 10%);
`