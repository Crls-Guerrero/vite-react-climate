Inicializacion:
npm run dev

framework tailwind install:
https://tailwindcss.com/docs/guides/vite

API KEY OpenWeater:
ba5f4ba2f72f3ecf4f365540b778a77a

Package.json modified for view github pages:
1-
"homepage": "https://Crls-Guerrero.github.io/*nombre del proyecto\*",

_scripts_
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

2- npm install gh-pages --save-dev
3- npm run deploy
