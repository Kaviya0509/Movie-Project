
import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./MovieProject/Pages/Navbar/Navbar";
import Header from "./MovieProject/Pages/Header/Header";
import Popular from "./MovieProject/Pages/Popular/Popular";
import Trending from "./MovieProject/Pages/Trending/Trending";
import Footer from "./MovieProject/Pages/Footer/Footer";

import useFetchData from "./MovieProject/Custom Hook/useFetch";
import { useDebounce } from "./MovieProject/Custom Hook/useDebounce";

import ScrollHandler from "./MovieProject/Custom Hook/scrollHandler";

import {
  getPopularTV,
  getTrending,
  getActionMovies,
  getUpcomingMovies,
  getTVShows
} from "./MovieProject/API/ApiLogic";

// ✅ Lazy loaded components
const DisCover = lazy(() =>
  import("./MovieProject/Pages/Discover/Discover")
);
const SearchPage = lazy(() =>
  import("./MovieProject/Pages/SearchFilter/SearchPage")
);
const Signin = lazy(() =>
  import("./MovieProject/Pages/SignIn/Signin")
);
const MoreRelease = lazy(() =>
  import("./MovieProject/Pages/MoreRelease/MoreRelease")
);
const FAQ = lazy(() =>
  import("./MovieProject/Pages/FAQ/FAQ")
);
import Upcoming from "./MovieProject/Pages/Upcoming/Upcoming";
import TvShows from "./MovieProject/Pages/TvShows/TvShows";


const App = () => {
  const popularData = useFetchData(getPopularTV);
  const trendingData = useFetchData(getTrending);
  const actionData = useFetchData(getActionMovies);
  const upcomingData = useFetchData(getUpcomingMovies)
  const TvShowsData=useFetchData( getTVShows)

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce({ value, delay: 500 });

  return (
    <BrowserRouter>
      {/* ✅ Scroll navigation handler */}
      <ScrollHandler />

      {/* ✅ Navbar */}
      <Navbar
        searchValue={value}
        setSearchValue={setValue}
        debouncedValue={debouncedValue}
      />

      {/* ✅ Suspense wrapper for lazy routes */}
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Popular data={popularData} />
                <Trending data={trendingData} />
                <DisCover data={actionData} />
                <Upcoming data={upcomingData}/>
                <TvShows data={TvShowsData}/>
                <MoreRelease />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route path="/signin" element={<Signin />} />

          <Route
            path="/search"
            element={<SearchPage debouncedQuery={debouncedValue} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;