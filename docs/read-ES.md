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
6. agregar en el archivo `.env`
```env
DISCORD_TOKEN="TOKEN_DE_AUTENTICACIÓN_DEL_BOT"
DISCORD_CHANNEL_ID="ID_DEL_CANAL"
```
