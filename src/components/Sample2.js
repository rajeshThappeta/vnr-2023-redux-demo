import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { decrementCounter,changeCounterByValue } from "../slices/counterSlice";

function Sample2() {
  let { counter } = useSelector((state) => state.counter);
  let dispatch=useDispatch()

  function changeCounter(){
    let actionObj=decrementCounter()
    dispatch(actionObj)
  }

  function changeCounter2(){
    let actionObj=changeCounterByValue(20)
    dispatch(actionObj)
  }

  return (
    <div className="mt-5">
      <h1 className="text-center">{counter}</h1>
      <button className="btn btn-warning" onClick={changeCounter}>Decrement</button>
      <button className="btn btn-danger" onClick={changeCounter2}>Change by a value</button>
      <ul className="nav bg-secondary fs-4  p-2 justify-content-center w-50 mx-auto">
        <li className="nav-item">
          <Link className="nav-link text-white" to="test3">
            Test3
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="test4">
            Test4
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Sample2;
