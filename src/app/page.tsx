// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Contact />
      <Form />
      <Map />
      <Footer />
    </>
  );
}
