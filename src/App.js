import React, { Component } from 'react'
import './App.css'
import Feed from './views/Feed'

class App extends Component {
    render() {
        return (
            <div id="app">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar-brand">
                            <div className="navbar-brand-title">
                                <span className="icon has-text-info">
                                    <i className="fa fa-comments" />
                                </span>
                                Wall App
                            </div>
                        </div>
                        <div className="navbar-item" v-show="!user">
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-primary" name="sign-up">
                                        Sign Up
                                    </button>
                                </div>
                                <div className="control">
                                    <button className="button" name="login">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-item" v-show="user">
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-primary" name="make-a-post">
                                        Make a Post
                                    </button>
                                </div>
                                <div className="control">
                                    <button className="button" name="logout">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Feed />
            </div>
        )
    }
}

export default App
