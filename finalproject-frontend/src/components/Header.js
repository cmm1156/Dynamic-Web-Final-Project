import React from "react";

function Header({ LogoutFunction, isLoggedIn, userAuthInfo }) {
  return (
    <header className="Header">
      <div>
        <a href="/">
          <h1>Hiking Website</h1>
        </a>
        <nav className="Header__nav">
          {isLoggedIn && <a href="/">Home</a>}
          {isLoggedIn && <a href={`/profile/${userAuthInfo.uid}`}>Profile</a>}
          {isLoggedIn && <a href="/create-post">Create Post</a>}
          {!isLoggedIn && <a href="/create-account">Create Account</a>}
          {!isLoggedIn && <a href="/login">Login</a>}
          {isLoggedIn && (
            <a href="" onClick={() => LogoutFunction()}>
              Logout
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
