#!/bin/bash
modules=(caas paas gateway baas paymentGateway)

mkdir -p ./static/specs

for i in ${modules[@]}; do
    rm -rf ./docs/$i/endpoints
    npx docusaurus gen-api-docs $i
    cp ./specs/$i-spec.json ./static/specs/
done
