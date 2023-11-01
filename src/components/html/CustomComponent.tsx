// Extracting a component prop type

import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};

export default CustomComponent;
