import { useState } from "react";

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".");
  const fileIcons = {
    mp4: "film",
    mp3: "headphones",
    flac: "headphones",
    jpeg: "file image",
    png: "file image outline",
    txt: "file alternate",
  };
  return (
    <h6 style={{ marginLeft: "40px" }}>
      {" "}
      <i
        className={`${fileIcons[fileExtension[fileExtension.length - 1]]} icon`}
      ></i>
      {name}
    </h6>
  );
};

export default File;
