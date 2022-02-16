import video from "../Videos/y2mate.com - 가즈아_480p.mp4";
import { useState, useEffect } from "react";

// show text
function Text() {
  return <h1>구독 가즈아~!</h1>;
}

function Test() {
  // counter State value
  const [counter, setValue] = useState(0);
  // like State value
  const [like, setLike] = useState(0);
  // text State value
  const [text, setText] = useState("");
  // comment State value
  const [comment, setComment] = useState([]);
  // img State value
  const [img, setImg] = useState(true);
  // subscribe State value
  const [sub, setSub] = useState(false);
  // click event handler
  const onClick = () => {
    setLike((prev) => prev + 1);
    alert("Thanks like me!XD");
  };
  // img event handler
  const imgClick = () => {
    setImg((prev) => !prev);
  };
  // sub click event handler
  const subClick = () => {
    setSub((prev) => !prev);
  };
  // Counting Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + 10);
    });
    return () => clearInterval(timer);
  }, []);
  // text onChange event handler
  const onChange = (e) => setText(e.target.value);
  // comment onSubmit event handler
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || text === null) {
      return;
    }
    if (text !== "") {
      setComment((currentArray) => [
        ...currentArray,
        text.split("\n").map((txt) => (
          <>
            {txt}
            <br />
          </>
        )),
      ]);
    }
    setText("");
  };

  return (
    <div>
      <div>
        {sub ? <Text /> : null}
        <button onClick={subClick}>{sub ? "subscribe" : "cancel"}</button>
        <h1>내 구독자 수 : {counter}</h1>
        <p>다이아 가즈아~!</p>
        <h2>좋아요 : {like}</h2>
        <button onClick={onClick}>like me</button>
        <p>
          치킨하면? 뭐다?&nbsp;
          <button onClick={imgClick}>{img ? "🍗" : "🍺"}</button>
        </p>
      </div>
      <video width="750" height="500" controls loop>
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <h2>댓글 ({comment.length})</h2>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={text}
            type="text"
            placeholder="댓글을 작성해주세요.."
          />
        </form>
        <b>{comment}</b>
      </div>
    </div>
  );
}

export default Test;
