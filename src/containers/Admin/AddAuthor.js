import React, { Component } from "react"
import * as APIs from "../../util/API"

class AddAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = { language: "", Author: "" }
    }

    componentDidMount = () => {
        APIs.getLanguageList(this.updateState)
        APIs.getAuthorList(this.updateState)
    }
    updateState = newObj => {

        this.setState({ ...newObj })
    }
    render() {
        const { AuthorList, LanguageList } = this.state;
        let view
        if (AuthorList) {
            view = AuthorList.map(author => {
                return <div key={author.id}>{author.Name}({LanguageList.filter(lang => lang.id === author.Language_ID)[0].Name})</div>
            })
        }
        console.log("view", view)
        return (
            <div className="addAuthorPanel">
                {view}
            </div>)
    }
}

export default AddAuthor;