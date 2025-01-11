import { VStack, Input, Button } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");
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
  const postDetails = () => {};
  const submitHandler = () => {};
  return (
    <VStack spacing="5px" color="black">
      <Field label="Name" errorText="This field is required">
        <Input
          placeholder="Enter Your Name"
          required
          width="100%"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Field>
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
      <Field label="Confirm Password" errorText="This field is required">
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
            placeholder="Confirm Password"
            required
            width="100%"
            type={pass}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </InputGroup>
      </Field>
      <Field label="Upload A Picture" errorText="This field is required">
        <Input
          type="file"
          required
          width="100%"
          p={1.5}
          accept="image/**"
          onChange={(e) => {
            postDetails(e.target.files[0]);
          }}
        />
      </Field>
      <Button
        colorScheme="black"
        width="100%"
        backgroundColor="black"
        color="white"
        border="2px solid teal.600"
        borderRadius="md"
        bg="teal.500"
        _hover={{ bg: "teal.600" }}
        _selected={{ bg: "teal.700", boxShadow: "md" }}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign-Up
      </Button>
    </VStack>
  );
};

export default Signup;
