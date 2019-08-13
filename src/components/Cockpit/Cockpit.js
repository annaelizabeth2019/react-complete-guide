import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
// import AuthContext from "../../context/auth-context"

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);
  let btnClass = "";
  if (props.showPersons) btnClass = classes.Red;
  let assignedClasses = [];
  if (props.persons <= 2) assignedClasses.push(classes.red);
  if (props.persons <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} ref={toggleBtnRef} onClick={props.clicked}>
        Toggle Names!
      </button>
      <button onClick={props.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
