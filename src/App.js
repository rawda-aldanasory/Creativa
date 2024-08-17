import logo from './logo.svg';
import './App.css';
import Component1 from './components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalProps from './components/FunctionalProps/FunctionalProps';
import ClassProps from './components/ClassProps/ClassProps';
import ClassState from './components/isloggedIn/isloggedIn';

function App() {
  return (
    <div className="App">
      <Component1 />
      {/* <ClassComponent /> */}

      {/* <FunctionalProps fname="Rawda"  email={"rawda@gmail.com"} Password={1234} />
      <FunctionalProps fname="Eman" email={"Eman@gmail.com"} Password={2222} />
      <FunctionalProps fname="Mohamed" email={"mohamed@gmail.com"} lname={"Alsayed"} Password={4444} /> */}

       {/* <ClassProps fname="Rawda" lname="Mohamed" c1="Software Testing Course" c2="React Course" > */}

        {/* </ClassProps> */}

        {/* <ClassState /> */}
    </div>
  );
}

export default App;
