@echo off

:: Bin path to the decrypt tool
set decryptBinPath=%1

:: Path to the CIA archive
set ciaArchivePath=%2

:: Do not delete the echo, otherwise decrypt doesn't exit when he finished
echo | %decryptBinPath% %ciaArchivePath%