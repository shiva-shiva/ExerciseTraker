import React, {Component} from 'react';
export default class CreateExercise extends Component{
     constructor(props){
         super(props);
        this.state ={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }   
     }
     
     onChangeUsername(e){
         this.setState({
            username: e.target.value,
         })
     }
     onChangeDescription(e){
        this.setState({
            description: e.target.value,
        })
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value,
        })
    }
    onChangeDate(date){
        this.setState({
            date: date,
        })
    }


    render(){
        return(
            <div>Create Exercises</div>
        )
    }
}