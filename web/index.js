/* eslint-disable max-len */
export default function WebDropSubsToday() {
  return `<html>
  <head>
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

        tr:nth-child(odd) {
          background-color: #fff;
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
<body style="max-width: 700px; margin: 0 auto;display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; width: 100vw;background-image: url('jeff-bezos.png');">
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
    <button style="cursor: pointer;border: solid 1px #9047ff; color: #9047ff; text-decoration: none; padding: .5em 2em; border-radius: .3em;background: #fff; font-weight: 900;" id="reload-table">Actualizar la tabla automaticamente</button>
    <button style="cursor: pointer;background-color: #9047ff; color: #fff; text-decoration: none; padding: .5em 2em; border-radius: .3em; border: none;font-weight: 900;" id="drop-key">Sortear clave</button>
  </div>
    </div>
    <div id="winners" class="d-none" style="margin-top: 1em;">
      <h2 style="font-weight: 900;">Ganador</h2>
      <h2 style="font-weight: 900;">Suplente</h2>
  </div>
  <div style="width: 968px; display: grid; grid-template-columns: 1fr 27em; gap: 1em; margin-top: 1em; margin-bottom: 5em;align-items: start;">
    <table style="border-collapse: collapse;">
      <thead style="background: #9047ff; color: #fff;">
          <tr style="background: #9047ff;">
          <th>Usuario</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr><td colspan="2">Aun no hay nadie participando</td></tr>
      </tbody>
    </table>
    <div class="message-container" style="background: #f5f5f5; padding: .4em; border-radius: 1em; border: solid 1px #eee;">
      <span>Esperando subs...</span>
    </div>
  </div>
<script>
  let nInterval;
    const reloadTable = () => {
    fetch('/reload-table')
      .then(res => res.json())
      .then(res => {
        const tbody = document.querySelector('tbody');
        if(!res.users.length) return;
        document.querySelector('.message-container').innerHTML = res.logs.reduce((acc, e) => acc + \`<span>\${e}</span>\`, '')
        tbody.innerHTML = res.users.reduce((acc, e) => acc + \`<tr><td>\${e.username}</td><td>\${e.numberOfShares}</td></tr>\`, '')
        document.querySelector('#participantes').innerHTML = res.users.length;
        document.querySelector('#participaciones').innerHTML = res.users.reduce((acc, e) => acc + e.numberOfShares , 0);
        })
      .catch(er => {
        console.log(er);
          clearInterval(nInterval);
        nInterval = null;
      })
    }
  reloadTable();
  // nInterval = setInterval(reloadTable, 10 * 60 * 1000);

  document.querySelector('#drop-key').onclick = () => {
      clearInterval(nInterval);
      nInterval = null;
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
    if(nInterval) {
      document.querySelector('#reload-table').innerHTML = "Actualizar la tabla automaticamente";
      clearInterval(nInterval);
      nInterval = null;
      return;
    }
      
      document.querySelector('#reload-table').innerHTML = "Pausar la actualización de la tabla";
      nInterval = setInterval(reloadTable, 5000);
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
