import axios from "axios";
import { useEffect, useState } from "react";

export function Header () {
  const [jwtExists, setJwtExists] = useState(localStorage.getItem("jwt") !== null ?   true : false)
  useEffect(()=> {

    if ( localStorage.getItem("jwt") !== null){
      setJwtExists(true)
    }
    else {
      setJwtExists(false)
    }
  }, [])

  console.log(jwtExists)

    const handleClick = (event) => {
      event.preventDefault();
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      window.location.href = "/";
    }

  


  return(
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Vida</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/recipes/new">Create Recipe</a>
              </li>
              {jwtExists !== true && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">Signup</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                </>
              )}
              <li className="nav-item">
                <a className="nav-link" 
                onClick={handleClick}
                href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}