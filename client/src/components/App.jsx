import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SideBar from './SideBar.jsx';
import Home from './pages/Home.jsx';
import MyThankYous from './pages/MyThankYous.jsx';
import SentThankYous from './pages/SentThankYous.jsx';

const Container = styled.div`
  //border: 5px solid #1687a7;
`;

function App() {
  const [received, setReceived] = useState([]);

  // let hasReceivedChange = false;

  // const handleChange = () => {
  //   hasReceivedChange = true;
  // };

  // useEffect(() => {
  //   const getThankYous = async () => {
  //     await axios.get('/mythankyous')
  //       .then((response) => {
  //         console.log('here');
  //         if (received !== response.data) {
  //           console.log(response.data);
  //           setReceived(response);
  //           // hasReceivedChange = true;
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getThankYous();
  // }, [received]);

  console.log(received);
  return (

    <Container className="section">

      <Router>

        <a href="http://localhost:3000/">
          <img src="https://cdn.shopify.com/s/files/1/2351/9115/files/thankyou.png?height=628&pad_color=ffffff&v=1594590282" width="200" height="200" alt="logo" />
        </a>

        <div className="columns">
          <div className="column is-one-quarter">
            <SideBar />
          </div>
          <div className="column is-three-fifths">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/mythankyous">
                <MyThankYous />
              </Route>

              <Route path="/sentthankyous">
                <SentThankYous />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

    </Container>

  );
}

export default App;
