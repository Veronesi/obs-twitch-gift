/* eslint-disable max-len */
export default function WebDropMassive() {
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

        thead tr > * {
          text-align: center;
          height: 2em;
          border: solid 1px #9047ff;
          padding: 0;
          margin: 0;
        }

        tbody tr td {
        font-size: 11px;
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: .2em .5em;
        }

        tbody tr td span {
          padding: .5em 1em;
          background-color: #555;
          border-radius: .5em;
        }

        tr:nth-child(odd) {
          background-color: #111;
        }

        tr:nth-child(even) {
          background-color: #222;
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
          background: #9047ff7d;
          border-radius: .5em;
          display: flex;
          align-items: center;
          gap: .5em;
        }
          .input {
    margin: 1em 0;
    width: 100%;
    display: block;
    padding: .5em 1em;
    border-radius: .5em;
    border: solid 1px #666;
}
    </style>
</head>
<body style="max-width: 700px; margin: 0 auto;display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; width: 100vw;">
  <h3 style="display: flex; justify-content: center; align-items: center;margin-top: 1em;">
  <img src="image.png" style="margin-bottom: 1em;height: 10em; width: 10em;" />
  </h3>
  <h1 style="margin-bottom: 1em; text-align: center;">Participantes: <span id="participantes">0</span></h1>
  <div id="main">
  <div style="display: flex; min-width: 38em; justify-content: center;">
    <button style="cursor: pointer;border: solid 1px #9047ff; color: #9047ff; text-decoration: none; padding: .5em 2em; border-radius: .3em;background: #fff; font-weight: 900;" id="reload-table">Actualizar la tabla</button>
  </div>
    </div>
  <div style="width: 968px; display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 1em; margin-top: 1em; margin-bottom: 5em;align-items: start;">
    <table style="border-collapse: collapse;">
      <thead style="background: #9047ff; color: #fff;">
          <tr style="background: #9047ff;">
          <th>Participantes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Aun no hay nadie participando</td></tr>
      </tbody>
    </table>
    <div>
      <h3 style="display: flex; justify-content: center; align-items: center;padding-bottom: 1em;">Ganadores:</h3>
      <div class="message-container" style="background: #222; padding: .4em; border-radius: 1em; border: solid 1px #eee;">
        <span>Aún no hay ganadores</span>
      </div>
    </div>
  </div>
<script>
    const reloadTable = () => {
    fetch('/reload-table-massive')
      .then(res => res.json())
      .then(res => {
        const tbody = document.querySelector('tbody');
        if(res.logs.length) {
                document.querySelector('.message-container').innerHTML = res.logs.reduce((acc, e) => acc + \`<span>\${e}</span>\`, '')
        }

        if(res.users.length) {
                tbody.innerHTML = "<tr><td>"+res.users.reduce((acc, e) => acc + \`<span>\${e.username}</span>\`, '')+"</td></tr>";
        }

        document.querySelector('#participantes').innerHTML = res.users.length;
        })
      .catch(er => {
        console.log(er);
      })
    }
  reloadTable();

  document.querySelector('#reload-table').onclick = () => {
      reloadTable();
    }
</script>
</body>
</html>`;
}
