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
import ComponentThree from './components/ContextComponents/ComponentOne/ComponentTwo/ComponentThree/ComponentThree';
import ComponentOne from './components/ContextComponents/ComponentOne/ComponentOne';
import ComponentTwo from './components/ContextComponents/ComponentOne/ComponentTwo/ComponentTwo';
import ComponentFour from './components/ContextComponents/ComponentOne/ComponentTwo/ComponentThree/ComponentFour/ComponentFour';
import ComponentFive from './components/ContextComponents/ComponentOne/ComponentTwo/ComponentThree/ComponentFour/ComponentFive/ComponentFive';
import { UseProvider } from './Context/Context';
import GetComponent from './components/GetComponent/GetComponent';
import PostComponent from './components/PostComponent/PostComponent';
import HooksProduct from './Hooks/HooksProducts/HooksProducts';
import SignupForm from './CreateAccount/CreateAccount';
import HooksProductsList from './Hooks/HooksProducts/HooksProductsData';
import UseEffectCounter from './useEffect/useEffectCounter/useEffectCounter';
import UsernameGreeting from './useEffect/useEffectGreeting/useEffectGreeting';
import IntervalCounter from './useEffect/intervalCounter/intervalCounter';
import WindowDisplay from './useEffect/Window/Window';
import MousePositionAndClicks from './useEffect/MousePositionAndClicks/MousePositionAndClicks';
import CommentList from './useEffect/getComments/getComments';
import SearchComment from './useEffect/SearchComment/SearchComment';

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

      {/* <ProductsList /> */}

      {/* <>
    <div className="App">
      <UseProvider value ="The added value">
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
        <ComponentFour/>     
        <ComponentFive/>
      </UseProvider> 
      <HomePage/>
    </div>
    </> */} 

    {/* lab 4 */}

    {/* <GetComponent /> */}
    {/* <PostComponent /> */}

    {/* lab 5 */}


    {/* <HooksProductsList /> */}
    {/* <SignupForm /> */}

    {/* lab 6 */}

    {/* <UseEffectCounter /> */}
    {/* <UsernameGreeting /> */}
    {/* <IntervalCounter /> */}
    {/* <WindowDisplay /> */}
    {/* <MousePositionAndClicks /> */}
    {/* <CommentList /> */}
    <SearchComment />
    </div>
  );
}

export default App;
