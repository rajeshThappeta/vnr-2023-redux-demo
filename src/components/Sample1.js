import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import {incrementCounter} from '../slices/counterSlice'


function Sample1() {
  let {counter}= useSelector(state=>state.counter)
  let dispatch=useDispatch()

  function changeCounter(){
    //create action object
    let actionObj=incrementCounter()
    //dispatch actionObj to Store
    dispatch(actionObj)
  }


  return (
    <div className="mt-5">
      <h1 className="text-center">{counter}</h1>
      <button className="btn btn-success" onClick={changeCounter} >Increment</button>

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
