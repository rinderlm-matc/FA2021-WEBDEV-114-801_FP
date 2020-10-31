import { copyright, title } from '../constants'

import Footer from '../components/Footer'
import { LayoutProps } from '../interfaces/props/LayoutProps'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import React from 'react'

class Layout extends React.PureComponent<LayoutProps> {
    
  constructor(props: LayoutProps) {
      super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Meta title={title} />  
        <Nav />
        {
          this.props.loadSidebar
        ?
          <main>
            <div className="content">
              { this.props.children }
            </div>
            <div className="sidebar">
              <h2>Crypto News</h2>
                <article>
                  <h3>Bitcoin</h3>
                  <p>Prices going up</p>
                </article>
            </div>
          </main>
        :
          <main>
            <div className="splash">
              { this.props.children }
            </div>
          </main>
        }
      <Footer copyright={copyright}/>
      </React.Fragment>
    );
  }
}

export default Layout
