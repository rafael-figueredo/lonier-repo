export default function Refferal(props) {
  return (
    <div>
      <p
        style={{ left: "54%" }}
        className={`font-bold text-black pt-6 pb-6 ${
          props.mobile ? "text-center" : "absolute bottom-0"
        }`}
      >
        Indique uma amiga e ganhe um vale-presente de R$ 75!
      </p>
    </div>
  );
}
