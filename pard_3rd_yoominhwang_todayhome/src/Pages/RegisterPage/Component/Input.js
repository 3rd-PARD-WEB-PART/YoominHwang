import "../../../css/Reg.css";

function Input(props) {
    return(
        <div>
            <p className="title">{props.title}</p>  
            <p className="title">{props.text}</p>
            <input type="password" className="input" placeholder={props.ph} />
        </div>
    );
}

export default Input;