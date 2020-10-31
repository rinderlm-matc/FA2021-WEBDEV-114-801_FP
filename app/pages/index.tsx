import Layout from '../components/Layout'
import React from 'react';
import { Util } from '../utils/util'

const IndexPage = () => {
  return(
    <Layout loadSidebar={ false }>
      <div className="row">
        <div className="col-12">
          <div className="hero-splash">
            <div className="hero-content">
              <img src={Util.getAssetUrl("/img/logo.png")}/>
              <h1>We make crypto taxes easier!</h1>
              <p>THE ACCOUNTANT THAT GETS THE IRS OF YOUR BACK</p>
              <a href="#learnMore"><button>LEARN MORE</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>What we can do for you</h2>
          </div>
      </div>
      <div id="learnMore" className="row">
        <div className="col-4 splash-card">
        <figure>
              <img src='https://via.placeholder.com/200x200' alt="thing1" />
              <figcaption>We handle popular crypto currencies</figcaption>
            </figure>
          </div>
          <div className="col-4 splash-card">
            <figure>
              <img src='https://via.placeholder.com/200x200' alt="thing1" />
              <figcaption>We handle popular crypto currencies</figcaption>
            </figure>
          </div>
          <div className="col-4 splash-card">
            <figure>
              <img src='https://via.placeholder.com/200x200' alt="thing1" />
              <figcaption>We handle popular crypto currencies</figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1>test</h1>
        </div>
      </div>
    </Layout>
  );
}

IndexPage.getInitialProps = async function () { 

  return {
    success: true
  }
}

export default IndexPage
