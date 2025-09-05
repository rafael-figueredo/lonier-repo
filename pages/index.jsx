import React from "react";
import Hero from "../components/Hero";
import Differentials from "../components/Differentials";
import StudioServices from "../components/Services/StudioServices";
import Layout from "../components/Layout/Layout";
import ScrollButton from "../components/ScrollButton";
import smoothscroll from "smoothscroll-polyfill";
import { useRouter } from "next/router";
import Giftcard from "@/components/Layout/Giftcard";
import useDocumentScrollThrottled from "@/components/Hooks/useDocumentScrollThrottled";

export default function Home() {
  const [giftcardFixed, setGiftcardFixed] = React.useState(false);

  const router = useRouter();
  const { id } = router.query;
  const scroll = (tag) => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setGiftcardFixed(currentScrollTop > 600);
  });
  return (
    <Layout>
      <Hero />
      <div className="content relative">
        <Differentials />
        <StudioServices />
        <Giftcard position={giftcardFixed} />
      </div>
      <ScrollButton />
    </Layout>
  );
}
