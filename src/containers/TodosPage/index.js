import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import {
  getTodos,
  createTodo,
  removeTodo,
  switchTodoStatus
} from './actions';

export class TodosPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
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
        <div>
          {
            this.props.todos.length === 0 ? (
              <div>
                <span>No todos</span>
              </div>
            ) : (
              this.props.todos.map((todo) => (
                <div key={todo.id}>
                  <h4>{ todo.name }</h4>
                  <span>Status: </span>
                  <span>{ todo.isDone.toString() }</span>
                  <button type="button" onClick={() => this.props.removeTodo(todo.id)}>Remove</button>
                  <button type="button" onClick={() => this.props.switchTodoStatus(todo.id)}>Change Status</button>
                </div>
              ))
            )
          }
        </div>
        <div>
          <h6>Add todo</h6>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
            <button type="submit">Add</button>
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
  switchTodoStatus: (id) => dispatch(switchTodoStatus(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
