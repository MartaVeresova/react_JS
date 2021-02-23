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
                    state={props.state.dialoguesPage}
                    addMessage={props.addMessage}/>}/>
                <Route exact path='/profile' render={() => <Profile
                    state={props.state.profilePage}
                    addPost={props.addPost}/>}/>
                <Route exact path='/news' render={() => <News/>}/>
                <Route exact path='/music' render={() => <Music/>}/>
                <Route exact path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App