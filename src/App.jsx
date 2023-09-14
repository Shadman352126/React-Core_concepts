import "./App.css";
import Counter from "./Counter";
import Team from "./team";
import User from "./User";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("1st Button Clicked");
  }
  const button3rd = () => {
    alert("3rd Button Clicked");
  };

  const button4th = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>1st Button</button>
      <button
        onClick={() => {
          alert("2nd Button Clicked");
        }}
      >
        2nd Button
      </button>
      <button onClick={button3rd}>3rd Button</button>
      <button onClick={() => button4th(5)}>4th Button</button>
    </>
  );
}

export default App;
