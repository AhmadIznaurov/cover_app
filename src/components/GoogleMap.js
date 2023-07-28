import React, { useEffect } from "react";

export const GoogleMap = () => {

useEffect(() => {
                  const googleScript = document.createElement("script");
                  googleScript.src = "https://maps.googleapis.com/maps/api/js?key=&z=16&t=m&hl=ru&gl=RU&mapclient=embed&cid=5286845695974946471"
                  googleScript.async = true;
                  googleScript.defer = true;
                  window.document.body.appendChild(googleScript);

googleScript.addEventListener("load", () => {
new window.google.maps.Map(document.getElementById("map"), {
center: { lat: 43.325016, lng: 45.692793 },
zoom: 16,
});
});
}, []);

return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

