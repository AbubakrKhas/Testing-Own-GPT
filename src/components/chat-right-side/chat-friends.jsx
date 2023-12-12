import React, { Component } from 'react';
import { FaPlus, FaHome, FaUser, FaKey, FaFacebookMessenger, FaGamepad } from 'react-icons/fa';

class ChatSide extends Component {
    constructor(props) {
        super(props);
        this.testRef = React.createRef();
        this.state = {
            isMenuActive: false,
        };
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({
            isMenuActive: !prevState.isMenuActive,
        }));
    };

    activeLink = (event) => {
        event.stopPropagation();

        const list = this.testRef.current.querySelectorAll('li');
        list.forEach((item) => item.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    render() {
        const { isMenuActive } = this.state;

        return (
            <div ref={this.testRef} id="chated-side">
                <ul className={`menu ${isMenuActive ? 'active' : ''}`} onClick={this.handleToggleClick}>
                    <div className={`toggle ${isMenuActive ? 'active' : ''}`} ><i><FaPlus /></i></div>
                    <li style={{ '--i': 0 }} className='active' onClick={this.activeLink}><a ><FaUser /></a> </li>
                    <li style={{ '--i': 1 }} onClick={this.activeLink}><a ><FaKey /></a> </li>
                    <li style={{ '--i': 2 }} onClick={this.activeLink}><a ><FaFacebookMessenger /></a> </li>
                    <li style={{ '--i': 3 }} onClick={this.activeLink}><a ><FaHome /></a> </li>
                    <li style={{ '--i': 4 }} onClick={this.activeLink}><a ><FaGamepad /></a> </li>
                    <li style={{ '--i': 5 }} onClick={this.activeLink}><a ><FaHome /></a> </li>
                    <li style={{ '--i': 6 }} onClick={this.activeLink}><a ><FaHome /></a> </li>
                    <li style={{ '--i': 7 }} onClick={this.activeLink}><a ><FaHome /></a> </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        );
    }
}

export default ChatSide;
