import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PageHeading from '../../components/PageHeading/PageHeading';

import {
  getTodos,
  createTodo,
  removeTodo,
  switchTodoStatus,
  editTodo
} from './actions';

export class TodosPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      edit: false,
      editName: ''
    };

    this.resetInput = this.resetInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startEditTodo = this.startEditTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.cancelEditTodo = this.cancelEditTodo.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  resetInput() {
    this.setState({ name: '' });
  }

  startEditTodo(id, name) {
    this.setState({ edit: id, editName: name });
  }

  cancelEditTodo() {
    this.setState({ edit: false, editName: '' });
  }

  editTodo(id, updates) {
    this.props.editTodo(id, { name: updates });
    this.setState({ edit: false, editName: '' });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name } = this.state;

    if (name) {
      this.props.createTodo(name);
      this.resetInput();
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <Helmet
          titleTemplate="Your Todos"
          defaultTitle="Your Todos"
        >
          <meta name="description" content="Your Todos" />
        </Helmet>
        <PageHeading title="Your Todos" />
        <div>
          {
            this.props.todos.length === 0 ? (
              <Typography variant="title" color="inherit">
                No Todos
              </Typography>
            ) : (
              this.props.todos.map((todo) => (
                <div key={todo.id}>
                  <span>Status: </span>
                  <span>{ todo.isDone.toString() }</span>
                  { this.state.edit && this.state.edit === todo.id ? (
                    <div>
                      <TextField
                        required
                        name="editName"
                        label="Todo"
                        type="text"
                        value={this.state.editName}
                        onChange={this.handleChange}
                        margin="normal"
                      />
                      <div>
                        <Button color="secondary" onClick={() => this.editTodo(todo.id, this.state.editName)}>Edit</Button>
                        <Button color="default" onClick={() => this.cancelEditTodo()}>Cancel</Button>
                      </div>
                    </div>
                  ) : (
                    <Typography variant="title" color="primary">
                      { todo.name }
                    </Typography>
                  ) }
                  <Button type="button" color="primary" onClick={() => this.props.removeTodo(todo.id)}>Remove</Button>
                  <Button type="button" color="primary" onClick={() => this.props.switchTodoStatus(todo.id)}>Change Status</Button>
                  { this.state.edit && this.state.edit === todo.id ? (
                    null
                  ) : (
                    <Button type="button" color="primary" onClick={() => this.startEditTodo(todo.id, todo.name)}>Edit</Button>
                  ) }
                </div>
              ))
            )
          }
        </div>
        <div>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <TextField
              required
              name="name"
              label="Todo"
              type="text"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
            <div>
              <Button type="submit" color="secondary">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos()),
  createTodo: (name) => dispatch(createTodo(name)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  switchTodoStatus: (id) => dispatch(switchTodoStatus(id)),
  editTodo: (id, todo) => dispatch(editTodo(id, todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
