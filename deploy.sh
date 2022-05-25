#!/usr/bin/env sh
# 确保脚本跑出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:silent-wood/vuepress-test.git master:gh-pages

cd -