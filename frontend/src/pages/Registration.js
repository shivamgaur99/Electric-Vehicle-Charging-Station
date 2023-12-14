import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MyCarousel2 from "../components/MyCarousel2";
import { Container } from "react-bootstrap";

function Registration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status !== 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <Container>
        <div className="row justify-content-center border">
          <div className="col-sm-12 col-md-6">
            <div className="fs-2">Register Here</div>

            <form ref={formRef} className="needs-validation">
              <input
                type="text"
                className="form-control form-control-lg mb-2 mt-1"
                placeholder="Enter username"
                value={user.username}
                onChange={handlerUsernameAction}
                pattern="^[A-Za-z\s]{3,20}"
                required
              />
              <input
                type="email"
                className="form-control form-control-lg mb-2"
                placeholder="Enter Email"
                value={user.email}
                onChange={handlerEmailAction}
                pattern="[a-z]+@[a-z0-9-]+.[a-z]{5,}$"
                required
              />
              <input
                type="password"
                className="form-control form-control-lg mb-2"
                placeholder="Enter password"
                value={user.password}
                onChange={handlerPasswordAction}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,30}"
                required
              />
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                placeholder="Enter mobile"
                value={user.mobile}
                onChange={handlerMobileAction}
                pattern="[6789][0-9]{9}"
                minLength="10"
                maxLength="10"
                required
              />
              <input
                type="button"
                value="Register"
                className="w-100 btn btn-lg btn-secondary"
                onClick={registerAction}
              />

              <div className="d-flex justify-content-center my-4">
                <Link to={"/login"}>Existing User, Login here</Link>
              </div>
            </form>

            {isSuccess && <div className="alert alert-success">Success</div>}
            {isError && <div className="alert alert-danger">Error</div>}
          </div>
        </div>
      </Container>
      <MyCarousel2 />
    </>
  );
}

export default Registration;
