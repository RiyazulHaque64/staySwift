import Image from "next/image";
import HotelSummaryInfo from "./HotelSummeryInfo";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src="/images/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        alt=""
        width={400}
        height={400}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
