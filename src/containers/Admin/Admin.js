import React, { Component } from "react"

import AddAuthor from "./AddAuthor"

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "",
            Author: "",
            options: [
                { id: "1", name: "Add Language", val: "addLang" },
                { id: "2", name: "Add Author", val: "addAuthor" },
                { id: "3", name: "Add Book", val: "addBook" }
            ],
            currentView: ""
        }
    }

    componentDidMount = () => {

    }
    updateState = newObj => {
        this.setState({ ...newObj })
    }

    render = () => {
        let { currentView } = this.state
        let view
        switch (currentView) {
            case "addLang": {
                view = "lang"
                break;
            }
            case "addAuthor":

                view = <AddAuthor />
                console.log(this.state.LanguageList)
                break;
            case "addBook":
                view = "book"
                break;
            default:
                view = <div className="optionsPanel"><ul>
                    {this.state.options.map(option => {
                        return (
                            <li key={option.id} onClick={() => this.updateState({ currentView: option.val })} > { option.name}</li>
                        )
                    })}
                </ul>
                </div>
                break;
        }

        return (
            <div className="adminPanel">
                <div className="AdminView">
                    {view}
                </div>
            </div >
        )
    }
}

export default Admin;