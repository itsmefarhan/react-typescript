import React, { useContext, lazy, Suspense } from "react";
import "./App.css";
import { Store } from "./context/seasonContext";

const Seasons = lazy(() => import("./components/Seasons"));

const App = () => {
  const { state } = useContext(Store);
  return (
    <div className="container">
      Total Favorites: {state.favorites.length}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Seasons />
      </Suspense>
    </div>
  );
};

export default App;
