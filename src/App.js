import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogues' render={() => <Dialogues
                    dialoguesPage={props.state.dialoguesPage}
                    newMessageText={props.state.dialoguesPage.newMessageText}
                    dispatch={props.dispatch}
                />}
                />
                <Route exact path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}
                />
                <Route exact path='/news' render={() => <News/>}/>
                <Route exact path='/music' render={() => <Music/>}/>
                <Route exact path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App