import React from 'react';
import a from './1.svg';
import b from './2.svg';
import c from './3.svg';
import d from './4.svg';
import './Ninth.css';

function Nav(){
    return (
        <div className="row s">
                    <div className="col-6">
                    <ul className="nav d-flex flex-row justify-content-start flex-nowrap">
                    <li><a className="p-2 m-0" href="/">Company</a></li>
                    <li><a className="p-2 m-0" href="/">ERPNext</a></li>
                    <li><a className="p-2 m-0" href="/">Team</a></li>
                    <li><a className="p-2 m-0" href="/">Contact</a></li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <ul className="nav d-flex flex-row justify-content-end flex-nowrap">
                    <li><a href="/"><img className="p-2 m-0"src={a} alt="1"/></a></li>
                    <li><a href="/"><img className="p-2 m-0" src={b} alt="1"/></a></li>
                    <li><a href="/"><img className="p-2 m-0" src={c} alt="1"/></a></li>
                    <li ><a href="/"><img className="p-2 m-0"src={d} alt="1"/></a></li>
                    </ul>
                    </div>
                </div>
 
    )
}



export default Nav;