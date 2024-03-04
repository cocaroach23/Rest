import "../Button/index.css";

function Button(props) {
  const { title, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="style-button mx-10 rounded-lg text-xxl text-black px-4 py-2 shadow-md"
    >
      {title}
    </button>
  );
}

export default Button;
