import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  let navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = `http://localhost:4000/find-all-user`;
    let res = await fetch(url);
    let list = await res.json();

    setUserList([...list]);
  };

  const deleteUserAction = async (item) => {
    try {
      // backend call delete this user.
      let url = `http://localhost:4000/delete-user?email=${item.email}`;
      let res = await fetch(url);

      if (res.status === 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      alert("success");

      // refresh the page on success
      getAllUserAction();
    } catch (err) {
      alert(err.message);
    }
  };

  const editUserAction = (item) => {
    navigate("/registration");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-11">
          <h3>User List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{item.username}</td>
                  <td>*******</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td className="fs-5">
                    <input
                      type="button"
                      value="&#x270E;"
                      onClick={() => editUserAction(item)}
                    />{" "}
                    /
                    <input
                      type="button"
                      value="&#128686;"
                      // onClick={deleteUserAction}
                      onClick={() => deleteUserAction(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserList;
