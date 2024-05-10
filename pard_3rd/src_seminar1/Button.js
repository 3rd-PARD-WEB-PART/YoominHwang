import "./Form.css";

function Button() {
    return (
        <div>
            <button className="btn">Submit</button>
        </div>
    );
}

export default Button;
// export: 추천
// Button이라는 것을 default로 추천할 거야
// 다른 방식: export function Button() {}