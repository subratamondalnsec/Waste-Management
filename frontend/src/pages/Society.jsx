import React, { useState } from "react";
import PostCreator from "../component/PostCreator";
import PostList from "../component/PostList";


function Society({ isDarkMode, setIsDarkMode }){
  return (
    <div className={`${isDarkMode ? "bg-black" : "bg-gray-100"}  mx-auto p-4 space-y-6 pt-[94px]`}>
      <PostCreator isDarkMode={isDarkMode}/>
      <PostList isDarkMode={isDarkMode} />
    </div>
  );
}

export default Society;