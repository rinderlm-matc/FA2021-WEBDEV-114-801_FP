import { FooterProps } from '../interfaces/props/FooterProps'
import React from 'react'

class Footer extends React.PureComponent<FooterProps> {
    
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="footer-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Customer Portal</a></li>
                    </ul>
                </div>
                <div className="footer-details">
                    <h4>Crypto Accountant</h4>
                    <p>123 Fake Street <br/>
                       City of Fake, FK, 19023 <br />
                       tel. 243 X39 20P1           
                    </p>
                </div>
                <div className="footer-copyright">
                    <p>{this.props.copyright}</p>
                </div>
            </footer>
        );
    }
}

export default Footer