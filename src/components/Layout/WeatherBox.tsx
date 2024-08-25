import React from "react";

type WeatherBoxProps = {
  title: React.ReactNode | string;
  children: React.ReactNode;
  underline?: boolean;
};

const WeatherBox = ({
  title,
  children,
  underline = false,
}: WeatherBoxProps) => {
  return (
    <section className="bg-[#4c7dbc] p-4 text-white rounded-2xl">
      <p className="text-sm font-light opacity-80 px-1">{title}</p>
      {underline && (
        <hr className="h-px my-3 bg-white bg-opacity-30 border-0" />
      )}
      {children}
    </section>
  );
};

export default WeatherBox;
