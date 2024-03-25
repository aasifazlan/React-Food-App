 import React from "react";
 

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="user">
                <h2>Name : {this.props.name}</h2>
                <h3>Phone : 8076585930</h3>
                <h3>Email : aasifazlaan@gmail.com</h3>
                 <h3>Address : 123456789, 123456789, 123456789, 123456789</h3>
                
            </div>
        );
}
}
export default UserClass;