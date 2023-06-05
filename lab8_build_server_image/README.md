1. Simple launch and then visit http://localhost:5000
```sh
yarn install
yarn start
```

2. Build image and check
```sh
docker build -t my-server:latest .
docker images
```

3. Run image and then try to terminate (Ctrl + C / Opt + C)
```sh
docker run my-server:latest
```

4. New tab and terminate via docker command, And check previous terminal after then
```sh
docker ps
docker stop {{CONTAINER_ID}}
```

5. Run image with interactive keyboard, and then try to terminate (Ctrl + C / Opt + C)
```sh
docker run -it my-server:latest
```

6. Visit http://localhost:5000. It's not work, then do port mapping
```sh
docker run -it -p 5000:5000 my-server:latest
```

7. Try change **INNER** port number. Visit http://localhost:5000
```sh
docker run -it -p 5000:5001 my-server:latest
```

8. Try change **OUTER** port number. Visit http://localhost:9999
```sh
docker run -it -p 9999:5000 my-server:latest
```
