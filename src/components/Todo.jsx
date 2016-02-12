import React from 'react';
import FilterLink from './FilterLink';

let nextTodoID = 0;

const Todo = React.createClass({
  getVisibleTodos: function(todos, filter){
    // console.log(todos.filter((val) => val.get('id') === 1));
    // console.log(filter);
    switch(filter){
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((val) => val.get('completed'));
      case 'SHOW_ACTIVE':
        return todos.filter((val) => !val.get('completed'));
      default:
        return todos;
    }
  },
  render: function(){
    return(
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => { this.props.dispatch({
                    type: 'ADD_TODO',
                    text: this.input.value,
                    id: nextTodoID++
                  });
                  this.input.value = '';
                }}>Add Todo</button>
        <ul>
        {console.log(this.props)}
          {this.getVisibleTodos(this.props.todos, this.props.visibilityFilter).map((todo) => {
            return(
              <li key={todo.get('id')}
                  onClick={() => {
                    this.props.dispatch({
                      type: 'TOGGLE_TODO',
                      id: todo.get('id')
                    })
                  }}
                  style={{
                    textDecoration:
                      todo.get('completed') ?
                        'line-through' :
                        'none'
                  }}>
                {todo.get('text')}
              </li>
            );
          })}
        </ul>
        <FilterLink dispatch={this.props.dispatch}
                    currentFilter={this.props.visibilityFilter} />
      </div>
    );
  }
});

export default Todo;
