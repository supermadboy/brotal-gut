import React from "react";
import Logo from "./images/Logo";
import SubTitle from "./typo/SubTitle";

const colors = [
  { primary: "192 129 93", secondary: "102 153 255" }, //dunkelbraun
  { primary: "197 181 154", secondary: "128, 203, 239" }, //hellbraun
  { primary: "102 153 255", secondary: "192 129 93" }, //dunkelblau
  { primary: "128, 203, 239", secondary: "197 181 154" }, //hellblau
];
const svgs = ["Bread1", "Bread2", "Bread3", "Utensil1", "Utensil2", "Utensil3"];

const randomSvg = Math.floor(Math.random() * 6);
let randomColor = Math.floor(Math.random() * 2);

if (randomSvg > 2) {
  randomColor += 2;
}

document.documentElement.style.setProperty(
  "--color-primary",
  colors[randomColor].primary
);

document.documentElement.style.setProperty(
  "--color-secondary",
  colors[randomColor].secondary
);

const LazyMobileSvg = React.lazy(() =>
  import("./images/mobile/" + svgs[randomSvg])
);
const LazyDesktopSvg = React.lazy(() =>
  import("./images/desktop/" + svgs[randomSvg])
);

export const LazySvg = () => {
  return (
    <>
      <div className="md:hidden fill-primary">
        <LazyMobileSvg />
      </div>
      <div className="hidden md:block fill-primary">
        <LazyDesktopSvg />
      </div>
    </>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <div className="sticky top-0 flex flex-col justify-end items-center h-screen w-full z-10">
        <div className="grow flex items-center w-3/4 max-w-3xl relative">
          <Logo />
          <div className="absolute bottom-6 flex w-full justify-center">
            <SubTitle className="whitespace-nowrap">
              Salmannsweilergasse 4
            </SubTitle>
          </div>
        </div>
      </div>
      <div className="-mt-28 mb-4 w-full">
        <LazySvg />
      </div>
    </div>
  );
};

export default LandingPage;
