# soundcontainer
a dockerized react music player

1. 
git clone *http://...*

2.
npm install

3.
sudo docker build -f Dockerfile.prod -t docker-player .

4.
docker run -it -p 80:80 -d -t docker-player
