import React from "react";

function MainBodyContent(props) {
  return (
    <div className="max-w-7xl m-auto bg-cover bg-center h-screen w-[93%] max-sm:w-[90%]">
      {props.children}
    </div>
  );
}

export default MainBodyContent;
