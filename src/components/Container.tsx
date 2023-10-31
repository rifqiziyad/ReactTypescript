type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quis!
    </div>
  );
};

export default Container;
