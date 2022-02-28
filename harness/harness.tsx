import React, { ChangeEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Harness: React.FC = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.onmessage = (message) => {
      console.log("Parent received message from app");
      console.log(message);
    };
  }, []);
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
  };
  const send = () => {
    const app = document.getElementById("appIFrame") as HTMLIFrameElement;
    try {
      app.contentWindow.postMessage(JSON.parse(message));
    } catch {
      app.contentWindow.postMessage(message);
    }
  };
  const placeholder =
    "If the input is valid JSON it'll be parsed and sent as an Object, otherwise as a string";

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          rows={10}
          cols={30}
        ></textarea>
        <button onClick={send}>Send</button>
      </div>
      <iframe src="app.html" id="appIFrame" style={{ flex: 1 }}></iframe>
    </div>
  );
};

ReactDOM.render(<Harness />, document.getElementById("harnessRoot"));
