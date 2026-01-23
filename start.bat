@echo off
REM Quick Start Script for Angular Artist Portfolio

echo.
echo ====================================
echo Angular Artist Portfolio - Quick Start
echo ====================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: npm install failed
        echo Please run manually: npm install
        pause
        exit /b 1
    )
)

echo.
echo Starting development server...
echo.
echo The website will open at: http://localhost:4200
echo.
echo Press Ctrl+C to stop the server.
echo.

call npm start

pause
