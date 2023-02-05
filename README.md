# k6-prometheus-metrics
run k6 in docker image container with prometheus exporter

docker build -t k6 .

docker-compose up -d

docker exec -ti k6 sh

inside container run the test script

k6 run -d 1m --out prometheus script.js

http://127.0.0.1:5656/metrics

ref https://pkg.go.dev/github.com/jhzhu89/xk6-prometheus#section-readme
ref https://github.com/szkiba/xk6-prometheus
ref https://k6.io/docs/extensions/guides/build-a-k6-binary-with-extensions/