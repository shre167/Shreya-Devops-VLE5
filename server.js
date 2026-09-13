const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DevOps VLE 5</title>
      </head>
      <body>
        <h1>DevOps CI/CD Pipeline</h1>
        <p>Application deployed successfully!</p>
        <p>Docker + Kubernetes + GitHub Actions</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
