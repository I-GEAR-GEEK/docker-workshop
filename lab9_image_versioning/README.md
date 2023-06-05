1. Build image as version 1.0.0
```sh
docker build -t my-server:1.0.0 .
```

2. Run image version 1.0.0
```sh
docker run -it -p 5000:5000 my-server:1.0.0
```

3. Edit `server.js` code
```js
server.get('/', (req, res) => res.send('<h1>Hello World! I am Thanos</h1>'))
```

4. Build image as version 2.0.0
```sh
docker build -t my-server:2.0.0 .
```

5. Run image version 2.0.0
```sh
docker run -it -p 5000:5000 my-server:2.0.0
```

6. Check you existing images
```sh
docker images
```
