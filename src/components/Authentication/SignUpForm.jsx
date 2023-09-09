import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import classes from "../css/Authentication.module.css";
import { dividerStyles, buttonStyles1 } from "../css/Styles";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import GoogleButton from "./GoogleButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

const SignUpForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [createUserWithEmailAndPassword, userr, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.emailVerified) {
      navigate("/auth/verification");
    }
    if (user && user.emailVerified) {
      setDoc(doc(db, "users", user.email), {
        favs: [],
        scores: [],
      });
      navigate("/");
    }
  }, [user, navigate]);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    validatePassword(value);
  };

  const validateEmail = (value) => {
    const newErrors = { ...errors };

    if (!value) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = "Invalid email address";
    } else {
      delete newErrors.email;
    }

    setErrors(newErrors);
  };

  const validatePassword = (value) => {
    const newErrors = { ...errors };

    if (!value) {
      newErrors.password = "Password is required";
    } else if (value.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else {
      delete newErrors.password;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (error) {
    const errorMessage = error.message;
    const startIndex = errorMessage.indexOf("/") + 1;
    const endIndex = errorMessage.indexOf(")");
    if (startIndex !== -1 && endIndex !== -1) {
      const modifiedErrorMessage = errorMessage.substring(startIndex, endIndex);
      toast.error(modifiedErrorMessage);
    }
  }

  return (
    <div className={classes.SignUpFormContainer}>
      {loading ? (
        <CircularProgress sx={{ color: "#080808" }} size={50} thickness={5} />
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className={classes.SignUpSubContainer}
        >
          <EmailInput
            email={email}
            handleEmailChange={handleEmailChange}
            errors={errors}
          />
          <PasswordInput
            password={password}
            handlePasswordChange={handlePasswordChange}
            errors={errors}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              ...buttonStyles1,
              fontSize: isMobile ? "24px" : "26px",
            }}
          >
            Sign Up
          </Button>

          <Divider sx={dividerStyles}>OR</Divider>

          <GoogleButton />
          <span
            className={classes.SignUpHeading3}
            style={{ fontSize: isMobile && "18px" }}
          >
            Already have an account?{" "}
            <Link to="/auth/signin" style={{ textDecoration: "none" }}>
              <span style={{ color: "#EE4037" }}>SignIn</span>
            </Link>
          </span>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;
