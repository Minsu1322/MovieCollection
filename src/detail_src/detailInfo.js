import { fetchMovieAPI } from "../all_src/fetchMovieAPI.js";

export const detailInfo = async () => {
  const movieInfo = await fetchMovieAPI();

  let urlParams = new URLSearchParams(window.location.search);
  let movieId = urlParams.get("id");

  let movieObj = movieInfo.reduce((obj, movie) => {
    if (movie.id === Number(movieId)) obj = movie;
    return obj;
  }, {});

  // console.log(movieObj);
  document
    .getElementById("detail-poster")
    .setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`
    );
  document.getElementById("detail-title").innerHTML =
    movieObj.title.toUpperCase();
  document.getElementById(
    "detail-release"
  ).innerHTML = `개봉일: 🎬${movieObj.release_date}`;
  document.getElementById(
    "detail-average"
  ).innerHTML = `평점: ⭐️${movieObj.vote_average.toFixed(2)}`;
  document.getElementById(
    "detail-popular"
  ).innerHTML = `인기도: 💖${movieObj.popularity}`;
  document.getElementById("detail-overview").innerHTML = movieObj.overview;
  document
    .getElementById("detail-poster2")
    .setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`
    );

  // console.log(movieObj);

  // 출연진 정보 추가
  const castApiKey = "23317d8f45886930254ccd062e0ed8a1"; // 출연진 정보 API
  const castOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${castApiKey}`,
    castOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch cast info");
      }
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      // 출연진 정보를 가져와서 HTML에 추가
      const castList = response.cast.slice(0, 6); // 상위 5명의 출연진 정보만 표시
      const castContainer = document.getElementById("cast-container");
      castList.forEach((actor) => {
        const actorElement = document.createElement("div");
        actorElement.classList.add("actor");
        actorElement.innerHTML = `
      <a href="https://www.google.com/search?q=${actor.name}"><img class="actor-image" src="https://image.tmdb.org/t/p/w500${actor.profile_path}" alt="${actor.name}"></a>
      <div style="background-color: transparent" class="actor-info">
        <p class="actor-name">${actor.name}</p>
        <p class="actor-character">${actor.character} 역</p>
      </div>
      `;
        castContainer.appendChild(actorElement);
      });
    })
    .catch((err) => console.error(err));

  // 비디오 API 호출
  const apiKey = "23317d8f45886930254ccd062e0ed8a1"; // 실제 TMDb API 키를 여기에 넣으세요

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${apiKey}`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      // 동영상이 있는지 확인하고, 첫 번째 동영상의 키를 추출
      if (response.results && response.results.length > 0) {
        const videoKey = response.results[0].key;
        // YouTube 동영상을 포함하는 iframe 생성
        const videoIframe = `<iframe style="border-radius: 15px; width: 100%; height: 330px;" src="https://www.youtube.com/embed/${videoKey}" frameborder="0" allowfullscreen></iframe>`;
        // 동영상을 표시할 요소에 iframe 추가
        document.getElementById("video-container").innerHTML = videoIframe;
      } else {
        // 동영상이 없는 경우 메시지 표시
        document.getElementById("video-container").innerHTML =
          "이 영화에는 동영상이 없습니다.";
      }
    })
    .catch((err) => console.error(err));

  return movieId;
};
