import "../../../css/Edit.css";
import { Input } from "./Nickname";
import { useState } from "react";

function Homepage() {
    const [homepage, setHomepage] = useState("we-pard.com");
    const onChange = (e) => {
        setHomepage(e.target.value);
    }

    return (
        <div className="component">
            <div className="component-label">홈페이지</div>
            <span className="component-element">
            <Input onChange={onChange} type="text" value={homepage} />
            </span>
        </div>
    );
}

export default Homepage;