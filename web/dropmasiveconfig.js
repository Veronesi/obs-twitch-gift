/* eslint-disable max-len */
export default function WebDropMassiveConfig() {
  return `<html><head>
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

      .form-control {
        padding: 1em 2em;
  border: solid 1px #ddd;
  border-radius: .5em;
  margin: 1em 0;
      }

      ul {
        margin-top: 1em;
        list-style: none;
      }

      .input {
    margin: 1em 0;
    width: 100%;
    display: block;
    padding: .5em 1em;
    border-radius: .5em;
    border: solid 1px #666;
}

label {
  font-weight: 900;
  font-size: 17px;
}
  </style>
</head>
<body style="min-height: 100vh; display: flex; justify-content: center; align-items: center;background-image: url('jeff-bezos.png');">
<div style="max-width: 700px; margin: 3em auto;display: flex; flex-direction: column; justify-content: center; align-items: center;margin-bottom: 5em;">
  <h3 style="display: flex; justify-content: center; align-items: center;">
    <img src="image.png" style="margin-bottom: 1em;height: 10em; width: 10em;">
    </h3>
  <h1 style="text-align: center;">BaityBot</h1>
  <h3 style="text-align: center;">Dropeo de claves masiva</h3>
    <div style="margin-top: 1em">
    <div id="obs-config" class="form-control ${process.env.OBS_ENABLE ? '' : 'd-none'}">
        <label for="">Que datos mostrar en OBS</label>
        <ul>
          <li><input type="checkbox" name="CANTIDAD_PARTICIPANTES"> Cantidad de participantes</li>
          <li><input type="checkbox" name="MESES_SYBSCRIPTO"> Meses subscripto</li>
          <li><input type="checkbox" name="PROBABILIDAD"> Probabilidad con la que ganó</li>
          <li><input type="checkbox" name="KEYS_RESTANTES"> Cantidad de drops regalados/totales</li>
        </ul>
      </div>
      <div class="form-control">
        <label for="">Cada cuantos minutos se hará el drop</label>
        <input class="input" type="number" name="dropsMinutes" value="20">
      </div>
      <div class="form-control">
        <label for="">Utilizar ponderación</label>
        <ul>
          <li><input name="ponderate" type="radio" value="COMUNISTA"> Comunista: todos tienen la misma chance</li>
          <li><input name="ponderate" checked type="radio" value="CAPITALISTA"> Capitalista: Los subs tienen x2 chance</li>
          <li><input name="ponderate" type="radio" value="OLIGARQUIA"> Oligarquia: una chance mas por cada mes subscripto</inpu></li>
        </ul>
      </div>
      <div class="form-control">
        <label for="">Actualizar la lista de participantes</label>
        <ul>
          <li><input name="clearListSelecction" checked value="NUNCA_BORRAR" type="radio"> Una vez que hacen un comentario, participarán toda la sesión</li>
          <li><input name="clearListSelecction" value="BORRAR_TIEMPO" type="radio"> Limiar la lista de participantes cada X drops</inpu></li>
          <li><input name="clearListSelecction" value="BORRAR_POR_CADA_DROP" type="radio"> Limpiar la lista cada vez que se dropea una clave</li>
        </ul>
      </div>
      <div id="form-xdrop" class="form-control d-none">
        <label for="">Cada cuantos drops se limpiará la lista de participantes</label>
        <input class="input" type="number" name="clearAfterXDrops" value="2">
      </div>
      <div style="text-align: center; margin: 2em 0;">
        <span id="send" class="btn">Comenzar</span>
      </div>
    </div>
</div>
<script>

document.querySelectorAll('[name="clearListSelecction"]').forEach(e => e.onchange = () => {
    if(e.checked && e.getAttribute('value') === 'BORRAR_TIEMPO') {
      document.querySelector('#form-xdrop').classList.remove('d-none');
    }else {
      document.querySelector('#form-xdrop').classList.add('d-none');
    }
})

document.querySelector('#send').onclick = () => {
  const body = {

  }
  if(!document.querySelector('#obs-config').classList.contains('d-none')) {
    body.CANTIDAD_PARTICIPANTES = document.querySelector('[name="CANTIDAD_PARTICIPANTES"]').checked;
    body.MESES_SYBSCRIPTO = document.querySelector('[name="MESES_SYBSCRIPTO"]').checked;
    body.PROBABILIDAD = document.querySelector('[name="PROBABILIDAD"]').checked;
    body.KEYS_RESTANTES = document.querySelector('[name="KEYS_RESTANTES"]').checked;
  }

  body.dropsMinutes = document.querySelector('[name="dropsMinutes"]').value;

  document.querySelectorAll('[name="ponderate"]').forEach(e =>  {
    if(e.checked) {
      body.ponderate = e.getAttribute('value');
    }
  })

  if(!body.ponderate) {
    alert('por favor seleccione una ponderación');
    return;
  }

  document.querySelectorAll('[name="clearListSelecction"]').forEach(e =>  {
    if(e.checked) {
      body.clearListSelecction = e.getAttribute('value');
    }
  })

  if(!body.clearListSelecction) {
    alert('por favor seleccione cuando se actualizará la lista');
    return;
  }
  
  if(body.clearListSelecction == "BORRAR_TIEMPO") {
    body.clearAfterXDrops = document.querySelector('[name="clearAfterXDrops"]').value;
  }

  document.querySelector('#send').remove();

  fetch('/drop-massive-keys-start?'+ (new URLSearchParams(body).toString()))
    .then(res => res.json())
    .then(res => {
      if(res) location.href = "/drop-massive-keys";
    })
}

</script>

</body></html>`;
}
