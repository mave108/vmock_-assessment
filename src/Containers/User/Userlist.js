import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import Search from '../../Components/Search/Search';
import {search} from '../../Actions/User/Useraction';
import Listing from '../../Components/User/List/Userlisting';

class Userlist extends React.Component{

   constructor(props){
       super(props);       
       //this.searchHandler = this.searchHandler.bind(this);
   }
   searchHandler = (search_string)=>{
       this.props.dispatch(search(search_string));
   }




    render(){
  console.log("userlist",this.props);
        return(
            <Layout>
                <div>user List</div>
                <Search  searchHandler={this.searchHandler}/>
                {typeof this.props.Users !== 'undefined'?(<Listing users={this.props.Users.items || []} />) :null}
                
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        Users : state.Users.Users,                     
        }
}

export default connect (mapStateToProps,null)(Userlist);