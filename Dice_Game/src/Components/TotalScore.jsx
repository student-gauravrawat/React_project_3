import styled from "styled-components"

export default function TotalScore({score}){

    return(
        <>
           <ScoreContainer>
              <h1>{score}</h1>
              <p>Total Score</p>
           </ScoreContainer>

        </>
    )
}

const ScoreContainer = styled.div`
     max-width: 200px;
     text-align: center;
     margin: -15px 0 0 30px;
 
  h1{
    font-size: 100px;
    line-height: 150px;
  }

  p{
    font-size: 24px;
    font-weight: 500px;
  }
`;
