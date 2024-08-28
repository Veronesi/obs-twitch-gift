/* eslint-disable max-len */
export default function WebDropSubsToday() {
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
          font-size: 11px;
          padding: .3em .6em;
          margin: .3em 0px;
          background: #555;
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
      <div class="d-grid" style="grid-template-columns: 6em 1fr auto;gap: 1em; max-width: 33em;">
    <input class="input" type="number" placeholder="cant. de participaciones" name="numbershares" value="1" />
    <input name="username" class="input" type="text" placeholder="Nombre del pibe" value="" />
    <div id="add-user" style="margin: 1em 0;"><button id="btn-add-user" style="cursor: pointer;background-color: #9047ff; color: #fff; text-decoration: none; padding: .5em 2em; border-radius: .3em; border: none;font-weight: 900;">Agregar participante</button></div>
  </div>
  <h1 style="margin-bottom: 1em; text-align: center;">Participantes: <span id="participantes">0</span> - Puntos totales: <span id="participaciones">0</span></h1>
  <div id="main">
  <div style="display: flex; min-width: 38em; justify-content: space-between;">
    <button style="cursor: pointer;border: solid 1px #9047ff; color: #9047ff; text-decoration: none; padding: .5em 2em; border-radius: .3em;background: #fff; font-weight: 900;" id="reload-table">Actualizar tabla</button>
    <button style="cursor: pointer;background-color: #9047ff; color: #fff; text-decoration: none; padding: .5em 2em; border-radius: .3em; border: none;font-weight: 900;" id="drop-key">Sortear clave</button>
  </div>
    </div>
    <div id="winners" class="d-none" style="margin-top: 1em;">
      <h2 style="font-weight: 900;">Ganador</h2>
      <h2 style="font-weight: 900;">Suplente</h2>
  </div>
  <div style="width: 968px; display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 1em; margin-top: 1em; margin-bottom: 5em;align-items: start;">
    <table style="border-collapse: collapse;">
      <thead style="background: #9047ff; color: #fff;">
          <tr style="background: #9047ff;">
          <th>Participantes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td colspan="1">Aun no hay nadie participando</td></tr>
      </tbody>
    </table>
    <div class="message-container" style="background: #222; padding: .4em; border-radius: 1em; border: solid 1px #eee;">
      <span>Esperando subs...</span>
    </div>
  </div>
<script>
    const reloadTable = () => {
    fetch('/reload-table')
      .then(res => res.json())
      .then(res => {
        const tbody = document.querySelector('tbody');
        if(!res.users.length) return;
        if (res.logs.length) {
                document.querySelector('.message-container').innerHTML = res.logs.reduce((acc, e) => acc + \`<span>\${e}</span>\`, '')
        }
        if (res.users.length) {
                tbody.innerHTML = "<tr><td>"+res.users.reduce((acc, e) => acc + \`<span>\${e.username} [\${e.numberOfShares}]</span>\`, '')+"</td><td>";
        }
        document.querySelector('#participantes').innerHTML = res.users.length;
        document.querySelector('#participaciones').innerHTML = res.users.reduce((acc, e) => acc + e.numberOfShares , 0);
        })
      .catch(er => {
        console.log(er);
      })
    }
  reloadTable();

  document.querySelector('#drop-key').onclick = () => {
    // document.querySelector('#drop-key').remove(); 
    fetch('/drop-key')
      .then(res => res.json())
      .then(res => {
        const arr = [];
        for(let i = 0; i < res.length / 2; i++){
          arr.push(res[i]);
          arr.push(res[res.length /2 + i])
        };
        document.querySelector('#winners').innerHTML += arr.reduce((acc, e , f) => acc + (f % 2 
        ? '<div><button style="margin: .5em;border: solid 1px #9047ff; color: #9047ff; text-decoration: none; padding: .5em 2em; border-radius: .3em;background: #fff; font-weight: 900;">'+e+'</button></div>'
        : '<div><button style="margin: .5em;background-color: #9047ff; color: #fff; text-decoration: none; padding: .5em 2em; border-radius: .3em; border: none;font-weight: 900;">'+e+'</button></div>'
        ), '');
        document.querySelector('#winners').classList.remove('d-none');
        document.querySelector('#winners').classList.add('d-grid');
        // document.querySelector('#main').classList.add('d-none');

        })
      .catch(er => { document.querySelector('#winners').innerHTM = err.message; })
    }

  document.querySelector('#reload-table').onclick = () => {
      reloadTable();
    }

    document.querySelector('#add-user').onclick = () => {
      document.querySelector('#btn-add-user').innerHTML = 'Cargando...';
      const username = document.querySelector('[name="username"]').value;
      const numbershares = document.querySelector('[name="numbershares"]').value;
      document.querySelector('[name="username"]').value = "";
      fetch(\`/add-user?username=\${username}&numbershares=\${numbershares}\`)
        .catch(() => {})
        .finally(() => {
           document.querySelector('#btn-add-user').innerHTML = 'Agregar participante';
           reloadTable();
        });
    };
    
</script>
</body>
</html>`;
}
