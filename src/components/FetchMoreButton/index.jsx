import Button from "../Button";
import "./index.css";

const FetchMoreButton = ({onClick}) => {
    return (
        <div className="FetchMore">
            <Button onClick={onClick}>Fetch More</Button>
        </div>
    );
};

export default FetchMoreButton;