rm -rf lib
rm -rf output
rm -rf dist

# 生成.d.ts
./node_modules/.bin/tsc --project ./src/lib --outDir ./output

cd output

for f in $(find . -name "*.d.ts"); do
    mkdir -p ../lib/$(dirname $f) && mv $f ../lib/$(dirname $f)
done

cd ..

./node_modules/.bin/babel ./output --out-dir ./lib --config-file ./config/babel.config.js

rm -rf output

./node_modules/.bin/webpack --config ./config/webpack.config.js