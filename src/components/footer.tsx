import React from 'react';

const dateTime = new Date();

class Footer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <footer>
				<div>
					<p>&copy; {dateTime.getFullYear()} BU CS 601 O1 Term Project - Li Xu . All rights reserved.</p>
				</div>
			</footer>
        );
    }
}

export default Footer;