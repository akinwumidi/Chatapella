import "./authpage.scss"
import axios from "axios"

const AuthPage = (props) => {
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const { value } = e.target[0];

        // Local method: Using localhost:3001  ||After starting up the local server working directory by running npm start
        // axios.post("http://localhost:3001/authenticate",

        // The server directory /service has been hoster on the render.com : www.chatapella.onrender.com
        axios.post("https://chatapella.onrender.com/authenticate",
            { username: value }).then(r => props.onAuth({ ...r.data, secret: value }))
            .catch(e => console.log("error: ", e))

    };

    return (
        <div className="background">
            <form onSubmit={formSubmitHandler} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;