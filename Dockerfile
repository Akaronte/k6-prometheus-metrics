FROM golang:1.18-alpine as builder

WORKDIR /app

ENV CGO_ENABLED 0
RUN go install go.k6.io/xk6/cmd/xk6@latest

RUN xk6 build --with github.com/szkiba/xk6-prometheus@latest

FROM alpine

COPY --from=builder /app/k6 /bin/
COPY ./script.js .

# ENTRYPOINT [ "k6", "run", "/script.js" ]
ENTRYPOINT [ "k6" ]