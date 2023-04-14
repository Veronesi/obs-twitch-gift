# obs-twitch-gift
# Run
`npm run start`
1. `Por favor, ingresa la constraseña del servidor del OBS`: Set the password generate in steep 2 (Install and Configs)
2. `Nombre de usuario del bot?: (fanaes)`: Bot Username, (not need who same of the chanel) 

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
