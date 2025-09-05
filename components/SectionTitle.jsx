import Link from "next/link";
import { useRouter } from "next/router";
export default function SectionTitle(props) {
  const router = useRouter();
  return (
    <div className="relative">
      <h1 className="font-bold text-center text-primary-500 text-2xl pt-10 mb-5 mt-7">
        {props.title}
      </h1>
      {/* conditional rendering of "Back to services button" */}
      <Link
        scroll={false}
        href={{
          pathname: "/",
          query: { id: "services" },
        }}
        className={`text-primary-500 font-light italic underline inline-block absolute bottom-0 cursor-pointer text-base ${
          props.showLink ? "inline-block" : "hidden"
        }`}
      >
        <img
          src="left.png"
          className="w-3 inline-block mr-2 sm:mr-2 sm:ml-0 sm:mb-0 sm:w-3 md:mr-2 md:ml-0 md:mb-0 md:w-3"
          alt="Voltar aos serviços"
        />
        <span className="sm:hidden md:inline">Voltar aos serviços</span>
      </Link>
    </div>
  );
}
