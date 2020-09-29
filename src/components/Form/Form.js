import React, { Fragment, useState } from "react";

const Form = () => {
  //description is the internal state and setDescription is our custom named setState() method that will change the state of it
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bestImpression, setBestImpression] = useState("");

  //create onSubmitForm
  const onSubmitForm = async (event) => {
    event.preventDefault();
    alert(`Thanks for joining us ${firstName}!`);
    setFirstName("");
    setLastName("");
    setBestImpression("");

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
      <form className="submit-form" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="first-name"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          className="last-name"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
          className="best-impression"
          value={bestImpression}
          placeholder="Best Impression"
          onChange={(event) => setBestImpression(event.target.value)}
        />
        <button>Join us!</button>
      </form>
      <p>
        {firstName !== "" &&
          lastName !== "" &&
          bestImpression !== "" &&
          `${firstName}'s best impression is ${bestImpression}`}
      </p>
    </Fragment>
  );
};

export default Form;

//Notes: className="d-flex" in form tag puts the form together
