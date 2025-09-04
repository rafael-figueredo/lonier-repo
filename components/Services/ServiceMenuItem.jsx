export default function ServiceMenuItem(props) {
  return (
    <div
      className="relative rounded shadow-lg flex justify-center w-148 h-109 bg-cover sm:w-screen"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dyj6lkekg/image/upload/tete/${props.background}.png)`,
      }}
    >
      <p className="absolute bg-white px-10 py-2.5 bottom-0 justify-center border border-primary-300 box-border text-2xl leading-7 text-primary-700">{props.service}</p>
    </div>
  );
}
