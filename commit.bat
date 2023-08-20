@echo off
:loop
git add -A
git commit -m "Automated commit"
git push origin main
timeout /t 3 /nobreak > nul
goto loop
