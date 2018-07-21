SET projectPath=..\derekschmid.github.io\
SET personalPath=..\personal-site\
SET distPath=dist\personal-site

del %projectPath%*.js 
del %projectPath%index.html 
del %projectPath%404.html
del %projectPath%favicon.ico 
del %projectPath%*.css 
del %projectPath%3rdpartylicenses.txt

xcopy /s/y %distPath% %projectPath%
echo f | xcopy /f/y %distPath%\index.html %projectPath%404.html

cd %projectPath%

git add .
git commit -am "Trigger rebuild"
git push

cd %personalPath%