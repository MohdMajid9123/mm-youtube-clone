import React, { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/ContexApi";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />

        <div className="grow w-[calc(100%-300px)] px-2 h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {!loading &&
              Array.isArray(searchResults) && // Check if searchResults is an array
              searchResults.map((item, i) => {
                if (item?.type !== "video") return false;
                return <VideoCard key={i} video={item?.video} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
