const app = require("express")();

app.get("/", (req, res) => {
  res.set("Content-type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
        </head>
        <body>
            <img src="/chart.svg" />
        </body>
    </html>
    `);
});

app.get("/chart.svg", (req, res) => {
  res.set("Content-type", "image/svg+xml");
  res.set("Vary", "Accept-Encoding");
  res.send(`
    <svg version="1.1"
        width="300" height="200"
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="yellow" />

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);
});

app.listen(8000);
