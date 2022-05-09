var movies = [
  "https://www.denofgeek.com/wp-content/uploads/2020/05/batman-movies-where-to-stream.jpg?fit=1200%2C675",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marvel-cinematic-universe-order-1601976266.jpg?crop=1.00xw:0.753xh;0,0.0416xh&resize=640:*",
  "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?fit=1280%2C720",
  "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/10/Terminator-Movies-Ranked.jpg",
  "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/11ygzx2s6ftbzcrb_1602130769.jpeg",
];

localStorage.setItem("movies", JSON.stringify(movies));

let i = 0;
let id;
let images = document.createElement("img");
images.id = "imagesize";

data = JSON.parse(localStorage.getItem("movies"));
images.src = movies[i];
document.body.appendChild(images);

setInterval(function () {
  images.src = movies[i];
  i++;
  if (i == movies.length) {
    i = 0;
  }
}, 1300);
