import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_CLIENT } from "../../../shared/services/api_client";
import { API } from "../../../config/app-constants";
import { H6 } from "../../../shared/widgets/H6";
import { AddComment } from "../components/AddComment";
import { Button, Container, Stack, Typography } from "@mui/joy";
import { Comment } from "../components/Comment";


export const Discussion = (props) => {
  const { discussionid } = useParams();
  const [values, setValues] = useState({});
  const [render, setRender] = useState(0);
  const [discussion, setDiscussion] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getDiscussion();
  },[]);

  const getDiscussion = () => {
    const result = API_CLIENT.post(API.DISCUSSION.READ, {
      discussionId: discussionid,
    }).then((res) => {
      setComments(res.data.comments);
      setDiscussion(res.data);
    }).catch((e) => {
      console.log(e);
    })
    return result;
  };
  
  const forceRender = () => {
    getDiscussion();
  }

  return (
    <Container>
      <Typography level = "h1">{discussion.title}</Typography>
      <br/>
      <AddComment discussionid = {discussionid} forceRender = {forceRender}/>
      <br/>
      <Stack>
        <p></p>
        {comments.map((item,index) => {
          return (
            <Comment commentId = {item} key = {item}/>
          );
        })}
      </Stack>
    </Container>
  );
};
