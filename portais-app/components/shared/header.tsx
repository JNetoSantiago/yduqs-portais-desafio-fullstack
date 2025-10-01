import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/logo.svg"
            width={158.33}
            height={40}
            alt="Picture of the author"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
