## Conexión con Twitch:
1. Generar el token de autenticación utilizado para el BOT
https://twitchapps.com/tmi/


## Conexión con Discord
1. Crear una cuenta BOT:
https://discord.com/developers/applications
2. En mis aplicaciones, selecionar el nuevo BOT creado ir a `Menu > Bot` y activar la opción `MESSAGE CONTENT INTENT`
3. En mis aplicaciones, ir a `Menu > Oauth2` y generar nuevo token en `Client information`
4. Copiar el ID del canal donde el BOT interactuara con los usuarios (para ver el id es necesario activar el `modo desarrollador`)
5. Generar url de invitación, ir a `Menu > Oauth2 > URL Generator`,en `scope` seleccionar `bot` y luego en `BOT PERMISSIONS` seleccionar en `TEXT PERMISSIONS` la opción `Send Messages` y luego copiar la url generada
https://discord.com/api/oauth2/authorize?client_id=Id_del_bot&permissions=0&scope=bot
6. agregar en el archivo `.env`
```env
DISCORD_TOKEN="TOKEN DE AUTENTICACIÓN DEL BOT"
DISCORD_CHANNEL_ID="ID DEL CANAL"
```
