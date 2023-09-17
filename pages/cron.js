const cron = require("cron");
const https = require("https");

const backendUrl = "provide_backend_api_endpoint_that_is_provided_by_rendor";
const job = new cron.CronJob("*/14 * * * *", function () {
  console.log("Restarting server");

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted");
      } else {
        console.error(
          `failed to restart server with status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("Error during Restart:", err.message);
    });
});

module.exports = { job };
