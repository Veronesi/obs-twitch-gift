# 🎁 Bot to give drops keys on Twitch connected to OBS

# Install and Config 
1. Install obs-websocket (scroll down to assets) https://github.com/obsproject/obs-websocket/releases
2. Connect Websocket server, Generate and Copy password
![websocket server](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/websocket-server.png)
![obs config](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/obs-config.png)

3. Create two scenes `FMS_FULL` and `FMS_HIDDEN`
4. Add a new `text` (name: `obs-twitch-gift`) in the scene `FMS_FULL`
![create scenes](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/create-scenes.png)
5. Install node.js https://nodejs.org/en
6. Clone repo `git clone https://github.com/Veronesi/obs-twitch-gift.git`
7. Install dependences 
```bash
cd obs-twitch-gift
npm i
```
8. Run Script
```bash
npm run start
```

# Example
### Add keys in `keys.txt`
```
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```
### Run program
![example run program](https://github.com/Veronesi/obs-twitch-gift/blob/main/docs/images/example.gif)

### View winners list in `winners.txt`
```
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => marcsg05
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => guinsuan
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => lucas48283
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => marcsg05
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => nelodev
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => pero_wn_420
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => diegooviedo36
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => acesuprark
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => imanol_84
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => coowi__
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX => pero_wn_420
XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

# Run
`npm run start`
1. `Por favor, ingresa la constraseña del servidor del OBS`: Set the password generate in steep 2 (Install and Configs)
2. `Nombre de usuario del bot?: (fanaes)`: Bot Username, (not need who same of the chanel) 
3. `Por favor, ingresa el OAuth de Twitch` goto https://twitchapps.com/tmi/ and copy OAuth Password
4. `Cual es el nombre de tu canal?` channel where participants will be obtained
5. `Cada cuantos minutos se hará el drop?` Every how many minutes the drop will be made (for exmaple, if you need every 30 seconds, write 0.5) 
6. `tilizar ponderación?` winning percentage
- `Comunista: subs y no subs misma chance` all users has the same percentage for win
- `Capitalista: Los subs tienen x2 chance` subs get double chance for win
- `Oligarquia: una chance mas por cada mes subscripto` for example. if one subscriber has 6 month of subscribe, he has x6 chance for win
7. `Actualizar la lista de participantes:` select reload method of participants
- `Una vez que hacen un comentario, participarán toda la sesión` users are never deleted
- `Limiar la lista de participantes cada X drops` delete users after X drops (2 default)
- `Limpiar la lista cada vez que se dropea una clave` when user get a drop, the users list, will clear

### Credits
ffanaes@gmail.com (fanaes)
