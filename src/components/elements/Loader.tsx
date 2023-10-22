import { ThreeDots } from "node_modules/react-loader-spinner/dist/esm";
import React from "react";

interface Props {
  color: string;
}

const Loader: React.FC<Props> = ({ color }) => {
  return (
    <ThreeDots
      color={color}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
      height={45}
    />
  );
};

export default Loader;
