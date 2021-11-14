import ReactDOM from "react-dom";
import "./styles.css";
//import UserApp from "./user";

/**
 * Our data
 * ------------------------
 */
const user = {
    name: "Chris Sev",
    location: "Las Vegas",
    foodType: "Everything",
    age: 32,
    likes: "Coding into the wee hours of the morning",
    twitterUsername: "chris__sev",
    avatar:
        "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
    return (
        <div className="user-deets">
            <img src={user.avatar} alt="" />
            <h1>{user.name} on Code</h1>
            <h5>Location</h5>
            <h4>{user.location}</h4>
            <h5>Eats</h5>
            <p>{user.foodType}</p>
            <h5>Age</h5>
            <p>{user.age}</p>
            <h5>Likes</h5>
            <p>{user.likes}</p>
            <h5>Twitter</h5>
            <a href={`https://twitter.com/@${user.twitterUsername}`}>
                @{user.twitterUsername}
            </a>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
