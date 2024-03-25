const User = (props)=>{
    return (
        <div className="user">
            <h2>Name : {props.name}</h2>
            <h3>Phone : 8076585930</h3>
            <h3>Email : aasifazlaan@gmail.com</h3>
             <h3>Address : {props.location} </h3>
            
        </div>
    )
}
export default User;