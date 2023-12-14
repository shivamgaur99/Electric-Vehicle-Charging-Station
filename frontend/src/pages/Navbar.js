import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand
            href="/home"
            className="d-flex"
            style={{ fontFamily: "monoBrush Scriptspace", color: "#194D33" }}
          >
            <img src="./logo.png" alt="logo" height={50} />
            <h1 className="mx-2">evon</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  mb-2 mb-lg-0">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>

              {/* <Nav.Link href="/user-list" disabled>
                Services
              </Nav.Link> */}
              {/* 
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}  
              {/* <Nav.Link as={Link} to={"/check-queries"}>
                CheckQueries
              </Nav.Link> */}

              <Nav.Link as={Link} to={"/contact-us"}>
                ContactUs
              </Nav.Link>
            
              {/* <Nav.Link as={Link} to={"/registration"}>
                Registration
              </Nav.Link> */}
              {loginStatus && (
                <Nav.Link as={Link} to={"/registration"} style={{ display: "none" }}>
                  Registration
                </Nav.Link>
              )}

              <Nav.Link as={Link} to={"/about-us"}>
                AboutUs
              </Nav.Link>

              {/* Admin Role  */}
              {/* NavDropdown */}
              <NavDropdown title="Admin" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/user-list">
                  registered users
                </NavDropdown.Item>
                <Nav.Link href="/check-queries" className="mx-2">
                  check Queries
                </Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* Admin Role  */}
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationLinks;
