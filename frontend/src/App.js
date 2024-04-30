import logo from './assest/logo.jpg'
import './App.css'
function App() {
  return (
    <>
    <div>
    <div className="rounded-md">  
      {/* Self-closing img tag with border styling */}
      <img src={logo} alt="Logo" className=" rounded-md" />
    </div>
    <h1 className="">
      Hello world!
    </h1>
    </div>
    </>
  );
}

export default App;
