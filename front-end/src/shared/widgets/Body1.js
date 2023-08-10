import { Typography } from "@mui/joy"

export const Body1 = (props) => {
    return (
        <Typography level = 'body1' color = "primary">{props.children}</Typography>
    )
}