import https from "https";

function fetchInstagramClips() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "www.instagram.com",
      path: "/api/v1/clips/user/",
      method: "POST",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": '"Brave";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-model": '""',
        "sec-ch-ua-platform": '"Linux"',
        "sec-ch-ua-platform-version": '"6.5.5"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-asbd-id": "129477",
        "x-csrftoken": "mPMVQyMfv2HYqLbHVjGcmo2Ul4mf7wSB",
        "x-ig-app-id": "936619743392459",
        "x-ig-www-claim":
          "hmac.AR0slj81AGMUZmqJL1uSMrjB7HTujuef3BDM44xGoic2gIG8",
        "x-instagram-ajax": "1009123641",
        "x-requested-with": "XMLHttpRequest",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          const response = JSON.parse(data);
          resolve(response);
        } else {
          reject(
            new Error(
              `Error en la solicitud: ${res.statusCode} ${res.statusMessage}`
            )
          );
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write("include_feed_video=true&page_size=2&target_user_id=8242141302");
    req.end();
  });
}

export default fetchInstagramClips;
