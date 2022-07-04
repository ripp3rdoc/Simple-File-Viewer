import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import File from "./File";
import Folder from "./Folder";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../img/folder.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Welcome to File Viewer!
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Folder name="Desktop">
        <File name="Rickroll.mp4" />
      </Folder>
      <Folder name="Home">
        <File name="dogs.jpeg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Music">
        <File name="History Repeats.mp3" />
        <File name="Bloodfest.flac" />
      </Folder>
      <Folder name="Applications">
        <File name="Books.txt" />
      </Folder>
    </Container>
  );
}

export default App;
