import React,{Component} from "react"
import ImagedButton from "../../components/ImagedButton"
import Axios from "axios"
import Button from '@material-ui/core/Button';

class Catalouge extends Component {
    constructor(props){
        super(props)
        this.state={language:"",Author:""}
    }

    componentDidMount= () => {
        this.getLanguageList()
    }

    getLanguageList = () => {
        const url = 'https://thayumanavar-a636f-default-rtdb.firebaseio.com/LanguageList.json' 
        Axios.get(url).then((response) => { 
                this.setState({LanguageList:response.data})
            }, (error) => {                
                console.log("Error in getLanguageList",error);
            });
    }
    getAuthorList = Language_ID => {
        const url =    `https://thayumanavar-a636f-default-rtdb.firebaseio.com/Author.json?orderBy="Language_ID"&equalTo=${Language_ID}` 
        Axios.get(url).then((response) => { 
            const result = []
            for (const [key, value] of Object.entries(response.data)) {
                result.push(value)
              }
                this.setState({AuthorList:result})
            }, (error) => {                
                console.log("Error in getAuthorList",error);
            });
    }
    getBookList = Author_ID => {
        const url =    `https://thayumanavar-a636f-default-rtdb.firebaseio.com/BookList.json?orderBy="Author"&equalTo=${Author_ID}` 
        Axios.get(url).then((response) => { 
            const result = []
            for (const [key,value] of Object.entries(response.data)) {
                result.push(value)
              }
                this.setState({BookList:result})
                console.log("BookList",result);
            }, (error) => {                
                console.log("Error in getBookList",error);
            });
    }
    setLanguage = lang => {
        
        this.setState({
            language:{...lang}
        })
            this.getAuthorList(lang.id)
    }
    setAuthor = Auth => {
        this.setState({
            Author:{...Auth}
        })
            this.getBookList(Auth.id)
    }

    clearState = (key,value) => {
        this.setState({
            [key]:""
        })
    }
    render(){
        let content = null
        if(!this.state.language){
            content = <div className="LanguageSelection">
                        <h1>Choose your Language...</h1>
                        <ImagedButton images={this.state.LanguageList} clickFunction={this.setLanguage}/>
                    </div>
        }
        if(this.state.language && !this.state.Author){
            content = <div className="AuthorSelection">
                        <Button variant="outlined" color="primary" onClick={() => this.clearState("language")}>&lt; Back</Button>
                        <h1>Choose an Author</h1>
                        <ImagedButton images={this.state.AuthorList} clickFunction={this.setAuthor}/>
                    </div>
        }
        if(this.state.Author){
            content = <div className="BookView">
                        <Button variant="outlined" color="primary" onClick={() => this.clearState("Author")}>&lt; Back</Button>
                        <h1>Books of {this.state.Author.Name}</h1>
                        {JSON.stringify(this.state.BookList)}
                    </div>
        }
        return(
        <div className="catalouge">
            {content}
        </div>)
    }
} 

export default Catalouge;