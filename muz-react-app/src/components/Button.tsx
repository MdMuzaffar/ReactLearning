interface Props {
  children: String;
  onClick: () => void;
}

const Button = ({ text }: { text: String }) => {
  if (!text) {
    text = "Submit";
  }
  return <button className="btn btn-primary">{text}</button>;
};

export default Button;
