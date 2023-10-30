export const getImages = async (req, res) => {
  const url = "https://instagram.falc2-2.fna.fbcdn.net/" + req.url;
  req.headers["allow-access-control-origin"] = "*";
  const response = await fetch(url, {
    responseType: "stream",
  });

  response.data.pipe(res);
};
