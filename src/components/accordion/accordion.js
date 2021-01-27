import React from 'react';
import './accordion.css'
function Accordion(props) {
    function clickHandler(e) {
        let item = e.target;
        item.classList.toggle('active');
        let panel = item.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
    return (
        <div className="accordion">
            <button className="accordion__button" onClick={clickHandler}>Section 1</button>
            <div className="accordion__panel">
                <p>The adjacent sibling combinator (+) separates two selectors and matches the second
                element only if it immediately follows the first element, and both are children of
                the same parent element.</p>
            </div>
            <button className="accordion__button" onClick={clickHandler}>Section 1</button>
            <div className="accordion__panel">
                <p>The adjacent sibling combinator (+) separates two selectors and matches the second
                element only if it immediately follows the first element, and both are children of
                the same parent element.</p>
            </div>
            <button className="accordion__button" onClick={clickHandler}>Section 1</button>
            <div className="accordion__panel">
                <p>The adjacent sibling combinator (+) separates two selectors and matches the second
                element only if it immediately follows the first element, and both are children of
                the same parent element.</p>
            </div>

        </div >
    )
}
export default Accordion;