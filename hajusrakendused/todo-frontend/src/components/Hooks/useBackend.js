export default function useBackend() {
  const accessToken = "hP27SJ4f5MVbU5IWgjyIdgrMVgXp7Ijj";
  const backEndUrl = "http://demo2.z-bit.ee";

  const sendRequest = (url, method, body) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: method,
      headers: myHeaders,
      redirect: "follow",
    };

    const noBodyMethods = ["GET", "DELETE", "HEAD", "OPTIONS"];
    if (!noBodyMethods.includes(method.toUpperCase())) {
      requestOptions.body = JSON.stringify(body);
    }

    return fetch(backEndUrl + url, requestOptions)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  return {
    sendRequest,
  };
}
