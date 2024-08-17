const FunctionalProps = (props) => {
    return (
        <div>
            <h3>Hello, {props.fname} {props.lname ? props.lname : null} !</h3>
            <h4>Your Email is {props.email ? props.email : null}</h4>
            <h4>Your Password is {props.Password ? props.Password : null}</h4>
            <p>This is a functional component with props.</p>
        </div>
    )
}

export default FunctionalProps;


