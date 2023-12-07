import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { incrementCounter } from "../slices/counterSlice";
import { usersPromise } from "../slices/usersSlice";

function Sample1() {
  let { users, isPending, errMessage } = useSelector((state) => state.users);

  let { counter } = useSelector((state) => state.counter);
  let dispatch = useDispatch();

  function changeCounter() {
    //create action object
    let actionObj = incrementCounter();
    //dispatch actionObj to Store
    dispatch(actionObj);
  }


  function getUsers(){
    let actionObj=usersPromise()
   // console.log(actionObj)
    dispatch(actionObj)
  }


  return (
    <div className="mt-5">
      <h1 className="text-center">{counter}</h1>
      <button className="btn btn-success" onClick={changeCounter}>
        Increment
      </button>

      <button className="btn btn-info ms-4" onClick={getUsers}>
        Get users
      </button>

      {
        users.map(userObj=><p className="lead" key={userObj.id}>{userObj.username}</p>)
      }


      <ul className="nav bg-secondary fs-4  p-2 justify-content-center w-50 mx-auto">
        <li className="nav-item">
          <Link className="nav-link text-white" to="test1">
            Test1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="test2">
            Test2
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Sample1;
