// import reelsJSON from "../services/data.json";

export const getLatestReels = async () => {
  const url =
    "https://instagram.com/api/v1/clips/user/?include_feed_video=true&page_size=2&target_user_id=8242141302";
  const options = {
    method: "POST",
    headers: {
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
      "access-control-allow-origin": "*",
      "cors-origin": "*",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-asbd-id": "129477",
      "x-csrftoken": "mPMVQyMfv2HYqLbHVjGcmo2Ul4mf7wSB",
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "hmac.AR0slj81AGMUZmqJL1uSMrjB7HTujuef3BDM44xGoic2gIG8",
      "x-instagram-ajax": "1009123641",
      "x-requested-with": "XMLHttpRequest",
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
