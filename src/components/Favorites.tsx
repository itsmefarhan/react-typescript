import React, { useContext } from "react";
import { Store } from "../context/seasonContext";
import { IEpisode } from "../interfaces";

const Favorites = () => {
  const { state, dispatch } = useContext(Store);

  const toggleFavorite = (episode: IEpisode) => {
    const checkFav = state.favorites.includes(episode);
    if (checkFav) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: episode,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: episode,
      });
    }
  };

  return (
    <section className="container">
      <div className="flex-effect">
        {state.favorites.map((episode: IEpisode) => (
          <div
            className="card shadow mt-3"
            style={{ width: "300px", height: "300px" }}
            key={episode.id}
          >
            <img
              src={episode.image.medium}
              className="card-img-top"
              alt={episode.name}
            />
            <div className="card-body">
              <h5 className="card-title">{episode.name}</h5>
              <div className="flex-effect">
                <p className="card-text">
                  Season {episode.season} - Episode {episode.number}
                </p>
                <i
                  className={`${
                    state.favorites.includes(episode)
                      ? "fas fa-heart"
                      : "far fa-heart"
                  } fa-2x text-danger`}
                  onClick={() => toggleFavorite(episode)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
