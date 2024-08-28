/* eslint-disable max-len */
export default function WebHome() {
  return `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BaityBait</title>
    <style>
          html {
        background-color: #111;
        color: #eee;
      }
        * {
            font-family: Inter, Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
            padding: 0;
            margin: 0;
        }

        tr > * {
          text-align: center;
          height: 2em;
          border: solid 1px #f2f2f2;
          padding: 0;
          margin: 0;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .d-none {
          display: none;
        }

        .d-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 700px;
          text-align: center;
        }

        .btn {
          cursor: pointer;
          background-color: #9047ff;
          color: #fff;
          text-decoration: none;
          padding: .5em 2em;
          border-radius: .3em;
          border: none;
          font-weight: 900;
          margin: 0 .5em;
        }
    </style>
</head>
<body style="min-height: 100vh; display: flex; justify-content: center; align-items: center;">
  <div style="max-width: 700px; margin: 0 auto;display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h3 style="display: flex; justify-content: center; align-items: center;">
      <img src="image.png" style="margin-bottom: 1em;height: 10em; width: 10em;" />
      <h1 style="margin-bottom: 1em; text-align: center;">BaityBot</h1>
      <div style="margin-top: 1em;justify-content: center; display: flex;">
        <a href="/drop-massive-keys-config" class="btn" id="drop-key">Sortear claves de forma masiva</a>
        <a href="/drop-keys-subs-today" class="btn" id="drop-key">Sortear claves a subs de hoy</a>
      </div>
  </div>
<script>
</script>
</body>
</html>`;
}
