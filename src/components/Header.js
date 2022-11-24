import React, { useRef } from "react";


function Header(props) {
  const inputQuery = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const query = inputQuery.current.value;
    props.onSearch(query);
  };

  const clickHandler = e => {
    const btn = e.target.closest("a");
    if (!btn) return;
    const content = btn.textContent.toLowerCase();
    inputQuery.current.value = content;
    props.onSearch(content);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/#">Flickr Gallery</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={clickHandler}>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">Mountain</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">Beaches</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">Birds</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/#">Food</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={submitHandler}>
            <input className="form-control me-2" ref={inputQuery} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Header;
