import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function MyThankYous({}) {

  return (

    <div className="section">
      <div className="container">
      <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Jack Drggs</p>
          <p class="subtitle">Thanks so much!</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">Jonny Cage</p>
          <p class="subtitle">Thank you for helping me understand promises!</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Sonya Blade</p>
          <p class="subtitle">Thank you for your contribution to the project</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Shang Tsung</p>
        <p class="subtitle">Appreciate the help on xyz</p>
        <div class="content">

        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Liu Kang</p>
        <p class="subtitle">Thanks for taking the time to explain me xyz today</p>
        <div class="content">

        </div>
      </div>
    </article>
  </div>
</div>

      </div>
    </div>
  );
}

export default MyThankYous;


{/* <h1 className="is-size-1 has-text-centered">My Thank Yous</h1>
      {/* {
        received.map((item, index) => {
          console.log(item.text)
        })
      } */}


{ /* <h1 className="is-size-1 level-item has-text-centered">My Thank Yous</h1>
      <div>
        Sender: Joan Doe
        <div>
          Thanks for helping me with my training!
        </div>
      </div>

      <div>
        Sender: Jack Doe
        <div>
          'Thanks for being AWESOME!
        </div>
      </div>
      <div>
        Sender: Jason Doe
        <div>
          Thanks for helping me with my training!
        </div>
      </div> */ }
