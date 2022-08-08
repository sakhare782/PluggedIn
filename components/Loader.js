import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://rb.gy/pauhpu"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
        <ThreeBounce size={23} color="#7A86B6" />
      </div>
    </div>
  );
}

export default Loader;