const main = async () => {
  const input = document.getElementById("animeUrl");
  const ptag = document.getElementById("result");
  ptag.innerHTML = "please wait...";
  const url = `https://what-anime-is-this.p.rapidapi.com/search?url=${input.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "92b81604cbmsha3b933380d3c44cp11a6c2jsnae5ad0afbaed",
      "X-RapidAPI-Host": "what-anime-is-this.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);

    const filename = result.result[0].filename;
    const animeName = filename
      .replace(/\[[^\]]+\]|\d{2} - \d{2} \(TBS \d+x\d+ x264 AAC\)\.mp4/g, "")
      .trim();

    const finalAnimeName = animeName.substring(0, animeName.indexOf(" - "));

    ptag.innerHTML = finalAnimeName;
  } catch (error) {
    console.error(error);
  }
};

// main();
