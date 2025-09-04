export default function Button(props) {
  return (
    <button
      onClick={() => props.onClick()}
      type={props.type}
      className={`block hover:opacity-75 shadow-lg px-10 py-2 bg-primary-500 rounded-2xl text-white font-bold text-base ${props.className}`}
    >
      {props.children}
    </button>
  );
}
