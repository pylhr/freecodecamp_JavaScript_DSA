@echo off
:loop


REM Rename .txt files to .js
for %%i in (*.txt) do (
    ren "%%i" "%%~ni.js"
)

git add -A
git commit -m "Automated commit"
git push origin main

timeout /t 3 /nobreak > nul
goto loop
