import React from "react";
import $ from 'jquery';
import './hover_tab.css';

function HoverTab(props) {
    function handelMouseOver(event) {
        let button = event.target;
        let index = $(button).index()
        let articles = $(".hover-tab__art");
        $(articles).each(function (article) {
            $(this).removeClass("hover-tab__art-show")
        })
        $(articles[index]).addClass("hover-tab__art-show")
    }
    return (
        <div className="hover-tab">
            <div className="hover-tab__menu" onMouseOver={handelMouseOver}>
                <button className="hover-tab__button">London</button>
                <button className="hover-tab__button">Paris</button>
                <button className="hover-tab__button">Tokyo</button>
            </div>
            <div className="hover-tab__content">
                <div className="hover-tab__art hover-tab__art-show">London is the capital of UK</div>
                <div className="hover-tab__art">Paris is the capital of France</div>
                <div className="hover-tab__art">Tokyo is the capital of Japan</div>
            </div>
        </div>
    )
}

export default HoverTab;