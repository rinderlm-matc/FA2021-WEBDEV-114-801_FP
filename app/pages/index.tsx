import Layout from '../components/Layout'
import React from 'react';
import { Util } from '../utils/util'

const IndexPage = () => {
  return(
    <Layout loadSidebar={ false }>
      <div className="row hero-splash">
        <div className="col-12">
            <div className="hero-content">
              <img src={ Util.getAssetUrl("/img/logo.png") }/>
              <h1>We make crypto taxes easier!</h1>
              <p>THE ACCOUNTANT THAT GETS THE IRS OFF YOUR BACK</p>
              <a href="#learnMore"><button>LEARN MORE</button></a>
          </div>
        </div>
      </div>    
      <div className="row info-splash gutter">
        <div className="col-12">
          <h2 id="learnMore">What we can do for you</h2>
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
        <div className="col-4 splash-card">
          <figure>
            <img src='https://via.placeholder.com/200x200' alt="thing1" />
            <figcaption>We handle popular crypto currencies</figcaption>
          </figure>
        </div>
      </div>
      <div className="row list-splash">
        <div className="col-12">
          <h2>Privacy and Safety is guaranteed</h2>
          <ul className="">
            <li><img src="https://via.placeholder.com/50x50"/>All your data is private.</li>
            <li><img src="https://via.placeholder.com/50x50"/>We use top tier security practices.</li>
            <li><img src="https://via.placeholder.com/50x50"/>All our fee transactions can be audited</li>
            <li><img src="https://via.placeholder.com/50x50"/>No third parties</li>
          </ul>
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
