import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { startSetTodos } from './actions';

class TodosPage extends React.Component {
  constructor(props) {
    super(props);
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
              this.props.todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <h4>{ todo.name }</h4>
                  </div>
                );
              })
            )
          }

        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.startSetTodos();
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  startSetTodos: () => dispatch(startSetTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
