import React from "react";

import config from "../config/index.json";
import useResponsiveSize from "../hooks/useResponsiveSize";

const MainHero = () => {
  const { mainHero } = config;
  const descriptions =
    typeof mainHero.description === "string"
      ? [mainHero.description]
      : mainHero.description;

  const { width } = useResponsiveSize();
  const isMobile = width < 650;

  return (
    <main className="pt-10 mx-auto max-w-7xl px-4 xs:pt-12 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-20">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl main-title">
          <span className={`${isMobile ? "" : "block"} xl:inline`}>
            {mainHero.title}
          </span>{" "}
          <span className={`${isMobile ? "" : "block"}  text-primary`}>
            {mainHero.subtitle}
          </span>
        </h1>
        {descriptions.map((description, index) => {
          return (
            <p
              key={index}
              className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              {description}
            </p>
          );
        })}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary md:py-4 md:text-lg md:px-10 primary-action-button`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background md:py-4 md:text-lg md:px-10 main-background secondary-action-button`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
