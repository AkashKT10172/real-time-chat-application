import { VStack, Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";
import React, { useState } from "react";
import { toaster } from "../ui/toaster";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("password");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShow((prevShow) => !prevShow); // Toggle state
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };
  const postDetails = (file) => {
    setLoading(true);
    if (!file) {
      console.error("No file selected");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET); // Access upload preset from .env
    data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME); // Access cloud name from .env

    const cloudinaryUrl = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

    fetch(cloudinaryUrl, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data);
        setPic(data.url); // Set the uploaded image URL
        toaster.create({
          title: `Image Uploaded Successfully`,
          type: "success",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Upload failed:", err);
        toaster.create({
          title: `Failed to upload Image`,
          type: "error",
        });
        setLoading(false);
      });
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword || !pic) {
      toaster.create({
        title: "Please Fill All the fields!",
        type: "error",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toaster.create({
        title: "Passwords do not Match!",
        type: "error",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      toaster.create({
        title: `Sign-Up successful`,
        type: "success",
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate('/chats');
    } catch (error) {
      console.log(error.response.data.message);
      toaster.create({
        title: "Failed to create User!",
        type: "error",
      });
      setLoading(false);
    }
    

    // Reset fields after form submission
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPic("");
    alert("Singup Done!");
  };

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
      {loading ? (
        <Button
          colorScheme="teal"
          width="100%"
          color="white"
          border="2px solid teal.600"
          borderRadius="md"
          bg="teal.600"
          _selected={{ bg: "teal.700", boxShadow: "md" }}
          style={{ marginTop: 15, cursor: "default" }}
        >
          Please Wait...
        </Button>
      ) : (
        <Button
          colorScheme="teal"
          width="100%"
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
      )}
    </VStack>
  );
};

export default Signup;
