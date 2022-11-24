import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import useFetch from "./hooks/use-fetch";


const FLICKR_API_KEY = "471ccbe1c001b68f0e666bc6789092f8";

function App() {
  const [page, setPage] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("mountains");
  let [loadPhotos, isLoading, hasErr] = useFetch();
  const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags="${query}"&page=${page}&per_page=16&format=json&nojsoncallback=1`;

  const searchHandler = (query) => {
    setPage(1)
    setPhotos([])
    setQuery(query);
  };
  const scrollListener = (e) => {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    const modifier = 0;
    if (!isLoading && (currentScroll + modifier > documentHeight)) {
      setPage(page + 1)
      setQuery(query)
    }
  }
  useEffect(() => {
    isLoading = false;
    window.onscroll = scrollListener;
    loadPhotos({ url: flickrUrl }, data => {
      const photoList = data.photos.photo;
      setPhotos([...photos, ...photoList]);
    });
  }, [flickrUrl, query]);

  return (
    <>
      <React.Fragment>
        <Header onSearch={searchHandler} />
        <Gallery
          photos={photos}
          title={query}
          loading={isLoading}
          error={hasErr}
        />
      </React.Fragment>
    </>
  );

}

export default App;
