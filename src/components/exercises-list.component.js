import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const Exercise = props => (
  <li class="table-row">
    <div class="col col-2" data-label="Job Id">{props.exercise.username}</div>
    <div class="col col-3" data-label="Customer Name">{props.exercise.description}</div>
    <div class="col col-2" data-label="Amount">{props.exercise.duration}</div>
    <div class="col col-2" data-label="Payment Status">{props.exercise.date.substring(0, 10)}</div>
    <div class="col col-2" data-label="Payment Status"> <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a></div>
  </li>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
    })
  }

  render() {
    return (
      <div class="container">
        <h2>Exercises</h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-2">Name</div>
            <div class="col col-3">Description</div>
            <div class="col col-2">Duration</div>
            <div class="col col-2">Date</div>
            <div class="col col-2">Actions</div>
          </li>

          {this.exerciseList()}
        </ul>
      </div>
    )
  }
}