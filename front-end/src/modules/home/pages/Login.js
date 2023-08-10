import { Button, Container, FormLabel, Input, Link } from "@mui/joy";
import { H1 } from "../../../shared/widgets/H1";
import { useState } from "react";
import { API } from "../../../config/app-constants";
import { API_CLIENT } from "../../../shared/services/api_client";
import { H6 } from "../../../shared/widgets/H6";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const Login = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    userid: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();
    const res = await API_CLIENT.post(API.USER.LOGIN, {
      userid: values.userid,
      password: values.password,
    })
      .then((res) => {
        sessionStorage.setItem("token", res.data._id);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <H1>LOGIN</H1>
        <FormLabel> User ID </FormLabel>
        <Input
          placeholder="User ID"
          name="userid"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <FormLabel> Password </FormLabel>
        <Input
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">Submit</Button>
        <H6>Don't have a account</H6>
        <Link component={RouterLink} to="/register">
          Register
        </Link>
      </form>
    </Container>
  );
};
