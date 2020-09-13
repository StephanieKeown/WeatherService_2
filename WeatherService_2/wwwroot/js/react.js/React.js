var e = React.createElement;
var f = React.createElement;


class HelloWorld extends React.Component {
    render() {
        return e(
            "div",
            null,
            "Hello World"
        );
    }
}

class Button extends React.Component {
    render() {
        return f(
            "button",
            null,           
            "Button"
        );
    }
}


const containerElement = document.getElementById('content');
ReactDOM.render(e(HelloWorld), containerElement);

const containerElement2 = document.getElementById('min_temp');
ReactDOM.render(e(HelloWorld), containerElement2);

const containerElement3 = document.getElementById('max_temp');
ReactDOM.render(e(HelloWorld), containerElement3);

const containerElement4 = document.getElementById('wind_speed');
ReactDOM.render(e(HelloWorld), containerElement4);

const containerElement5 = document.getElementById('refreshButton');
ReactDOM.render(f(Button), containerElement5);
