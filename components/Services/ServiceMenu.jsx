import Service from "./ServiceMenuItem";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import Hairdreams from "./Hairdreams";
export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <Hairdreams />
    </div>
  );
}
