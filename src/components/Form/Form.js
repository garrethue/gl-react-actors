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
