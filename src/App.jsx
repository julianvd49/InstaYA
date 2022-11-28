import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex" id="wrapper">
        {/* <!-- Sidebar--> */}
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-danger text-white">InstaYA</div>
          <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-light p-3" href="#!">
              Dashboard
            </a>
            <a className="list-group-item list-group-item-light p-3" href="#!">
              Shortcuts
            </a>
            <a className="list-group-item list-group-item-light p-3" href="#!">
              Overview
            </a>
          </div>
        </div>
        {/* <!-- Page content wrapper--> */}
        <div id="page-content-wrapper">
          {/* <!-- Page content--> */}
          <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <p>
              The starting state of the menu will appear collapsed on smaller
              screens, and will appear non-collapsed on larger screens. When
              toggled using the button below, the menu will change.
            </p>
            <p>
              Make sure to keep all page content within the
              <code>#page-content-wrapper</code>. The top navbar is optional,
              and just for demonstration. Just create an element with the
              <code>#sidebarToggle</code>
              ID which will toggle the menu when clicked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
