@echo off
title Site Dev Watch
cd /d F:\BaiduSyncdisk\AI\LLM\Site
:loop
echo [%date% %time%] (re)starting pnpm docs:dev-clean ...
call pnpm docs:dev-clean
echo [%date% %time%] dev server exited (code %errorlevel%), restart in 5s ...
ping -n 6 127.0.0.1 >nul
goto loop
