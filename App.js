import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';

const e = React.createElement;

const App = () => {
    return e('div', {className: 'wrapper'}, 
        e(Header, null, null),
        e(Main, null, null),
        e(Footer, null, null)
    )
}

ReactDOM.render( e(App, null, null), document.querySelector("#root") );