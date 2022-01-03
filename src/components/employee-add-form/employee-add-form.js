import { Component } from 'react/cjs/react.development';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addWorker = (e) => {
    e.preventDefault();

    this.props.onAdd(this.state.name, this.state.salary);

    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form
          onSubmit={this.addWorker}
          className="add-form d-flex">
            <input type="text"
                   className="form-control new-post-label"
                   placeholder="Name?" 
                   name="name"
                   value={name}
                   onChange={this.onValueChange} />
           
            <input type="number"
                   className="form-control new-post-label"
                   placeholder="Salary in $?"
                   name="salary"
                   value={salary}
                   onChange={this.onValueChange} />
           
            <button type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
  }
}

export default EmployeeAddForm;