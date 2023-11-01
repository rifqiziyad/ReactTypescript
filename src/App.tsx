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
import { Counter as ClassCounter } from "./components/classs/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import CustomButton from "./components/html/Button";
import CustomComponent from "./components/html/CustomComponent";
import { CustomText } from "./components/polimorphic/Text";

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
      <br />
      <br />

      <ClassCounter message="data" />
      <br />
      <br />

      <Private isLoggedIn={true} component={Profile} />
      <br />
      <br />

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <br />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <br />
      <br />

      <RandomNumber value={10} isPositive />
      <br />
      <br />

      <Toast position={"center"} />
      <br />
      <br />

      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Click Button
      </CustomButton>
      <br />
      <br />

      <CustomComponent name="Rifqi Ziyad Imtinan" isLoggedIn />
      <br />
      <br />

      <CustomText size="lg" color="primary" as="h1">
        Heading
      </CustomText>
      <CustomText as="p" id="some-id">
        Paragraf
      </CustomText>
      <CustomText as="label" htmlFor="id">
        Label
      </CustomText>
      <CustomText>Div</CustomText>
    </div>
  );
}

export default App;
