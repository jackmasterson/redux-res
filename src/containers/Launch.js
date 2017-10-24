import React, { Component } from 'react';
import { Box } from '../components/Box';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    state: state,
    data: state.data
});

class Main extends Component {
    initiateTransition(e, type) {
        let div;
        setTimeout(()=> {
            if (type === 'oscillate') {
                div = document.getElementsByClassName(e);
                if (div[0]) {
                    this.oscillate(div[0]);
                }
            } else if (type === 'hover') {
                div = document.getElementsByClassName(e.class);
                if (div[0]) {
                    this.hover(div[0]);
                }
            }
        }, 1000);

    }
    oscillate(div) {
        const slideRightComplete = new Event('slide-right-complete');
        const slideLeftComplete = new Event('slide-left-complete');

        div.addEventListener('slide-right-complete', () => {
            div.classList.remove('slider-animate');
            div.classList.add('slider-reverse');
            setTimeout(() => {
                div.dispatchEvent(slideLeftComplete);
            }, 2000);
        }, false);

        div.addEventListener('slide-left-complete', () => {
            div.classList.remove('slider-reverse');
            div.classList.add('slider-animate');
            setTimeout(() => {
                div.dispatchEvent(slideRightComplete);
            }, 2000);
        }, false);

        div.dispatchEvent(slideLeftComplete);
    }
    hover(div) {
        div.addEventListener('mouseover', () => {
            div.classList.add('grow');
            div.classList.remove('normal');
        });
        div.addEventListener('mouseout', () => {
            div.classList.remove('grow');
            div.classList.add('normal');
        })
    }
    render() {
        let keys = Object.keys(this.props.state.data);
        return (
            <div className="box-wrapper">
                {keys.map((keyed) =>
                    <div
                        onLoad={this.initiateTransition(keyed, 'oscillate')}
                        key={keyed}
                        className={keyed}>
                        {this.props.state.data[keyed].map ? this.props.state.data[keyed].map((info) =>
                            <Box key={info.id}
                                path={info.path = keyed}
                                onLoad={this.initiateTransition(info, 'hover')}
                                {...info}
                            />
                        ): this.props.state.data[keyed] === null }
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);