import React from 'react';
import {Link} from 'react-router-dom';

const methods = {
    initiateTransition(e, type) {
        let div;
        setTimeout(() => {
            div = document.getElementsByClassName(e);
            if (div[0]) {
                this.oscillate(div[0]);
                this.hover(div[0]);
            }
        }, 100);

    },
    oscillate(div){
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
    },
    hover(div){
        div.addEventListener('mouseover', () => {
            div.classList.add('grow');
            div.classList.remove('normal');
        });
        div.addEventListener('mouseout', () => {
            div.classList.remove('grow');
            div.classList.add('normal');
        })
    }
}
export const Box = (data) => {
    let path;
    let classed;
    if (data.category) {
        path = `/${data.category}/${data.class}`;
        // classed = data.class;
    } else {
        path = `/${data.title}`;
        // classed = data.title;
    }
    return (
        <div className={`box shade ${data.title}`}>
            <Link 
                to={path}>
                <div 
                    onLoad={methods.initiateTransition(data.title)}
                    className="sub-box">
                    {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                </div>
            </Link>
        </div>
    );
}