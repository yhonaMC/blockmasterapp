import { makeStyles, alpha } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navbarColor: {
    background: "#373b69",
  },
  title: {
    flexGrow: 1,
    display: "block",
    color: "#FED941",
  },

  secondTitle: {
    textDecoration: "none",
    flexGrow: 1,
    color: "white",
    fontFamily: "Arial",

    "&:hover": {
      color: "#FED941",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
