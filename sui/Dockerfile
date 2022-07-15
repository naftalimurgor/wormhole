FROM rust:1.60@sha256:48d3b5baf199dc7c378e775c47b0c40aaf7d8b23eaf67e15b095bbdaaecd1f10 as near-node

# Support additional root CAs
COPY README.md cert.pem* /certs/
# Debian
RUN if [ -e /certs/cert.pem ]; then cp /certs/cert.pem /etc/ssl/certs/ca-certificates.crt; fi
# git
RUN if [ -e /certs/cert.pem ]; then git config --global http.sslCAInfo /certs/cert.pem; fi

RUN apt-get update && apt-get -y install libclang-dev jq cmake curl python3 --no-install-recommends

COPY node_builder.sh start_node.sh  /tmp

WORKDIR /tmp

RUN ./node_builder.sh

