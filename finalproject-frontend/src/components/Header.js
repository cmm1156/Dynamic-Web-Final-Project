import React from "react";

function Header({ loggedIn, LogoutFunction }) {
  return (
    <>
      <header className="Header">
        {/* <h1 className="websiteName">The Rest Area</h1> */}
        <nav className="Header__nav">
          {loggedIn && <a href="/">Profile</a>}
          {!loggedIn && <a href="/create-account">Create Account</a>}
          {!loggedIn && <a href="/login">Login</a>}
          {loggedIn && (
            <a href="" onClick={() => LogoutFunction()}>
              Logout
            </a>
          )}

          {/* {loggedIn && <a href="/create-recipe">Create Post</a>}
          {loggedIn && <a href="/new-container">New Container</a>} */}

          {/* <a href="/home-page">Home</a>
          {loggedIn ? (
            <>
              <a href="/">User Profile</a>
              <a onClick={() => LogoutFunction()}>Logout</a>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/create-account">Create Acccount</a>
            </>
          )} */}
        </nav>
      </header>
    </>
  );
}

export default Header;
