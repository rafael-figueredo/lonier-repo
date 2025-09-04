export default function Giftcard(props) {
  return (
    <div
      className={`${props.position ? "fixed" : "absolute"} bg-white rounded-xl top-75 right-0`}
    >
      <a href="https://swipeit.com/product/1218/studio-lonier">
        <picture>
          <source type="image/webp" srcSet="giftcard.webp" />
          <source type="image/png" srcSet="giftcard.png" />
          <img
            src="giftcard.png"
            className="w-10 hidden lg:block hover:opacity-75"
            alt="Gift cards"
          />
        </picture>
      </a>
    </div>
  );
}
