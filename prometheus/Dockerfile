FROM prom/prometheus:v2.36.2

USER root

RUN adduser -D -u 1001 -g '' prometheus

RUN chown -R prometheus:prometheus /prometheus

USER 1001