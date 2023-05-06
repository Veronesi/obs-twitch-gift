## Conexión con Twitch:
1. Generar el token de autenticación utilizado para el BOT
https://twitchapps.com/tmi/


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

## Conexion con OBS
1. Instalar obs-websocket (bajar hasta assets y descargar el archivo correspondiente) https://github.com/obsproject/obs-websocket/releases
2. Conectar Websocket server, y generar una contraseña
![websocket server](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/websocket-server.png)
![obs config](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/obs-config.png)

3. Crear dos escenas `FMS_FULL` y `FMS_HIDDEN`
4. agregar un nuevo `text` (name: `obs-twitch-gift`) en la escena `FMS_FULL`
![create scenes](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/create-scenes.png)

## Archivo de configuracion de ejemplo
```env
// .env
TWITCH_CHANNEL = "fanaes"
TWITCH_USERNAME = "fanaesBot"
TWITCH_OAUTH = "oauth:XXXXXX"
                
OBS_PASSWORD = "XXXXX"

DISCORD_TOKEN = "XXXXXXX.XXXXXX.XXXXXXXX_XXXXXX"
DISCORD_GUILD_ID = "XXXXXXXXXXX"
DISCORD_CHANNEL_ID = "XXXXXXXXXXX"
```
