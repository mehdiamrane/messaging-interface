const { exec } = require('child_process');

exec(
  `json-server --watch src/server/db.json --routes src/server/routes.json --middlewares src/server/middleware/conversations.js --port ${
    process.env.PORT || 3005
  }`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  },
);
