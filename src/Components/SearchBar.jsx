import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar({ search, onChange }) {
  return (
    <Search
      sx={{
        border: "1px solid #ccc",
        borderRadius: 5,
        mt: 2,
        ml: 2,
        width: { xs: "55%", sm: "75%", md: "75%", lg: "75%" },
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        "&:hover": {
          borderColor: "black",
        },
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "gray" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        sx={{
          height: "55px",
          width: "100%",
          fontSize: "1.3rem",
        }}
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </Search>
  );
}
