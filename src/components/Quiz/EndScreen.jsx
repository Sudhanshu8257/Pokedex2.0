import React from 'react'
import { Avatar, Box, Typography, Button } from '@mui/material';
import Logo from '../../UI/Logo';
import { useTheme, useMediaQuery } from '@mui/material';
import ConfettiExplosion from 'react-confetti-explosion';
import { auth, db } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import classes from '../css/Trivia.module.css'
import { arrayUnion, doc, updateDoc, Timestamp } from 'firebase/firestore';

const EndScreen = (props) => {

  const [isExploding, setIsExploding] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const font = { fontFamily: 'poppins', fontSize: isMobile ? '24px' : '34px', fontWeight: '700', color: "white" };
  const [user] = useAuthState(auth);
  const favID = doc(db, 'users', `${user?.email}`);
  const calculateScore = () => {
    let score = props.finalScores
    let count = 0;
    for (let i = 0; i < score.length; i++) {
      if (score[i]) {
        count += 20;
      }
    }
    return count;
  }
  function calculateFinalScores() {
    const correct = props.finalScores.filter((value) => value).length;
    const incorrect = props.finalScores.filter((value) => !value).length;
    return { correct, incorrect };
  }
  const { correct, incorrect } = calculateFinalScores();
  const finalScores = calculateScore();
  React.useEffect(() => {
    if (correct === 5) {
      setIsExploding(true)
    }
    if (user) {
      const sync = async () => {
        await updateDoc(favID, {
          scores: arrayUnion({
            date: Timestamp.fromDate(new Date()),
            score: finalScores
          }),
        });
      }
      sync()
    }
  }, [correct, favID, finalScores, user])

  return (
    <div className={classes.endContainer} style={{ height: isMobile && "100vh" }}>
      {isExploding && <ConfettiExplosion width={isMobile ? window.innerWidth : 8000} height={isMobile ? 1000 : 8000} duration={!isMobile ? 30000 : 10000} particleCount={isMobile ? 50 : 100} />}
      {!isMobile && <div className={classes.endLogoContainer}> <Logo font={"48px"} mfont={"48px"} /> </div>}

      <div className={classes.endDetailsContainer} style={{ background: isMobile && "linear-gradient(180deg #7028E4 0% #E5B2CA 100%)", backgroundColor: !isMobile && "black", width: isMobile ? "100%" : "45%" }}>
        {isMobile && <Logo font={"34px"} mfont={"34px"} />}

        <Avatar alt="User" src={user?.photoURL ? user?.photoURL : "/images/A.png"} sx={{ border: "3px solid white", width: "84px", height: "84px", mt: "30px" }} />
        <Typography sx={{ ...font, color: "white" }}>Final Scores</Typography>
        <Box sx={{ width: "100%", gap: "30px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            <Typography sx={{ ...font, fontSize: isMobile ? '20px' : '28px', fontWeight: '500' }}>Correct</Typography>
            <Typography sx={{ ...font, fontSize: isMobile ? '20px' : '28px', fontWeight: '500' }}>{correct}/5</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            <Typography sx={{ ...font, fontSize: isMobile ? '20px' : '28px', fontWeight: '500' }}>Incorrect</Typography>
            <Typography sx={{ ...font, fontSize: isMobile ? '20px' : '28px', fontWeight: '500' }}>{incorrect}/5</Typography>
          </Box>
        </Box>
        <Typography sx={{ ...font }}>Score: {finalScores}pts</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%", flexDirection: isMobile && "column", alignItems: isMobile && "center", gap: isMobile && "10px" }}>
          <Button variant='contained' sx={{ width: "240px", height: "50px", fontSize: isMobile ? "20px" : "24px", backgroundColor: "#002F51", borderRadius: "15px", textTransform: "none", }} onClick={props.onEnd}>Go back to Home</Button>
          <Button variant='contained' sx={{ width: "240px", height: "50px", fontSize: isMobile ? "20px" : "24px", backgroundColor: "#002F51", borderRadius: "15px", textTransform: "none", }} onClick={props.onStart}>Play Again</Button>
        </Box>
      </div>
      {isExploding && <ConfettiExplosion width={isMobile ? window.innerWidth : 8000} height={isMobile ? 1000 : 8000} duration={!isMobile ? 30000 : 10000} particleCount={isMobile ? 50 : 100} />}
    </div>
  )
}

export default EndScreen
