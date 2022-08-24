import logo from './logo.png';
import './normalize.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header">
                    <img src={logo} width="200px" height="200px" className="App-logo" alt="logo"/>
                    <p className="headerSlogan">
                        SocialNetwork Vladislav's Test Project
                    </p>
                </div>
            </header>
            <nav className="menu">
                <ul className="menu_list">
                    <li className="menu_item"><a href='#' className="menu_link">Profile</a></li>
                    <li className="menu_item"><a href='#' className="menu_link">Messages</a></li>
                </ul>
            </nav>
        </div>
    )
        ;
}

export default App;
