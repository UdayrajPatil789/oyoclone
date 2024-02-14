import Image from "next/image";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Header3 from "./Components/Header3";
import Header4 from "./Components/Header4";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
      <div className="my-14">
        <Image
          src={"/banner1.avif"}
          alt="banner"
          width={200}
          height={200}
          className="h-80 w-full"
        />
      </div>
      <div>
        <Image  
          src={"/banner2.avif"}
          alt="banner"
          width={200}
          height={200}
          className="h-40 w-full"
        />
      </div>
      <Header4/>
    
      </div>
      <Footer/>
    </>
  );
}
