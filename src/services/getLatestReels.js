// import reelsJSON from "../services/data.json";

export const getLatestReels = async () => {
  const url =
    "https://instagram-looter2.p.rapidapi.com/reels?id=8242141302&count=2";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "afd6c4d8e9msh86ce4954636692bp1cdd9djsn6ee28d8a9f49",
      "X-RapidAPI-Host": "instagram-looter2.p.rapidapi.com",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
    mode: "cors",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.items;
  } catch (error) {
    console.error(error);
  }
};
