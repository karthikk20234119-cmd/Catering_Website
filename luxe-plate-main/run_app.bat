@echo off
echo =======================================================
echo Fixing Environment Variables...
echo =======================================================
set PATH=C:\Program Files\nodejs;C:\Windows\System32;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows;%PATH%
set ComSpec=C:\Windows\System32\cmd.exe

echo =======================================================
echo Cleaning up old node_modules...
echo =======================================================
if exist node_modules (
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del /f /q package-lock.json
)

echo =======================================================
echo Installing Dependencies...
echo =======================================================
call npm install

echo =======================================================
echo Starting Development Server...
echo =======================================================
call npm run dev
