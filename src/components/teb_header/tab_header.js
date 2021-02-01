import React from 'react';
import './tab_header.css';

function TabHeader(props) {
    function activateCard(id) {
        let cards = document.getElementsByClassName("tab-header__card");
        Array.prototype.forEach.call(cards, e => {
            if (e.id === id) {
                e.style.display = "block";
                e.style.backgroundColor = e.getAttribute("data-bg")
            }
            else {
                e.style.display = "none"
            }
        })


    }
    function activateBtn(e) {
        let btn = e.target;
        let btns = document.getElementsByClassName("tab-header__btn");
        let id = btn.id;
        activateCard(id);
        Array.prototype.forEach.call(btns, e => {
            if (e.style.backgroundColor) {
                e.style.backgroundColor = ""
            }
        })
        btn.style.backgroundColor = btn.getAttribute("data-bg")
    }

    return (
        <div className="tab-header">
            <div className="tab-header__content">
                {props.items.map((e, i) => (
                    <div className="tab-header__card" id={i} data-bg={e.bg}>
                        <h1>{e.title}</h1>
                        <p className="tab-header__desc">{e.description}</p>
                    </div>
                ))}
            </div>
            <div className="tab-header__menu" onClick={activateBtn}>
                {props.items.map((e, i) => (
                    <button className="tab-header__btn" data-bg={e.bg} id={i}>{e.title}</button>
                ))}
            </div>
        </div>
    )
}

export default TabHeader;