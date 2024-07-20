/* eslint-disable max-len */
export default function WebDropMassive() {
  return `<html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BaityBait</title>
    <style>
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

        .message-container span {
          display: block;
          padding: .3em .6em;
          margin: .3em 0px;
          background: #ddd;
          border-radius: .5em;
          display: flex;
          align-items: center;
          gap: .5em;
        }
    </style>
</head>
<body style="max-width: 700px; margin: 0 auto;display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; width: 100vw;">
  <h3 style="display: flex; justify-content: center; align-items: center;margin-top: 1em;">
  <img src="image.png" style="margin-bottom: 1em;height: 10em; width: 10em;">
  </h3><h1 style="margin-bottom: 1em; text-align: center;">Que comience el juego</h1>
  
    <div id="winners" class="d-none" style="margin-top: 1em;">
      <h2 style="font-weight: 900;">Ganador</h2>
      <h2 style="font-weight: 900;">Suplente</h2>
  </div>
  

</body></html>`;
}
