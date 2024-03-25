import User from "./User";
import UserClass from "./UserClass";
 

const About = ()=>{
    return(
        <div className="about">
            <h1>About Us</h1>
            <User name ={"Aasif Azlan (Functional Compo"} location ={"Delhi"} />
             <UserClass name = {"Aasif Azlan (Class)"} />
        </div>
    )
}
export default About;
