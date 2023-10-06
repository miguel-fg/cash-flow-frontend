import { Link } from "react-router-dom";

// bootstrap components
import Button from "react-bootstrap/Button";

// call to action button (the component will get more use eventually)
export default function CallToAction(props) {
    return (
        <div className="col-md-12 text-center">
            <Link to="/signup">
            <Button className="call-to-act">{props.name}</Button>
            </Link>
        </div>
    );
}
