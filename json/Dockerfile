FROM alpine:3.17
RUN apk search curl
RUN apk --no-cache add curl

COPY json_exporter /bin/json_exporter

RUN chmod a+x /bin/json_exporter

EXPOSE      7979
USER        nobody
# ENTRYPOINT  [ "/bin/json_exporter" ]
