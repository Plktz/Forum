import { Button, Container, Input, Stack, Typography } from "@mui/joy";
import { API_CLIENT } from "../../../shared/services/api_client";
import { API } from "../../../config/app-constants";
import { useEffect, useLayoutEffect, useState } from "react";
import { H1 } from "../../../shared/widgets/H1";
import { Token } from "../../../shared/services/Token";
import { DiscussionTitle } from "../components/DiscussionTitle";

export const Home = (props) => {
  const [discussions, setDiscussions] = useState([]);
  const [values, setValues] = useState({});

  useEffect(() => {
    getDiscussion();
  }, []);

  const getDiscussion = async () => {
    const result = await API_CLIENT.post(API.DISCUSSION.READRECENT, {
      limit: 10,
    })
      .then((result) => {
        setDiscussions(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  const forceRender = () => {
    getDiscussion();
  }

  const createDiscussion = (e) => {
    e.preventDefault();
    const result = API_CLIENT.post(API.DISCUSSION.CREATE, {
      title: values.createDiscussion,
      user: Token.getToken(),
    })
      .then((res) => {
        e.target.reset();
        setValues({});
        forceRender();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <Typography level = "h1">Topics</Typography>
      <form onSubmit={(e) => createDiscussion(e)}>
        <Input
          name="createDiscussion"
          placeholder="Type in here"
          onChange={(e) => setValues({ ...e, [e.target.name]: e.target.value })}
          endDecorator={<Button type="submit">Create</Button>}
        ></Input>
      </form>
     <br/>
      <Stack>
        {discussions.map((item) => {
          return(
            <div>
            <DiscussionTitle user = {item.user} title = {item.title} key = {item._id} id = {item._id} />
            </div>
          )
        })}
      </Stack>
    </Container>
  );
};
