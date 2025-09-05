import { useRouter } from "next/router";
import Link from "next/link";
export default function Buttons(props) {
  const router = useRouter();
  return (
    <div className="lg:mb-12">
      <a href="https://swipeit.com/product/1218/studio-lonier">
        <button
          className="shadow-lg text-white py-2 px-6 hover:opacity-75 bg-primary-500 rounded-2xl font-bold text-base mt-12 outline-none ml-80 xl:ml-80 lg:ml-60 md:ml-0"
        >
          Comprar cartão presente
        </button>
      </a>
      <Link
        scroll={false}
        href={{
          pathname: "/",
          query: { id: "services" },
        }}
      >
        <button
          className={`border border-primary-500 rounded-2xl font-bold text-base mt-12 outline-none py-2 px-3 hover:opacity-75 text-primary-500 ${
            props.mobile ? "ml-3" : "ml-24"
          }`}
        >
          Ver outros serviços
        </button>
      </Link>
    </div>
  );
}
