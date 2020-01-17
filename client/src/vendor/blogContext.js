import React, { Component } from 'react'
import posts from "./blog-data"

class BlogProvider extends Component{
    state={
        posts:[],
        loading: true
        
    }
};

//Get Data

componentDidMount(){
    //
    let posts=this.formatData(items);
    
}