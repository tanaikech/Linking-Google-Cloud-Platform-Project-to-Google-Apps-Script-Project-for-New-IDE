function sample(value) {
  return { value: value };
}

function myFunction() {
  const url = "https://script.googleapis.com/v1/scripts/###:run";
  const payload = {
    function: "sample",
    devMode: true,
    parameters: ["sampleValue"],
  };
  const params = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: { authorization: `Bearer ${ScriptApp.getOAuthToken()}` },
  };
  const res = UrlFetchApp.fetch(url, params);
  console.log(res.getContentText());
}
