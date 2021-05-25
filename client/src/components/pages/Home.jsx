import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  //border: 5px solid #1687a7;
`;

const FormContainer = styled.form`
  //border: 5px solid red;
  display: flex;
  flex-direction: column;
  align-items: start;
  // flex-flow: center;
  box-sizing: border-box;
`;

function Home() {
  const [textInput, setTextInput] = useState('');
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('John Doe');

  function sendThankYou(e) {
    e.preventDefault();
    axios.post('/', { textInput, receiver, sender })
      .then(() => {
        setReceiver('');
        setTextInput('');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container className="section m-0">

      <FormContainer className="container m-0 p-0" onSubmit={(e) => { sendThankYou(e); }}>

        <input className="input is-medium p-2 mt-4" type="text" placeholder="Search a name" value={receiver} onChange={(e) => { setReceiver(e.target.value); }} />

        <textarea className="textarea is-medium p-2 mt-4" type="text" placeholder="Enter your note" value={textInput} onChange={(e) => { setTextInput(e.target.value); }} />

        <button className="button is-success is-light is-medium is-fullwidth is-rounded is-focused p-4 mt-4 has-text-centered" type="submit">Send</button>

      </FormContainer>

    </Container>
  );
}

export default Home;
