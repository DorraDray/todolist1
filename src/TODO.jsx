import React, { Component } from 'react';
class TODO extends Component {
    state = {
        input: "",
        List: [],
        Change: false,
        

    }
    addItem = () => {
        this.setState({
            List: [...this.state.List, {value:this.state.input,id:Math.random(),complete:this.state.Change}]
        })
    }
    remove=(id)=> {
        this.setState({
            List : this.state.List.filter(el=>el.id!==id)
        })        
    }
    changeEtat=(id)=> {
        
        this.setState({
        List: this.state.List.map(el=>el.id===id? {...el,complete:!el.complete}:el)
        }) 
    }
    render() {
        console.log(this.state.List)
        console.log("input:", this.state.input)
        return (<div>
            <div>
                <input type="text" onChange={(event) => this.setState({
                    input: event.target.value
                })} />
                <button onClick={this.addItem}>ADD</button>
            </div>
            <ul>
                {
                    this.state.List.map((el,i) => <div  key={i}>
                    <li className={el.complete ? "s1":"s2"}>
                        {el.value}
                    </li>
                    <button  onClick={()=>this.remove(el.id)}>DELETE</button>
                    <button onClick={()=>this.changeEtat(el.id)}>{!el.complete ? "complete":"undo"}</button>
                    </div>
                    )}
            </ul>
        </div>);
    }
}
export default TODO;