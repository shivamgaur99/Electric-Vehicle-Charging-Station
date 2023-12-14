import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import MyRegistration from "./pages/Registration";
import CheckQueries from "./pages/CheckQueries";
import MyUserList from "./pages/UserList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
       
       <Navbar/>

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/** Private Needs Protection */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/check-queries"
            element={
              <ProtectedRoute>
                <CheckQueries />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <MyUserList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          {/* 
          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/registration" element={<MyRegistration />} />
          {/* <Route path="/validation-demo" element={<ValidationDemo />} /> */}

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// lets protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;
