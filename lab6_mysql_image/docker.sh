docker run \
  --name my-mysql \
  --network defaultnetwork \
  -p 3308:3306 \
  -e MYSQL_ROOT_PASSWORD=secret \
  -d mysql:8
docker run \
  --name phpmyadmin \
  --network defaultnetwork \
  -d \
  -e PMA_HOST=my-mysql \
  -p 8080:80 phpmyadmin
