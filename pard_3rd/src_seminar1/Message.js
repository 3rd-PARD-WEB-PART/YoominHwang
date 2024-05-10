import "./Form.css";

function Message() {
    return (
        <div>
            <p className="msg">Message:</p>
            <input type="textarea" className="msginput" />
        </div>
    );
}

export default Message;