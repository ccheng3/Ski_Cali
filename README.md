# Ski-California
React app using Liftie API and SkiMaps.org API for stored California ski resorts 

Deployed: https://ski-california.netlify.app/resorts

Brainstorm Details jotted down here: https://docs.google.com/document/d/1_D6flLVFl_JKkkNZttfD9lEe-h9RzmyzXOZs_rcEzK8/edit?usp=sharing

Liftie API: Pirxpilot's fantastic open-source Ski Resort status API.
https://github.com/pirxpilot/liftie

SkiMap.org API: https://skimap.org/pages/Developers

This project drew inspiration from a couple of ski resort trail map puzzles that I'm currently working on!
- Kirkwood Mountain Resort, California
- Heavenly at Lake Tahoe, California
- Whistler-Blackcomb, British-Columbia, Canada
- Park City Mountain Resort, Utah

https://mtns.co/collections/puzzles (the 1000 piece sets)

07/03/22: I set up a CORS proxy to resolve the 'No Access-Control-Allow-Origin' header is present situation: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors/43268098#43268098

07/15/22: Almost went crazy trying to config 'redirects' Netlify deployment quirk
with React Router, last ditch effort was to pull source code out of 'liftie-resorts' directory and re-deploy. That's 4 hours of my life I'll never get back :) 
Thought was explained here: https://www.codementor.io/@ekunolaeasybuoy/deploying-react-app-from-github-to-netlify-xob6bhhxu

07/15/22: Accidentally pushed /build and /node_modules to GitHub, was able to find
solution to remove directories from repo but not local from here: 
https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository

