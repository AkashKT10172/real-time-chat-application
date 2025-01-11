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
        border="2px solid blue.500"
        borderRadius="md"
        bg="blue.500"
        color="white"
        _hover={{ bg: "blue.600" }}
        _selected={{ bg: "blue.700", boxShadow: "md" }}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Log-In
      </Button>
      <Button
        colorScheme="black"
        width="100%"
        backgroundColor="black"
        border="2px solid red.500"
        borderRadius="md"
        bg="red.500"
        color="white"
        _hover={{ bg: "red.600" }}
        _selected={{ bg: "red.700", boxShadow: "md" }}
        style={{ marginTop: 0 }}
        onClick={guestHandler}
      >
        Guest User?
      </Button>
    </VStack>
  );
};

export default Login;
