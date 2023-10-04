import React, { useContext, useEffect, useState } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/ContexApi";
import { useParams } from "react-router-dom";
import SearchResultsVideo from "./SearchResultsVideo";

import { FetchApiData } from "../util/Api";

const SearchResult = () => {
  const [result, setResult] = useState();
  console.log(result);
  const { searchQuery } = useParams();

  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fethcSearchResults();
  }, [searchQuery]);

  const fethcSearchResults = () => {
    setLoading(true);
    FetchApiData(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="flex flex-row h-[calc(100% - 56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] border-1 h-full overflow-y-auto bg-black z-0 ">
          <div className="grid grid-cols-1 gap-2 p-5 ">
            <SearchResultsVideo />
            {Array.isArray(result) &&
              result.map((item, i) => {
                if (item?.type !== "video") return false;
                let video = item?.video;

                return (
                  <>
                    <SearchResultsVideo key={i} video={video} />;
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
