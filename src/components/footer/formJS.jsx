import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import tw from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { API_KEY } from "../../assets/emailjsKey";

export function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

//   const API_KEY = process.env.API_KEY;

  function sendEmail(e) {
    e.preventDefault();
    const statusMessage = document.querySelector(".status-message");

    emailjs.sendForm("gmail", "template_if9z5ob", e.target, API_KEY).then(
      (result) => {
        console.log(result.text);
        setStatusMessage("Message sent sucessfully!");
        statusMessage.className =
          "status-message text-green-500 text-opacity-0 self-center";
        setTimeout(() => {
          statusMessage.className = "status-message text-opacity-100";
        }, 1000);
      },
      (error) => {
        console.log(error.text);
        setStatusMessage("Failed to send message! Try again.");
        statusMessage.className =
          "status message text-red-500 text-opacity-0 self-center";
        setTimeout(() => {
          statusMessage.className = "status-message text-opacity-100";
        }, 1000);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <FormContainer>
      <EmailSend className="status-message">{statusMessage}</EmailSend>
      <form id="contact-form" onSubmit={sendEmail}>
        {/* <form> */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <SubmitButton type="submit">
          <FontAwesomeIcon icon={faEnvelope} />
        </SubmitButton>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    w-3/5
    text-xs
  `}

  form {
    ${tw`
      flex
      flex-col
    `}
  }

  input {
    ${tw`
      w-full 
      h-10 
      rounded-sm 
      p-2
      m-1
      bg-gray-600
    `}
  }

  textarea {
    ${tw`
      w-full
      rounded-sm
      p-2
      m-1
      bg-gray-600
    `}
  }
`;

const SubmitButton = styled.button`
  ${tw`
    w-1/3 
    py-1
    m-1 
    rounded-sm 
    bg-gray-600
    self-center
    text-lg
  `}
`;

const EmailSend = styled.p`
  ${tw`
    text-opacity-100
    self-center
  `}
`;
