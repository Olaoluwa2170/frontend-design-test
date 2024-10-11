import DefaultWidth from "./tools/DefaultWidth";

const Footer = () => {
  return (
    <section className="h-screen bg-[#0F0D1D] py-[6.25rem]">
      <DefaultWidth className="flex items-start justify-center max-w-[90vw] gap-10">
        <div className="space-y-10">
          <img
            src="./Endeavor.png"
            className="w-[80px] object-contain"
            alt=""
          />
          <div className="space-y-10">
            <p className="max-w-[23.125rem] text-lg text-white">
              Welcome to our consultancy agency. Lore ipsum simply text amet
              cing elit simply text amet cing elit.
            </p>
            <div className="h-[1px] bg-primary-100 w-[467px]">
              <ul className="text-lg text-primary-100">
                <li>
                  <img src="" className="" alt="" />
                  +92 666 888 0000
                </li>
                <li>
                  <img src="" className="" alt="" />
                  needhelp@company.com
                </li>
                <li>
                  <img src="" className="" alt="" />
                  66 Broklyn Street New York, USA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-20">
          <p className="text-gray-50 text-xl font-bold">EXPLORE</p>
          <div className="flex gap-10">
            <div>
              <ul className="space-y-10 text-lg text-primary-100 font-bold">
                <li>About</li>
                <li>Meet our Team</li>
                <li>Case Studies</li>
                <li>Latest News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-10 text-lg text-primary-100 font-bold">
                <li>Support</li>
                <li>Terms of Use</li>
                <li>Privacy & Policy</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-20"> 
          <p className="text-gray-50 text-xl font-bold">NEWSLETTER</p>
          <div className="w-[591px] h-[205px] bg-[#06050C] gap-10 flex flex-col pl-12 .items-center justify-center">
            <p className="text-lg text-primary-100 w-[352px] text-left">
              Subscribe for latest articles and resources
            </p>
            <div className="w-[454px] flex justify-around items-center bg-white h-[65px]">
              <p className="text-sm text-primary-100 font-bold">Email address</p>
              <div className="py-3 px-5 bg-[#3C72FC] text-white font-bold hover:scale-110 duration-300 cursor-pointer w-fit">
                REGISTER
              </div>
            </div>
          </div>
        </div>
      </DefaultWidth>
    </section>
  );
};

export default Footer;
