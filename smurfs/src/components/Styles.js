import styled from "styled-components";

export const SmurfyVillage = styled.div`
  display: flex;
  background-color: ${props => props.bc || "green"};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const SmurfyImage = styled.img`
  border-radius: 1.5rem;
  border: 1px solid black;
  background-color: white;
  max-height: 300px;
  max-width: 240px;
`;

export const Smurfin = styled.span`
  display: flex;
  flex-flow: row wrap;
`;
export const SmurfBoard = styled.span`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 420px;
  border-radius: 2.5rem;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
  background-color: ${props => props.bc || "#e54e24"};
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.7);
  :hover {
    box-shadow: 0 12px 12px #55a9fe;
    border: 2px white solid;
  }
`;

export const SmurfyForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SmurfSpan = styled.span`
  display: ${props => props.display || "none"};
`;

export const SmurfyInput = styled.input`
  border-radius: 0.5rem;
  padding: 1rem;
  border: 4px solid green;
  margin: 0.2rem;
  :hover {
    border: 4px solid #55a9fe;
  }
`;

export const SmurfyEdit = styled.input`
  border-radius: 0.5rem;
  padding: 0.4rem;
  border: 2px solid green;
  margin: 0.1rem;
  :hover {
    border: 4px solid #55a9fe;
  }
`;

export const SmurfyUpdate = styled.button`
  border-radius: 0.3rem;
  border: 1px solid green;
  margin: 0.2rem;
  background-color: ${props => props.bc || "#55a9fe"};
  color: white;

  :hover {
    border: 2px solid white;
  }
`;
export const MetaSmurf = styled.div``;

export const SmurfyButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem;
  font-family: "Unkempt", cursive;
  letter-spacing: 2px;
  background-color: ${props => props.bc || "#55a9fe"};
  color: white;
  text-shadow: 2px 2px 2px #000;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.7);
  :hover {
    background-color: red;
    box-shadow: 0 12px 12px #55a9fe;
    border: 2px white solid;
  }
  :active {
    border: 2px black solid;
  }
}
`;
