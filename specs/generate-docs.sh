# docusaurus-plugin-openapi-docs config names
# modules=('caas' 'paas' 'gateway')

for i in 'caas paas gateway'; do
    rm -rf ./docs/$i/endpoints
    npx docusaurus gen-api-docs $i
done
