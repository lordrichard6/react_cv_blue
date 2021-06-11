import styled from 'styled-components'
import tw from 'twin.macro'

export function Shape() {
    return (
        <ShapeContainer>
            <ShapeElement></ShapeElement>
        </ShapeContainer>
    )
}

const ShapeContainer = styled.div`
    min-height: 200px;
    background-color: #0094B5; 
    ${tw`
        w-screen
        mt-36
        2xl:mt-60
    `}
`

const ShapeElement = styled.div`
    background-color: white; 
    min-height: 200px;
    min-width: 100vw;
    clip-path: polygon(0% 0, 100% 0, 100% 100%, 100% 100%);

`