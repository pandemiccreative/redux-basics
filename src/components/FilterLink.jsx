import React from 'react';

const FilterLink = React.createClass({
  render: function(){
    return(
      <div>
        <a href='#'
           onClick={(e) => {
             e.preventDefault();
             this.props.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter: 'SHOW_ALL'
             })
           }}>
              Show All
           </a>
           <br />
           <a href='#'
            onClick={(e) => {
              e.preventDefault();
              this.props.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: 'SHOW_COMPLETED'
              })
            }}>
               Show Completed
            </a>
            <br />
            <a href='#'
             onClick={(e) => {
               e.preventDefault();
               this.props.dispatch({
                 type: 'SET_VISIBILITY_FILTER',
                 filter: 'SHOW_ACTIVE'
               })
             }}>
                Show Active
             </a>
      </div>
    );
  }
});

export default FilterLink;
