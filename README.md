# Music Webplayer

In diesem React Projekt habe ich einen Musik Player gebaut, welcher Songs von [Chillhop](https://chillhop.com/) spielt. Ich habe eine kleine Library erstellt, welche sich noch beliebig manuell erweitern ließe.
Die React Website ist zusammen mit einem Nginx Server in einem Docker Container [hier](http://h2911972.stratoserver.net:90/) zu sehen.

---

Um das Projekt auf deinem Rechner anzuschauen brauchst du nur `node`. Du kannst einfach das Git Repository clonen und in dem entsprechenden Ordner ein Terminal öffnen.

```bash
npm install
```

um die benötigten Modules herunterzuladen.

```bash
npm start
```

um den React Development Server zu starten, welcher dann über `localhost:3000` erreichbar ist.

---

Um den Docker Container zu nutzen die Docker Engine installieren.

```bash
docker build -f Dockerfile.prod -t soundcontainer .
```

```bash
docker run -d -p 80:80 --rm soundcontainer
```

- `-d` um den Container im detach Modus zu starten
- `-p` die vordere Zahl (`80`:80) ist der Port deines Rechners, die hintere die des Nginx Webservers im Docker-Container
- `--rm` um den Container nach dem Stoppen direkt zu löschen

---

Um weitere Lieder aus anderen Quellen hinzuzufügen, muss man nur `data.js` im vorhandenen Format um die gewünschten Lieder erweitern.

```bash
{
    name: "Peaches",
    artist: "Philanthrope, The Field Tapes",
    cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
    id: uuidv4(),
    active: true,
    color: ["#B7C184", "#BCD4D7"],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=11246",
},
```
