import { Link, withRouter } from "react-router-dom";
import "../styles/Navigation.css"
function Navigation() {
    return(
        <div className="navigationContainer">
            <Link class="navbar-brand" to="/test">test</Link>
        </div>

    )

}
export default withRouter(Navigation);