import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import LoggedIn from "./components/state/LoggedIn";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import MutableRef from "./components/ref/MutableRef";

function App() {
  const personName = {
    first: "rifqi",
    last: "ziyad imtinan",
  };

  const nameList = [
    {
      first: "Rifqi",
      last: "Ziyad",
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
  ];

  return (
    <div className="App">
      <Greet name="Rifqi" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Lorem, ipsum dolor.</Heading>
      </Oscar>
      <Greet name="Rifqi" isLoggedIn={true} />

      <Input value="" handleChange={(event) => console.log(event)} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <br />
      <Container
        styles={{ border: "black solid 1px", padding: "1rem", display: "flex" }}
      />

      <br />

      <LoggedIn />
      <br />

      <Counter />
      <br />
      <br />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br />

      <UserContextProvider>
        <User />
      </UserContextProvider>
      <br />
      <br />

      <MutableRef />
    </div>
  );
}

export default App;
