# 🎁 Bot de Twitch para dropeo masivo de llaves

> [!TIP]
> En caso de querer que se repartan de forma automatica desde tu sitio web, ver [github.com/Veronesi/api-twitch-gift](https://github.com/Veronesi/api-twitch-gift)

### 🎬 Ejemplo de uso [Link Youtube](https://youtu.be/e1U6CvC_dgU)
### 🎬 Ejemplo de uso con un reclamador automatico [Link Youtube](https://www.youtube.com/watch?v=Kjc9XxFy2dA) ([ver repo de servidor web](https://github.com/Veronesi/api-twitch-gift))

## Tabla de contenido
- [Casos de uso](#casos-de-uso)
- [Que puede hacer el bot](#que-puede-hacer-el-bot)
- [Habilitar o Deshabilitar funcionalidades](#habilitar-o-deshabilitar-funcionalidades)
- [Conexión con Twitch](#conexión-con-twitch)
- [Conexión con OBS](#conexión-con-obs)
- [Conexión con servidor web](#conexión-con-servidor-web)
- [Conexión con Discord](#conexión-con-discord)
- [Instalación y ejecución del programa](#instalación-y-ejecución-del-programa)
- [Contacto](#contacto)


## Casos de Uso
[BaityLive: Empieza el NO-E3 - SUMMER GAME FEST 2023 (DORITOS FEST)](https://www.youtube.com/watch?v=OfCf0L9I73g)

## Que puede hacer el BOT
- Conectarse a OBS y mostrar
  - Cantidad de participantes
  - Cantidad de keys dropeadas/totales
  - Probabilidad con la que ganó
  - Nombre del ganador (Twitch)
  - Meses subscripto del ganador en el canal
- Cada cuantos minutos de dropeara una key
- Seleccionar ponderación a la hora de elegir un ganador
  - Comunista: todos tienen la misma chance 
  - Capitalista: Los subs tienen x2 chance
  - Oligarquia: una chance mas por cada mes subscripto 
- Metodo en el cual los usuarios del chat participaran en el drop
  -  Una vez que hacen un comentario, participarán toda la sesión
  -  Limiar la lista de participantes cada X drops 
  -  Limpiar la lista cada vez que se dropea una key
- Darle la clave al ganador por privado en Discord. Para esto si el ganador escribe el comando `!link miusuario#1234` (para que bot de Discord sepa que esa es su cuenta) y el le mandará por mensaje privado la llave que ganó automaticamente.
- Darle la clave al logearse con su cuenta de twitch en tu página web, [repositorio de la web](https://github.com/Veronesi/api-twitch-gift)
- `!drop` muestra por el chat cuanto falta para el proximo drop y cuantas personas estan participando.
  
## Habilitar o Deshabilitar funcionalidades
En el caso de queres habilitar o deshabilitar OBS o Discord, en el archivo `.env` cambiar la variable `DISCORD_ENABLE` o `OBS_ENABLE` como en los ejemplos:
```env
# Discord deshabilitado
DISCORD_ENABLE = ""

# Discord habilitado
DISCORD_ENABLE = "1"

# OBS deshabilitado
OBS_ENABLE = ""

# OBS habilitado
OBS_ENABLE = "1"

# Servidor web deshabilitado
WEB_URL = ""
WEB_TOKEN = ""

# Servidor web habilitado
WEB_URL = "https://example.com/keys/bulk-create"
WEB_TOKEN = "1234567890"
```

## Conexión con Twitch
1. Generar el token de autenticación utilizado para el BOT
https://twitchapps.com/tmi/

## Conexión con OBS
1. Instalar obs-websocket (bajar hasta assets y descargar el archivo correspondiente) https://github.com/obsproject/obs-websocket/releases
2. Conectar Websocket server, y generar una contraseña
![websocket server](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/websocket-server.png)
![obs config](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/obs-config.png)

3. Crear dos escenas `FMS_FULL` y `FMS_HIDDEN`
4. agregar un nuevo `text` (name: `obs-twitch-gift`) en la escena `FMS_FULL`
![create scenes](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/create-scenes.png)

## Conexión con servidor web
1. Inicializar el servidor web, vease ([link](https://github.com/Veronesi/api-twitch-gift))
2. modificar el archivo .env donde `WEB_TOKEN` es el token para comunicarse con el servidor (crear un hash random, recuerda que debe ser el mismo que se pone en `.env` del servidor web)
3. modificar el archivo .env donde `WEB_URL`, ten en cuenta de no olvidarse de agregar al final del dominio `/keys/bulk-create`
   ```bash
    WEB_URL = "https://example.com/keys/bulk-create"
    WEB_TOKEN = "1234567890"
   ```

## Conexión con Discord
1. Crear una cuenta BOT:
https://discord.com/developers/applications
2. En mis aplicaciones, selecionar el nuevo BOT creado e ir a `Menu > Bot` y activar la opción `MESSAGE CONTENT INTENT`
3. En mis aplicaciones, ir a `Menu > Oauth2` y generar un nuevo token en `Client information`
4. Copiar el ID del canal donde el BOT interactuara con los usuarios (para ver el id es necesario activar el `modo desarrollador` https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje-)
5. Generar url de invitación, ir a `Menu > Oauth2 > URL Generator`
- en `scope` seleccionar `bot`
- en `BOT PERMISSIONS` seleccionar en la sección `TEXT PERMISSIONS` la opción `Send Messages`
luego ir a la url generada. `https://discord.com/api/oauth2/authorize?client_id=XXXXXXXX&permissions=0&scope=bot` seleccionar el servidor donde estará el bot.

## Instalación y ejecución del programa
- Instalar Node js https://nodejs.org/en
- Descargar el bot e instalar dependencias
```bash
git clone https://github.com/Veronesi/obs-twitch-gift.git
cd obs-twitch-gift
npm i --yes
```
- Crear archivo de configuración. Dentro de la carpeta, crear un archivo llamado `.env` y completar con los valores de configuración
```env
# Ejemplo

# Nombre del canal
TWITCH_CHANNEL = "fanaes"

# Usuario del bot 
TWITCH_USERNAME = "fanaes"

# Codigo generado en https://twitchapps.com/tmi/ (OAuth del bot)
TWITCH_OAUTH = "oauth:eorig1oi43oij"

# Utilizar o no OBS (dejar "" para desabilitarlo)
OBS_ENABLE = "1"

# Contraseña generada en OBS, en la seccion "Websocket server"
OBS_PASSWORD = "erogmoe1go"

# Utilizar o no DISCORD (dejar "" para desabilitarlo)
DISCORD_ENABLE = "1"
# Token de autentificación del Bot de Discord
DISCORD_TOKEN = "kerngjkreng.ekrg1ekr.ekrjg erg-ekjrgnerjkg"

# ID del servidor de Discord
DISCORD_GUILD_ID = "43958390458"

# ID del canal de Discord
DISCORD_CHANNEL_ID = "3459834598345"

# Token de seguridad para comunicarse la api y el servidor
WEB_TOKEN = "123456"

# url del host
WEB_URL = "https://example.com/keys/bulk-create"
```
- En el archivo `keys.txt` pegar las claves a regalar.
```
486P3-J8FLN-OB3QZ
1OBXK-R7JA9-DR3WC
INRNQ-W7SJP-A909I
LLX54-ZRAMA-8B659
7M8MJ-WS8CU-MDOFF
ZHOPL-864VD-3KXJN
BQ78W-ESBNA-VCQ1R
0F66J-TMTGQ-79ZEC
GTQJE-ANXL2-E1EMO
```
- Ejecutar el programa:
```bash
npm run start
```
- A medida que se dropean las claves, en el archivo `winners.txt` ira dando información en tiempo real de los ganadores
```
       CLAVE      | Usuario Twitch | Clave Reclamada | Usuario de Discord
--------------------------------------------------------------------------
486P3-J8FLN-OB3QZ |    @fanaes     |       true      | fanaes#1337 
1OBXK-R7JA9-DR3WC |   @baitybait   |       false     | null 
INRNQ-W7SJP-A909I |                |                 |
LLX54-ZRAMA-8B659 |                |                 |
7M8MJ-WS8CU-MDOFF |                |                 |
ZHOPL-864VD-3KXJN |                |                 |
BQ78W-ESBNA-VCQ1R |                |                 |
0F66J-TMTGQ-79ZEC |                |                 |
GTQJE-ANXL2-E1EMO |                |                 |
```


### Contacto
- Email: ffanaes@gmail.com o facundoveronesi@gmail.com
- Linkedin: https://www.linkedin.com/in/facundoveronesi
- Twitch: https://www.twitch.tv/fanaes

_Bot creado para el E3 (@baitybait)_
