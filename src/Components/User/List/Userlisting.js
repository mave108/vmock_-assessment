import React from 'react';
import {Link} from 'react-router-dom';

const Listing = (props) =>{

    return (
        <ul className="list-unstyled">
       {props.users.map( user => (
         <li className="media" key={user.id} style={{borderBottom: "1px solid #ccc",padding:"5px",margin: "3px 0"}}>                  
         <img className="mr-3" src={user.avatar_url} alt={user.login}  wiidth="48" height="48"/>
         <div className="media-body">
         <Link to={`/users/${user.login}`}>  <h5 className="mt-0 mb-1">{user.login}</h5>  </Link>         
         </div>         
       </li>  
      ))}

              
      </ul>
    );
}

export default Listing;