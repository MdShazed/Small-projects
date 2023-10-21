const main = async () => {
  const url = "https://any-anime.p.rapidapi.com/anime/gif";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "92b81604cbmsha3b933380d3c44cp11a6c2jsnae5ad0afbaed",
      "X-RapidAPI-Host": "any-anime.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    const gifDiv = document.getElementById("gif");

    var srcStart = result.indexOf('src="') + 5;
    var srcEnd = result.indexOf('"', srcStart);

    var imageSrc = result.slice(srcStart, srcEnd);

    console.log("image string:", imageSrc);

    let gif_image = ` <img
    id="gif_image"
    src=${imageSrc}
    alt="gif"
  />`;

    gifDiv.innerHTML = gif_image;
  } catch (error) {
    console.error(error);
  }
};
