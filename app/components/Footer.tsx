import { FooterProps } from '../interfaces/props/FooterProps'
import React from 'react'

class Footer extends React.PureComponent<FooterProps> {
    
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <footer>
                <hr />
                <span>{this.props.copyright}</span>
            </footer>
        );
    }
}

export default Footer