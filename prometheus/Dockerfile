FROM prom/prometheus:v2.44.0

USER root

RUN adduser -D -u 1001 -g '' prometheus

RUN chown -R prometheus:prometheus /prometheus

USER 1001

EXPOSE 9090
EXPOSE 9091