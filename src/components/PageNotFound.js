import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageNotFound extends React.Component{
    
    render(){
        return(
            <div>
                404 - <Link to="/">Go To Home</Link>
            </div>
            );
    }
}

export default PageNotFound;