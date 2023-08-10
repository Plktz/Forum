import { H6 } from "../../../shared/widgets/H6";
import { Body1 } from "../../../shared/widgets/Body1";
import { useEffect, useState } from "react";
import { API_CLIENT } from "../../../shared/services/api_client";
import { API } from "../../../config/app-constants";
import { Box, Container, Typography } from "@mui/joy";

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    const getComment = async () => {
      const promise = await API_CLIENT.post(API.COMMENT.READ, {
        commentId: commentId,
      });
      return promise;
    };
    const promise = getComment();
    promise
      .then((result) => {
        setComment(result.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [commentId]);

  return (
    <Container sx={{ bgcolor: "#cfe8fc", border: "solid" }}>
      <Body1>{comment?.user?.userid}:</Body1>
      <Typography level="h4">{comment.text}</Typography>
    </Container>
  );
};
