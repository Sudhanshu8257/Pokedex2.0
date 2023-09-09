import React, { useEffect } from "react";
import {
  useTheme,
  useMediaQuery,
  Button,
  CircularProgress,
} from "@mui/material";
import { auth } from "../../firebase";
import {
  useSendEmailVerification,
  useDeleteUser,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import classes from "../css/Authentication.module.css";
import { toast } from "react-toastify";

const Verification = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const [deleteUser] = useDeleteUser(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.emailVerified) {
      navigate("/");
    } else if (user && !user.emailVerified) {
      const interval = setInterval(() => {
        user
          ?.reload()
          .then(() => {
            if (user?.emailVerified) {
              clearInterval(interval);
              navigate("/auth/signup");
            }
          })
          .catch((err) => {
            if (err.code === "auth/user-token-expired") {
              clearInterval(interval);
              navigate("/auth/signup");
            } else {
              toast.error(err);
            }
          });
      }, 1000);
    } else {
      navigate("/auth/signup");
    }
  }, [navigate, user]);

  const handleCancel = async () => {
    const success = await deleteUser();
    if (success) {
      toast.info("You have been deleted");
      navigate("/auth/signup");
    }
  };

  return (
    <div className={classes.VerificationSubContainer}>
      {sending || loading ? (
        <CircularProgress sx={{ color: "#080808" }} size={50} thickness={5} />
      ) : (
        <>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={async () => {
              const success = await sendEmailVerification();
              if (success) {
                toast.success("Email sent");
              }
            }}
            sx={{
              backgroundColor: "#EE4037",
              "&:hover": { backgroundColor: "#B33118" },
              borderRadius: "25px",
              height: "60px",
              textTransform: "none",
              fontFamily: "inter",
              fontWeight: "900",
              fontSize: isMobile ? "24px" : "26px",
            }}
          >
            Send Mail
          </Button>
          <Button
            variant="outlined"
            fullWidth
            type="button"
            onClick={handleCancel}
            sx={{
              borderRadius: "25px",
              height: "60px",
              border: "3px solid black",
              fontFamily: "inter",
              fontSize: isMobile ? "20px" : "24px",
              textTransform: "none",
              color: "black",
              fontWeight: 600,
              "&:hover": { border: "3px solid black" },
            }}
          >
            Cancel
          </Button>
        </>
      )}
    </div>
  );
};

export default Verification;
