import Gallery from "@/components/hotels/details/Gallery";
import Overview from "@/components/hotels/details/Overview";
import Summary from "@/components/hotels/details/Summary";

const page = () => {
  return (
    <>
      <Summary />
      <Gallery />
      <Overview />
    </>
  );
};

export default page;
