import React from "react";
import Form from "./Form";

function SignUpForm(props) {
  const { gogo } = props;
  console.log(props, "hfj");
  return (
    <>
      <Form formType={"Sign Up"} gg={"gg"} />
    </>
  );
}

export default SignUpForm;

/**
 * ComponentWillMount - deprec*
 *
 * 1 ComponentDidMount
 * 3  ComponentWillUpdate/ shouldComponentUpdate
 * 5 ComponentDidUpdate
 * 2 ComponentWillReceiveProps - deprec
 * 4 ComponentWillUnmount
 */

/**
 * ComponentDidCatch
 */

// * ComponentWillReceiveProps(){
// .........
// }
