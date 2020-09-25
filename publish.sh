#!/usr/bin/bash

yarn build
cp -R build/* ~/Repos/MANYToken.github.io/
pushd ~/Repos/MANYToken.github.io/

git commit -am "site update $(date -u)"
git push
popd
