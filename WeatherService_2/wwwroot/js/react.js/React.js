var e = React.createElement;
var f = React.createElement;


class Button extends React.Component {
    render() {
        return f(
            "button",
            null,           
            "Refresh"
        );
    }
}

class WindSpeed extends React.Component {
    render() {
        return f(
            "button",
            null,
            "Refresh"
        );
    }
}
class Visibility extends React.Component {
    render() {
        return f(
            "button",
            null,
            "Refresh"
        );
    }
}
class MinTemp extends React.Component {
    render() {
        return f(
            "button",
            null,
            "Refresh"
        );
    }
}
class MaxTemp extends React.Component {
    render() {
        return f(
            "button",
            null,
            "Refresh"
        );
    }
}



const containerElement2 = document.getElementById('min_temp');
ReactDOM.render(e(MinTemp), containerElement2);

const containerElement3 = document.getElementById('max_temp');
ReactDOM.render(e(MaxTemp), containerElement3);

const containerElement4 = document.getElementById('wind_speed');
ReactDOM.render(e(WindSpeed), containerElement4);

const containerElement5 = document.getElementById('refreshButton');
ReactDOM.render(f(Button), containerElement5);

const containerElement6 = document.getElementById('visibility');
ReactDOM.render(e(Visibility), containerElement6);
