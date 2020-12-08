import React from "react";

// LoginFunction is the parameter of LoginForm
// LoginForm is the element that will show up on the page
// this element waits for the the trigger in onSubmit which then runs the function to log the user in
function LoginForm({ LoginFunction }) {
  return (
    <div>
      <form className="SignUpForm" onSubmit={(e) => LoginFunction(e)}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" />

        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
