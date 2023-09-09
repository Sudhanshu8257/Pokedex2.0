import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  SwipeableDrawer,
  Button,
  List,
  ListItemText,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { BorderAllRounded } from "@mui/icons-material";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({ right: false });
  const fontprops = {
    fontSize: "20px",
    fontFamily: "poppins",
    color: "#080808",
    fontWeight: 700,
  };
  const fontprops1 = {
    fontSize: "20px",
    fontFamily: "poppins",
    color: "#F5F5F5",
    fontWeight: 700,
  };
  const fontprops2 = {
    fontSize: "20px",
    fontFamily: "poppins",
    color: "#EE4037",
    fontWeight: 700,
  };
  const iconprops = { fontSize: "30px", color: "#080808" };
  const [user] = useAuthState(auth);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        fontSize: "24px",
        padding: "20px",
        backgroundColor: "#080808",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            to="/"
            component={Link}
            sx={{
              "&:hover, &:focus": { backgroundColor: "#DCDCDC" },
              backgroundColor: "#F5F5F5",
              borderRadius: "15px",
            }}
          >
            <ListItemIcon>{<HomeIcon sx={iconprops} />}</ListItemIcon>
            <ListItemText primary={"Home"} primaryTypographyProps={fontprops} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            to="/favorites"
            component={Link}
            sx={{
              "&:hover, &:focus": { backgroundColor: "#DCDCDC" },
              backgroundColor: "#F5F5F5",
              borderRadius: "15px",
              mt: "10px",
            }}
          >
            <ListItemIcon>
              {<FavoriteBorderRoundedIcon sx={iconprops} />}
            </ListItemIcon>
            <ListItemText
              primary={"Favorites"}
              primaryTypographyProps={fontprops}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            to="/contact"
            component={Link}
            sx={{
              "&:hover, &:focus": { backgroundColor: "#DCDCDC" },
              backgroundColor: "#F5F5F5",
              borderRadius: "15px",
              mt: "10px",
            }}
          >
            <ListItemIcon>{<CallRoundedIcon sx={iconprops} />}</ListItemIcon>
            <ListItemText
              primary={"Contact"}
              primaryTypographyProps={fontprops}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            to="/trivia"
            component={Link}
            sx={{
              "&:hover, &:focus": { backgroundColor: "#DCDCDC" },
              backgroundColor: "#F5F5F5",
              borderRadius: "15px",
              mt: "10px",
            }}
          >
            <ListItemIcon>
              {<HelpCenterRoundedIcon sx={iconprops} />}
            </ListItemIcon>
            <ListItemText
              primary={"Trivia"}
              primaryTypographyProps={fontprops}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        {user && (
          <ListItem disablePadding>
            <ListItemButton
              to="/account"
              component={Link}
              sx={{
                "&:hover, &:focus": { backgroundColor: "#DCDCDC" },
                backgroundColor: "#F5F5F5",
                borderRadius: "15px",
                mt: "10px",
              }}
            >
              <ListItemIcon>
                {<AccountCircleRoundedIcon sx={iconprops} />}
              </ListItemIcon>
              <ListItemText
                primary={"Account"}
                primaryTypographyProps={fontprops}
              />
            </ListItemButton>
          </ListItem>
        )}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            to="/search"
            component={Link}
            sx={{
              "&:hover, &:focus": { backgroundColor: "#DCDCDC" },
              backgroundColor: "white",
              borderRadius: "15px",
              mt: "10px",
            }}
          >
            <ListItemIcon>{<SearchRoundedIcon sx={iconprops} />}</ListItemIcon>
            <ListItemText
              primary={"Search"}
              primaryTypographyProps={fontprops}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      {!user && (
        <>
          <Divider
            sx={{
              backgroundColor: "#F5F5F5",
              height: "2px",
              mt: "10px",
              mb: "10px",
            }}
          />
          <ListItem disablePadding>
            <ListItemButton
              to="/auth/signup"
              component={Link}
              sx={{
                "&:hover, &:focus": { backgroundColor: "#B33118" },
                backgroundColor: "#EE4037",
                borderRadius: "15px",
                mt: "10px",
                textAlign: "center",
                color: "#F5F5F5",
              }}
            >
              <ListItemText
                primary={"Sign Up"}
                primaryTypographyProps={fontprops1}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              to="/auth/signin"
              component={Link}
              sx={{
                "&:hover, &:focus": { border: "3px solid #B33118" },
                backgroundColor: "transparent",
                borderRadius: "15px",
                mt: "10px",
                textAlign: "center",
                border: "3px solid #EE4037",
              }}
            >
              <ListItemText
                primary={"Sign In"}
                primaryTypographyProps={fontprops2}
              />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </Box>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<MenuRoundedIcon sx={{ color: "#080808", fontSize: "32px" }} />}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={BorderAllRounded}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
