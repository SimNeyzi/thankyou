import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  //border: 5px solid #1687a7;
  display: flex;
  width: 100%;
  height: 100vh;
`;

const FormContainer = styled.form`
  border: 5px solid #1687a7;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-flow: center;
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  margin: auto;
  padding: 10px;
`;

const SearchBar = styled.input`
  width: 80%;
  box-sizing: border-box;
  //margin: auto;
  margin-top: 10px;
  padding: 10px;
`;

const TextBox = styled.input`
  width: 80%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  height: 50%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: center;
  box-sizing: border-box;
  width: 50%;
  margin: auto;
  padding: 10px;
  justify-content: space-between;
`;

const DraftButton = styled.input`
  border-radius: 20px;
  width: 70%;
  background-color: #f4f5f7;
  padding: 10px;
  margin: 10px;
`;

const SendButton = styled.input`
  border-radius: 20px;
  width: 70%;
  background-color: #f4f5f7;
  padding: 10px;
  margin: 10px;
`;

function Home() {
  return (
    <Container>
      <FormContainer>
        <SearchBar type="text" placeholder="Search a name" />
        <TextBox type="text" placeholder="Enter your note" />
        <ButtonsContainer>
          <DraftButton type="submit" value="Save as Draft" />
          <SendButton type="submit" value="Send" />
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
}

export default Home;
