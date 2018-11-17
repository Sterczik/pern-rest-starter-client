import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { startSetTodos } from './actions';

class TodosPage extends React.Component {
  componentDidMount() {
    this.props.startSetTodos();
  }

  render() {
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
                </div>
              ))
            )
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  startSetTodos: () => dispatch(startSetTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
