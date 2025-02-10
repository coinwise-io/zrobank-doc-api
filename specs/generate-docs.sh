modules=(caas paas gateway baas)

for i in ${modules[@]}; do
    rm -rf ./docs/$i/endpoints
    npx docusaurus gen-api-docs $i
done
