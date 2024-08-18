import styled from "styled-components"
import { Button } from "../styled/Button";

export default function Home({toggle}) {


    return (
        <>
            <Container>
                 
                    <Image src="/images/dice.svg" alt="img" />
                 

                 <Div>
                    <Heading>Dice Game</Heading>
                    <Button onClick={toggle}>Play Game</Button>
                 </Div>
            </Container>
        </>
    )
}

const Container= styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 108px auto ;
`;

const Image= styled.img`
  width: 649px;
  height: 522px;
`;

const Div = styled.div`
 width: 528px;
height: 188px;
`;

const Heading = styled.h1`
  font-size: 96px;
`;

