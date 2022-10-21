// Создайте простейшее Реакт приложение
//
//
//
// В нем создайте один компонент с любым приветствием и вставте его 3и раза


import React from "react";


const gratingStyle = {
    border: "2px solid #000",
    maxWidth: "300px",
    textAlign: "center",
    margin: "10px auto"
}
const gratingsList = [
    {text: 'Hello 1'},
    {text: 'Hello 2'},
    {text: 'Hello 3'}
];

function Gratings(props) {
    return (
        <div style={gratingStyle}>
            {props.element}
        </div>
    )
};


function App() {
    return (
        <>
            {gratingsList.map((item, index) => <Gratings
                element = {item.text}
                key = {index}
            />)}
        </>
    );
}

export default App;
