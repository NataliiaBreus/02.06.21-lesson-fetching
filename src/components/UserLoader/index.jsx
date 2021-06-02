import React, {Component} from 'react'

export default class UserLoader extends Component {
    constructor (props) {
        super (props);
        this.state = {
            users: [],

            isFetching: false,

        };
    }
    componentDidMount () {
        fetch ('https://randomuser.me/api/')
        .then(res = res.json())
        .then ((data)=>{
            this.setState({
                users: data.results,
            });
        })
        .catch(error=>this.setState({error}))
        .finally(()=>this.setState({isFetching: false}));
    }

    render() {
        return <div></div>
    }
}