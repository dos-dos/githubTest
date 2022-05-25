#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#2::^#Right
#1::^#Left
#q::!F4

#Return::run wt
#BackSpace::run shell:RecycleBinFolder

#v::run "C:\Program Files\Microsoft VS Code\Code.exe"
#w::run firefox.exe
#+w::run chrome.exe

:*:@@::mail@gmail.com
