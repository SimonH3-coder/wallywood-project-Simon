import { useContext, useState } from "react";
import { Grid } from "../../components/Grid/Grid";
import { Input } from "../../components/Input/Input";
import { Submit } from "../../components/Submit/Submit";
import { AuthContext } from "../../context/AuthContext";

export function Kontakt() {
  const [error, setError] = useState<string | null>(null);
  const { userData, setUserData } = useContext(AuthContext);

  function postKontakt(e: React.SubmitEvent) {
    e.preventDefault();
    // Gem input values
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userMessage = e.target.message.value;

    // Lav body (URLSearchParams)
    const body = new URLSearchParams();

    // append input values til body
    body.append("name", userName);
    body.append("email", userEmail);
    body.append("message", userMessage);

    const url = "http://localhost:3000/kontaktos";

    // POST body til backend server og håndter response (success/error)
    // POST body til backend server og håndter response (success/error)
    fetch(url, { method: "POST", body: body })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setError("");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Der opstod en fejl - prøv igen");
      });
  }
  console.log("UserData: ", userData);

  return (
    <>
      {userData && (
        <b>
          Velkommen {userData.user.firstname} {userData.user.lastname}
        </b>
      )}
      {error && <b>{error}</b>}
      <form style={{ width: "30vw" }} onSubmit={(e) => postKontakt(e)}>
        <Grid gtr={3} gap={8}>
          <Input type="name" name="name" label="Name" />
          <Input type="email" name="email" label="Email" />
          <Input type="message" name="message" label="Message" />
          <Submit value="Send" />
        </Grid>
      </form>
    </>
  );
}
