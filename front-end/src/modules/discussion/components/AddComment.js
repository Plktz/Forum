import { Button, Input } from "@mui/joy";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../config/app-constants";
import { API_CLIENT } from "../../../shared/services/api_client";
import { Token } from "../../../shared/services/Token";

export const AddComment = (props) => {
  const [values, setValues] = useState();
  const discussionid = props.discussionid;

  const addComment = (e) => {
    e.preventDefault();
    const result = API_CLIENT.post(API.COMMENT.ADD, {
      text: values.addComment,
      userId: Token.getToken(),
      discussionId: discussionid,
    })
      .then((res) => {
        console.log(values.addComment);
        e.target.reset();
        setValues({});
        props.forceRender();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <form onSubmit={(e) => addComment(e)}>
      <Input
        name="addComment"
        placeholder="Type in here"
        onChange={(e) => setValues({ ...e, [e.target.name]: e.target.value })}
        endDecorator={<Button type="submit">ADD</Button>}
      ></Input>
    </form>
  );
};
