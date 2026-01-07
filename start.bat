@echo off
title AlphaStream Launcher
color 0a
cls
echo ==================================================
echo       ALPHA STREAM - INSTITUTIONAL SIGNALS
echo ==================================================
echo.
echo [1/3] Initializing Data Feeder...
start "AlphaStream Backend (DO NOT CLOSE)" python data_feeder.py
echo.
echo [2/3] Starting Local Web Server...
start "AlphaStream Server (DO NOT CLOSE)" python -m http.server 8000
timeout /t 2 >nul
echo.
echo [3/3] Opening Platform...
start http://localhost:8000/index.html
start http://localhost:8000/dashboard.html
echo.
echo ==================================================
echo SYSTEM ONLINE.
echo Minimize the two black windows (Backend & Server), 
echo but DO NOT CLOSE THEM.
echo ==================================================
pause
