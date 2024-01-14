import Image from "next/image";
import Firstimage from "@/public/First.png";
import Secondimage from "@/public/second.png";
import Thirdimage from "@/public/third.png";
import Fourthiamge from "@/public/fourth.png";

const Images = () => {
  return (
    <div className="py-[89px] ">
      <div
        className=" rounded-full w-[902px] h-[902px] shrink-0 ml-[100px] flex justify-center items-center relative "
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.00)",
        }}
      >
        <div
          className="w-[620px] h-[620px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.00)",
          }}
        >
          <Image
            src={Firstimage}
            width={332}
            height={720}
            alt="Phoneapp"
            className="absolute top-[-89px]"
          />
          <Image
            src={Secondimage}
            width={335}
            height={120}
            alt="secondphone"
            className="absolute bottom-[-89px]"
          />
          <Image
            className="absolute right-[64px] top-[80px]"
            src={Thirdimage}
            width={239}
            height={518}
            alt="phone"
          />
          <Image
            className="absolute right-[64px] bottom-[-89px]"
            src={Fourthiamge}
            width={239}
            height={518}
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
