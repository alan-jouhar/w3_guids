import React from 'react';
import './tabs.css';

function Tabs() {
    function clickHandler(e) {

        let tabsItem = document.getElementsByClassName("tabs__item")
        Array.prototype.forEach.call(tabsItem, e => e.style.display = "none")

        let button = e.target;

        let buttons = document.getElementsByClassName("tabs__button")
        Array.prototype.forEach.call(buttons, e => {
            //console.log(e.className)
            e.className = e.className.replace(" current", "")
            console.log(e.className)
        })

        let buttonIndex = Array.prototype.findIndex.call(buttons,
            e => e.textContent === button.textContent
        )

        tabsItem[buttonIndex].style.display = "block";
        button.className += " current"
       // console.log(button.className)

    }
    return (
        <div className="tabs">
            <div className="tabs__header" onClick={clickHandler}>
                <button className="tabs__button">London</button>
                <button className="tabs__button">Paris</button>
                <button className="tabs__button">Tokyo</button>
            </div>
            <div className="tabs__content">
                <div className="tabs__item current">
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                </div>
                <div className="tabs__item">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                </div>
                <div className="tabs__item">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;