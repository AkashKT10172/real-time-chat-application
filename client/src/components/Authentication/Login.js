import { VStack, Input, Button } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("password");

  const handleShow = () => {
    setShow((prevShow) => !prevShow); // Toggle state
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const submitHandler = () => {
    alert("Hello");
  };
  const guestHandler = () => {
    setEmail("guest@gmail.com");
    setPass("12345678");
    submitHandler();
  }
  return (
    <VStack spacing="5px" color="black">
      <Field label="Email Address" errorText="This field is required">
        <Input
          placeholder="Enter Your Email Address"
          required
          width="100%"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Field>
      <Field label="Password" errorText="This field is required">
        <InputGroup
          width="100%"
          endElement={
            <p
              onClick={handleShow}
              style={{ cursor: "pointer", color: "Black", margin: 0 }}
            >
              {show ? "Hide" : "Show"}
            </p>
          }
        >
          <Input
            placeholder="Enter Password"
            required
            width="100%"
            type={pass}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputGroup>
      </Field>
      <Button
        colorScheme="black"
        width="100%"
        backgroundColor="black"
        color="white"
        border="2px solid black"
        borderRadius="md"
        _hover={{
          backgroundColor: "gray.800", // Darker shade on hover
          borderColor: "gray.800", // Darker border color on hover
        }}
        _active={{
          backgroundColor: "gray.900", // Even darker shade when active
          borderColor: "gray.900", // Darker border color when active
        }}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Log-In
      </Button>
      <Button
        colorScheme="black"
        width="100%"
        backgroundColor="black"
        color="white"
        border="2px solid black"
        borderRadius="md"
        _hover={{
          backgroundColor: "gray.800", // Darker shade on hover
          borderColor: "gray.800", // Darker border color on hover
        }}
        _active={{
          backgroundColor: "gray.900", // Even darker shade when active
          borderColor: "gray.900", // Darker border color when active
        }}
        style={{ marginTop: 0 }}
        onClick={guestHandler}
      >
        Guest User?
      </Button>
    </VStack>
  );
};

export default Login;
