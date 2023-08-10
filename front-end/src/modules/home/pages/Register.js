import { Button, Container, FormLabel, Input, Link } from "@mui/joy";
import { H1 } from "../../../shared/widgets/H1";
import { useState } from "react";
import { API } from "../../../config/app-constants";
import { API_CLIENT } from "../../../shared/services/api_client";
import { H6 } from "../../../shared/widgets/H6";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Body1 } from "../../../shared/widgets/Body1";

export const Register = (props) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(2);

  const [values, setValues] = useState({
    userid: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API_CLIENT.post(API.USER.REGISTER, {
      userid: values.userid,
      password: values.password,
    })
      .then((res) => {
        if (res.data.status == 1) {
          navigate("/");
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const printRegisterStatus = () => {
    var text = "";
    switch (status) {
      case 0:
        text = "Couldn't Register";
        break;
      case 1:
        text = "Registered";
        break;
      case 2:
        text = " ";
        break;
      default:
    }
    return <Body1>{text}</Body1>;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <H1>Register</H1>
        <FormLabel> User ID </FormLabel>
        <Input
          placeholder="User ID"
          name="userid"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <FormLabel> Password </FormLabel>
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">Submit</Button>
        <br />
        {printRegisterStatus()}
        <br />
        <H6>Have a account</H6>
        <Link component={RouterLink} to="/">
          Login
        </Link>
      </form>
    </Container>
  );
};
