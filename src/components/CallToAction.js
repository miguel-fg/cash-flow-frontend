import { Link } from "react-router-dom";

//bootstrap components
import Button from "react-bootstrap/Button";

export default function CallToAction(props) {
    return (
        <div className="col-md-12 text-center">
            <Link to="/dashboard">
            <Button className="call-to-act">{props.name}</Button>
            </Link>
        </div>
    );
}
