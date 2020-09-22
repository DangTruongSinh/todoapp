import React, { Component } from 'react';

class FirstComponent extends Component {
    render() {
        return (
            <div>
               <h1>the first component</h1> 
            </div>
        );
    }
}
export class SeCondComponent extends Component{
    render(){
        return (
            <>
                <h1>The second component</h1>
            </>
        );
    }
}
export function ThirdComponent(){
    return (
        <>
        <h1>The third component</h1>
        </>
    );
}
export default FirstComponent;