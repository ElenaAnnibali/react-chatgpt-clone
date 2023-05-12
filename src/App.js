function App() {
  return (
    <div className="app">
      <section className="side-bar">
        <button>New Chat</button>
        <div className="history"></div>
        <nav>
          <p>Made by Elena</p>
        </nav>
      </section>
      <section className="main">
        <h1>ElenaGPT</h1>
        <p id="output"></p>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">&#x27A2;</div>
          </div>
        </div>
        <p className="info">
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts. ChatGPT May 3 Version
        </p>
      </section>
    </div>
  );
}

export default App;
