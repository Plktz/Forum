import { Box, Card, Container, Typography } from "@mui/joy";
import { H6 } from "../../../shared/widgets/H6";
import { Body1 } from "../../../shared/widgets/Body1";
import { useNavigate } from "react-router-dom";

export const DiscussionTitle = (props) => {
  const navigate = useNavigate();

  return (

    <Card onClick={(e) => navigate(`/discussion/${props.id}`)} variant="soft">
      <Typography level="h6" color = "primary">{props.user.userid}</Typography>
      <Typography level="h4">{props.title}</Typography>
    </Card>
  );
};
