#!/bin/bash
# Site 一键部署（build + Vercel CLI 生产部署）
# 用法：在 Site/ 根目录执行 bash deploy.sh
set -e
echo "=== 构建 ==="
pnpm docs:build
echo "=== Vercel 生产部署 ==="
cd docs/.vuepress/dist
npx vercel link --yes --project ttrpg 2>/dev/null
npx vercel deploy . --prod --yes
echo "=== 完成 ==="
echo "线上: https://ttrpg.shinkan42.art"
