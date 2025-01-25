import React from "react";
import App from "next/app";
import Navbar from "./Component/Navbar";
import Herosection from "./Component/Herosection";
import Text from "./Component/Text";
import Mission from "./Component/Mission";
import Meet from "./Component/Meet";
import ClientTestional from "./Component/Client";
import Linked from "./Component/Linked";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Text />
      <Mission />
      <Meet />
      <ClientTestional />
      <Linked />
      <Footer />
    </>
  );
}
