FROM golang:1.20-alpine as builder
WORKDIR $GOPATH/src/go.k6.io/k6
RUN apk add git
RUN apk search curl
RUN apk --no-cache add curl
RUN git clone https://github.com/grafana/k6.git .

COPY . .
RUN apk --no-cache add git=~2
RUN CGO_ENABLED=0 go install -a -trimpath -ldflags "-s -w -X go.k6.io/k6/lib/consts.VersionDetails=$(date -u +"%FT%T%z")/$(git describe --tags --always --long --dirty)"

RUN go install go.k6.io/xk6/cmd/xk6@latest

#RUN xk6 build --with github.com/szkiba/xk6-prometheus@latest

RUN xk6 build --with github.com/grafana/xk6-output-prometheus-remote@latest 

FROM alpine:3.17

RUN adduser k6 -D -h /home/k6
USER k6

COPY --from=builder /go/bin/k6 /usr/bin/k6

WORKDIR /home/k6

COPY ./script.js /home/k6/script.js

ENTRYPOINT ["k6"]