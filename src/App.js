import Header from "./components/Header";
import "./App.css";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="">
          <Auth />
        </div>
      </main>
      <footer>
        <p className="text-xs ml-[650px] mt-4">
          Copyright @wework 2022 | Privacy Policy
        </p>
      </footer>
    </div>
  );
}

export default App;
