#!/bin/bash
# Site 部署入口（薄壳）——一切上线走正本一键脚本，四道门+门族+验证全在正本内
# 法源=vuepress-site-workflow/references/vercel-deploy-pipeline.md「命令禁令·一切上线全走正确 vercel 部署」（2026-09-25 立）
# 用法：bash deploy.sh --msg "<常规前缀: 摘要>" [变更页相对路径…]
exec bash "F:/BaiduSyncdisk/AI/LLM/.zcode/skills/vuepress-site-workflow/scripts/deploy_ttrpg_site.sh" "$@"
