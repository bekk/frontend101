call npm install

SET SQLITE_PATH=%cd%\jsbin.sqlite

SET JSBIN_API_ALLOWANONYMOUSREADWRITE=true

SET JSBIN_STORE_SQLITE_LOCATION=%SQLITE_PATH%

for /f "delims=" %%a in ('npm bin') do @set NPM_BIN=%%a
call %NPM_BIN%\jsbin