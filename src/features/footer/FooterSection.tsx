import Links from "../home/Links";
import FooterConnect from "./FooterConnect";
import FooterDate from "./FooterDate";

const FooterSection = () => {
  return (
    <div className=" flex flex-col w-full justify-center items-center ">
      <h2 className="mb-16 text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Ram.Dev
      </h2>
      <div className="md:flex flex-col items-center">
        <FooterConnect />
        <Links gap="4" withLabel="true" />
      </div>

      <FooterDate />
    </div>
  );
};

export default FooterSection;
