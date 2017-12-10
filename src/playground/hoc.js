import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWaring = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private message. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>            
    );
};

const requiresAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : "Please login"}
        </div>
    );
};

const AdminInfo = withAdminWaring(Info);
const AuthInfo = requiresAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById("root"))
ReactDom.render(<AuthInfo isAuth={false} info="There are the details"/>, document.getElementById("root"))