import React from "react";
import {Link, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Sample1() {

 let {counter}= useSelector(state=>state.counter)


  return (
    <div className="mt-5">
      <h1 className='text-center'>{counter}</h1>
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
