import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { counterActions } from "../../store/counter-slice";
import { useTheme, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
  fontFamily: "inter",
});

function padInteger(number) {
  const originalLength = number.toString().length;
  const paddedNumber =
    originalLength < 4 ? "0".repeat(4 - originalLength) + number : number;
  return paddedNumber;
}

export default function UsePagination() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const handleChangePage = (page) => {
    dispatch(counterActions.setCounter(page));
  };

  const { items } = usePagination({
    count: 1010,
    page: counter,
    onChange: (event, page) => handleChangePage(page),
    siblingCount: isMobile ? 0 : 1,
  });

  return (
    <nav style={{ width: "100%", height: "100%" }}>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                onClick={() => handleChangePage(page)}
                style={{
                  fontWeight: 800,
                  border: "none",
                  fontSize: isMobile
                    ? selected
                      ? "20px"
                      : "16px"
                    : selected
                    ? "32px"
                    : "24px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  textAlign: "center",
                  color: selected ? "#080808" : "#0808087c",
                  fontFamily: "inter",
                }}
                {...item}
              >
                #{padInteger(page)}
              </button>
            );
          }

          return (
            <li style={{ color: "#0808087c" }} key={index}>
              {children}
            </li>
          );
        })}
      </List>
    </nav>
  );
}
