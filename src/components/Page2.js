import React from 'react';
import logo from '../logo.svg';


const page2 = ({onRouteChange}) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <button onClick={()=> onRouteChange('page1')}>Page 1</button>
            <button className="disabled">Page2</button>
            <button onClick={()=>onRouteChange('page3')}>Page 3</button>
        </div>
    )
}
export default page2;