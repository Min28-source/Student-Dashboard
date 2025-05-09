import { useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function ErrorPage() {
  const navigate = useNavigate()
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Button
            onClick={() => navigate("/")}
            sx={{ color: "gray", fontSize: "0.875rem" }}
          >
            ← Back to dashboard
          </Button>
        </div>
      </div>
    </>
  );
}
