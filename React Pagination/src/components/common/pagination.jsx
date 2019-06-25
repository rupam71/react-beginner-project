// $ npm i prop-types@15.6.2
// $ npm i lodash@4.17.10

import React, { Component } from 'react';
import _ from 'lodash' ;
import PropTypes from 'prop-types' ;

class Pagination extends Component {
   
    render() { 
        
        const itemCount = this.props.itemsCount;
        const pageSize = this.props.pageSize;
        const currentPage = this.props.currentPage;
        console.log(currentPage);

        const pagesCount = Math.ceil(itemCount / pageSize) ;
        if (pagesCount === 1) return null;
        const pages = _.range(1, pagesCount + 1);

        return ( 
            <nav>
                <ul className="pagination">
                   {pages.map (page => (
                       <li key={page} className={page === currentPage ? "page-item active": "page-item"}>
                       <a onClick={()=> this.props.onPageChange(page)}
                        className="page-link">
                           {page}
                       </a>
                   </li>
                   ))}
                    
                </ul>
            </nav>
            );
    }
}

Pagination.propTypes = {
    itemCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired,
    onPageChange : PropTypes.func.isRequired
};
 
export default Pagination