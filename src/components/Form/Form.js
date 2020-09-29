import React, { Fragment, useState } from "react";

const Form = () => {
  //description is the internal state and setDescription is our custom named setState() method that will change the state of it
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bestImpression, setBestImpression] = useState("");
  //create onSubmitForm
  const onSubmitForm = async (event) => {
    event.preventDefault();

    // try {
    //     const body = { description }; //create an objcet with property description
    //     const response = await fetch("http://localhost:5000/todos", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(body),
    //     }); //by default fetch makes a GET request
    //     window.location = "/"; //not sure what this will do!
    // } catch (err) {
    //     console.error(err.message);
    // }
  };

  return (
    <Fragment>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          className="form-control last-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
          className="form-control best-impression"
          value={bestImpression}
          onChange={(event) => setBestImpression(event.target.value)}
        />
        <button className="btn btn-success">Join us!</button>
      </form>
    </Fragment>
  );
};

export default Form;

//Notes: className="d-flex" in form tag puts the form together
