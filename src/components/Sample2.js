import React from "react";
import {Link,Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Sample2() {



 let {counter}= useSelector(state=>state.counter)

  return (
    <div className="mt-5">
      <h1 className="text-center">{counter}</h1>
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
