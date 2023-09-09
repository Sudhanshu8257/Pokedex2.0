import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TriviaScores = ({ scoreTable }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const font = {
    fontSize: isMobile ? "24px" : "28px",
    fontWeight: "bold",
    fontFamily: "poppins",
  };

  return (
    <div>
      {scoreTable?.length > 0 && (
        <Box
          sx={{
            ...center,
            flexDirection: "column",
            width: "100%",
            p: !isMobile ? "0px 130px" : "0px 10px",
            pb: "10px",
          }}
        >
          <Typography sx={{ ...font, color: "#EE4037", mb: "10px" }}>
            Trivia Scores
          </Typography>
          <TableContainer
            sx={{
              backgroundColor: "rgba(15, 12, 12, 0.84)",
              width: isMobile ? "100%" : "700px",
              color: "white",
              border: "3px solid white",
              borderRadius: "25px",
              mt: "10px",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "white", ...font, fontSize: "18px" }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ color: "white", ...font, fontSize: "18px" }}>
                    Time
                  </TableCell>
                  <TableCell sx={{ color: "white", ...font, fontSize: "18px" }}>
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scoreTable.map((score, index) => {
                  const dateObj = new Date(
                    score?.date?.seconds * 1000 +
                      score?.date?.nanoseconds / 1000000
                  );
                  const dateString = dateObj?.toLocaleDateString();
                  const timeString = dateObj?.toLocaleTimeString();

                  return (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {dateString}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {timeString}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {score.score}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
};

export default TriviaScores;
