# Restaurant Page
---

## Intro

My entry for Odin Project's [Restaurant Page Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page). I suspect they are attempting to lead up to React, by teaching you how the webpack bundling system works first.

## Notes

- I found out the hard way that file-loader (which I used to try to generate an image), is deprecated in Webpack version 5. I ended up having to use `type: "asset/resource"` for it to properly bundle my image for me in a usable way.

## Still To Do

- My scripts are still messed up. I somehow made it so that I need to run "npm start" and "npm run dev" to start my page. I want to whittle this down to only one command.