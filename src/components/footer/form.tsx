import React from "react";
// import emailjs from "emailjs-com";
import styled from "styled-components";
import tw from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function FormComponent() {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "gmail",
  //       "template_if9z5ob",
  //       e.target,
  //       process.env.REACT_APP_EMAILJS_KEY
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <FormContainer>
      {/* <form onSubmit={sendEmail}> */}
      <form>
        <input
          type="text"
          name="name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          name="message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
      </form>
      <SubmitButton type="submit">
        <FontAwesomeIcon icon={faEnvelope} />
      </SubmitButton>
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