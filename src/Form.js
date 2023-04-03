import React, { useEffect, useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  // console.log(inputData);

  // function of onchange
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  // useEffect hook
  useEffect(() => {
    // console.log("Registered");
  }, [flag]);

  // function of form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields Are Mandotary!.");
    } else {
      setFlag(true);
    }
  }
  // component Return
  return (
    <>
      <pre>
        {/* ternary operator using for condtion checking */}
        {flag ? (
          <h2 className="ui-define">
            Hey!{inputData.name} Your Registeration Successfuly!
          </h2>
        ) : (
          ""
        )}
      </pre>
      {/* Form */}
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="header">Register Form</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Enter Your Name"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        {/* button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Form;
