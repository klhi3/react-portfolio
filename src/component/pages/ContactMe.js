import React, { useState } from 'react';
import '../../styles/ContactMe.css';


// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';


export default function ContactMe() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // TODO: Create a password variable and a function "setPassword" using useState
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    }   
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Fill out email and username please!');
    } else if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
    } else {
      alert(`Hello ${userName}`);
    }

    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setPassword('');
    setEmail('');
  };

  return (
    <div className="container-fluid">
    <div className="conatiner mt-3">
      <h2>Contact {userName}</h2>

            <form className="form">

                  <div className="mb-3">
                    <label for="userName" class="form-label">
                      name:
                    </label>
                    <input
                      value={userName}
                      name="userName"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="name:"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="email" class="form-label">
                      email address:
                    </label>
                    <input
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                  </div>

                    {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
                    {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
                    {/* <input
                      value={password}
                      name="password"
                      onChange={handleInputChange}
                      type="password"
                      placeholder="password"
                    /> */}

                  <div className="col-12">
                    <button onClick={handleFormSubmit}>Submit</button>
                  </div>

            </form>

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
  </div>
  </div>
  );
}
