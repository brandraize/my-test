@echo off
echo ========================================
echo   Starting Laravel + Next.js Servers
echo ========================================
echo.

echo Starting Laravel Backend...
start "Laravel Server" cmd /k "cd c:\xampp\htdocs\Sensing-Nature-main && php artisan serve"

timeout /t 3 /nobreak >nul

echo Starting Next.js Frontend...
start "Next.js Server" cmd /k "cd c:\Users\win\Documents\Github\my-test && npm run dev"

timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   Both Servers Are Starting!
echo ========================================
echo.
echo Laravel Backend:  http://localhost:8000
echo Laravel Admin:    http://localhost:8000/admin
echo Next.js Frontend: http://localhost:3000
echo API Tester:       http://localhost:3000/api-tester.html
echo.
echo Press any key to open websites...
pause >nul

start http://localhost:3000
start http://localhost:8000/admin

echo.
echo Servers are running in separate windows.
echo Close those windows to stop the servers.
echo.
pause
