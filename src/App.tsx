import { useEffect, useRef } from "react"
import { OverlayScrollbars } from 'overlayscrollbars';
import FullScreen from "./assets/Fullscreen";
function App() {
  const toggleRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    const SELECTOR_SIDEBAR_WRAPPER = ".sidebar-wrapper";
    const Default = {
      scrollbarTheme: "os-theme-light",
      scrollbarAutoHide: "leave" as "never" | "scroll" | "leave",
      scrollbarClickScroll: true,
    };

    const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER) as HTMLElement;
    if (sidebarWrapper && typeof OverlayScrollbars !== "undefined") {
      OverlayScrollbars(sidebarWrapper, {
        scrollbars: {
          theme: Default.scrollbarTheme,
          autoHide: Default.scrollbarAutoHide,  // Correct type used here
          clickScroll: Default.scrollbarClickScroll,
        },
      });
    }

    
    
      const fullScreen = new FullScreen(toggleRef.current as HTMLElement, {});

      const handleToggle = () => {
        fullScreen.toggleFullScreen();
      };

      const toggleElement = toggleRef.current;
      if (toggleElement) {
        toggleElement.addEventListener('click', handleToggle);
      }

      // Cleanup event listener
      return () => {
        if (toggleElement) {
          toggleElement.removeEventListener('click', handleToggle);
        }
      };


    }, []);

    
    return (
      <>
        <nav className="app-header navbar navbar-expand bg-body">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button"> <i
                className="bi bi-list"></i> </a> </li>
              <li className="nav-item d-none d-md-block"> <a href="#" className="nav-link">Home</a> </li>
              <li className="nav-item d-none d-md-block"> <a href="#" className="nav-link">Contact</a> </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"> <a className="nav-link" data-widget="navbar-search" href="#" role="button"> <i
                className="bi bi-search"></i> </a> </li>
              <li className="nav-item dropdown"> <a className="nav-link" data-bs-toggle="dropdown" href="#"> <i
                className="bi bi-chat-text"></i> <span className="navbar-badge badge text-bg-danger">3</span> </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <a href="#" className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0"> <img src="../../dist/assets/img/user1-128x128.jpg" alt="User Avatar"
                      className="img-size-50 rounded-circle me-3" /> </div>
                    <div className="flex-grow-1">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-end fs-7 text-danger"><i className="bi bi-star-fill"></i></span>
                      </h3>
                      <p className="fs-7">Call me whenever you can...</p>
                      <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0"> <img src="../../dist/assets/img/user8-128x128.jpg" alt="User Avatar"
                        className="img-size-50 rounded-circle me-3" /> </div>
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          John Pierce
                          <span className="float-end fs-7 text-secondary"> <i className="bi bi-star-fill"></i> </span>
                        </h3>
                        <p className="fs-7">I got your message bro</p>
                        <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0"> <img src="../../dist/assets/img/user3-128x128.jpg" alt="User Avatar"
                        className="img-size-50 rounded-circle me-3" /> </div>
                      <div className="flex-grow-1">
                        <h3 className="dropdown-item-title">
                          Nora Silvester
                          <span className="float-end fs-7 text-warning"> <i className="bi bi-star-fill"></i> </span>
                        </h3>
                        <p className="fs-7">The subject goes here</p>
                        <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item dropdown-footer">See All
                    Messages</a>
                </div>
              </li>
              <li className="nav-item dropdown"> <a className="nav-link" data-bs-toggle="dropdown" href="#"> <i
                className="bi bi-bell-fill"></i> <span className="navbar-badge badge text-bg-warning">15</span> </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <span
                  className="dropdown-item dropdown-header">15 Notifications</span>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"> <i
                    className="bi bi-envelope me-2"></i> 4 new messages
                    <span className="float-end text-secondary fs-7">3 mins</span> </a>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"> <i
                    className="bi bi-people-fill me-2"></i> 8 friend requests
                    <span className="float-end text-secondary fs-7">12 hours</span> </a>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"> <i
                    className="bi bi-file-earmark-fill me-2"></i> 3 new reports
                    <span className="float-end text-secondary fs-7">2 days</span> </a>
                  <div className="dropdown-divider"></div> <a href="#" className="dropdown-item dropdown-footer">
                    See All Notifications
                  </a>
                </div>
              </li>
              <li className="nav-item"> <a className="nav-link" href="#" ref={toggleRef} data-lte-toggle="fullscreen"> <i data-lte-icon="maximize"
                className="bi bi-arrows-fullscreen"></i> <i data-lte-icon="minimize" className="bi bi-fullscreen-exit"
                  style={{ display: 'none' }}></i> </a> </li>
              <li className="nav-item dropdown user-menu"> <a href="#" className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"> <img src="../../dist/assets/img/user2-160x160.jpg"
                  className="user-image rounded-circle shadow" alt="User Image" /> <span className="d-none d-md-inline">Alexander
                    Pierce</span> </a>
                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                  <li className="user-header text-bg-primary"> <img src="../../dist/assets/img/user2-160x160.jpg"
                    className="rounded-circle shadow" alt="User Image" />
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2023</small>
                    </p>
                  </li>
                  <li className="user-body">
                    <div className="row">
                      <div className="col-4 text-center"> <a href="#">Followers</a> </div>
                      <div className="col-4 text-center"> <a href="#">Sales</a> </div>
                      <div className="col-4 text-center"> <a href="#">Friends</a> </div>
                    </div>
                  </li>
                  <li className="user-footer"> <a href="#" className="btn btn-default btn-flat">Profile</a> <a href="#"
                    className="btn btn-default btn-flat float-end">Sign out</a> </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
          <div className="sidebar-brand"><a href="./index.html" className="brand-link"><img
            src="../../dist/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
            <span className="brand-text fw-light">AdminLTE 4</span> </a> </div>
          <div className="sidebar-wrapper">
            <nav className="mt-2">
              <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i
                  className="nav-icon bi bi-speedometer"></i>
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="./index.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v1</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index2.html" className="nav-link active"> <i
                      className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v2</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index3.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v3</p>
                    </a> </li>
                  </ul>
                </li>
                <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i
                  className="nav-icon bi bi-speedometer"></i>
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="./index.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v1</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index2.html" className="nav-link active"> <i
                      className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v2</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index3.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v3</p>
                    </a> </li>
                  </ul>
                </li>
                <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i
                  className="nav-icon bi bi-speedometer"></i>
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="./index.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v1</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index2.html" className="nav-link active"> <i
                      className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v2</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index3.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v3</p>
                    </a> </li>
                  </ul>
                </li>
                <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i
                  className="nav-icon bi bi-speedometer"></i>
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="./index.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v1</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index2.html" className="nav-link active"> <i
                      className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v2</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index3.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v3</p>
                    </a> </li>
                  </ul>
                </li>
                <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i
                  className="nav-icon bi bi-speedometer"></i>
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="./index.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v1</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index2.html" className="nav-link active"> <i
                      className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v2</p>
                    </a> </li>
                    <li className="nav-item"> <a href="./index3.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Dashboard v3</p>
                    </a> </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <main className="app-main">
          <div className="app-content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="mb-0">Dashboard v2</h3>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-end">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard v2
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="app-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box"> <span className="info-box-icon text-bg-primary shadow-sm"> <i className="bi bi-gear-fill"></i> </span>
                    <div className="info-box-content"> <span className="info-box-text">CPU Traffic</span> <span className="info-box-number">
                      10
                      <small>%</small> </span> </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box"> <span className="info-box-icon text-bg-danger shadow-sm"> <i className="bi bi-hand-thumbs-up-fill"></i> </span>
                    <div className="info-box-content"> <span className="info-box-text">Likes</span> <span className="info-box-number">41,410</span> </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box"> <span className="info-box-icon text-bg-success shadow-sm"> <i className="bi bi-cart-fill"></i> </span>
                    <div className="info-box-content"> <span className="info-box-text">Sales</span> <span className="info-box-number">760</span> </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box"> <span className="info-box-icon text-bg-warning shadow-sm"> <i className="bi bi-people-fill"></i> </span>
                    <div className="info-box-content"> <span className="info-box-text">New Members</span> <span className="info-box-number">2,000</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="app-footer">
          <div className="float-end d-none d-sm-inline">Anything you want</div>  <strong>
            Copyright &copy; 2014-2024&nbsp;
            <a href="https://adminlte.io" className="text-decoration-none">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
      </>
    )
  }
export default App
