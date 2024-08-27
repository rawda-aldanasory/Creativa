import logo from './logo.svg';
import './App.css';
import Component1 from './components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalProps from './components/FunctionalProps/FunctionalProps';
import ClassProps from './components/ClassProps/ClassProps';
import ClassState from './components/isloggedIn/isloggedIn';
import Selector from './components/TwoButtons/TwoButtons';
import HomePage from './components/Home/Home';
import LogIn from './components/LogIn/LogIn'; 
import SignUp from './components/SignUp/SignUp';
import ProductsList from './components/Products/ProductsData';

function App() {
  return (
    <div className="App">
      {/* <Component1 /> */}
      {/* <ClassComponent /> */}

      {/* <FunctionalProps fname="Rawda"  email={"rawda@gmail.com"} Password={1234} />
      <FunctionalProps fname="Eman" email={"Eman@gmail.com"} Password={2222} />
      <FunctionalProps fname="Mohamed" email={"mohamed@gmail.com"} lname={"Alsayed"} Password={4444} /> */}

      {/* <ClassProps fname="Rawda" lname="Mohamed" c1="Software Testing Course" c2="React Course" > */}

      {/* </ClassProps> */}

      {/* <ClassState /> */}

      {/* <Selector /> */}
      {/* <HomePage /> */}

      {/* Lab 3 */}

      <ProductsList />

    </div>
  );
}

export default App;
