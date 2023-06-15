set -o errexit

yarn install
yarn build
yarn typeorm migration:run -d ./dist/data-source