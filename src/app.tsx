import React, { useEffect } from "react";

const postMessage = (message: unknown) => {
  if (process.env.NODE_ENV === "development") {
    window.parent.postMessage(message);
  } else {
    window.parent.postMessage(message, "https://henrywallis93.wixsite.com/");
  }
};

const App: React.FC = () => {
  useEffect(() => {
    window.onmessage = (message) => {
      console.log("App received message from parent");
      console.log(message);
    };
  }, []);

  return (
    <>
      <h1>My embedded React app</h1>
      <button onClick={() => postMessage("hi")}>Message parent</button>
    </>
  );
};

export default App;
