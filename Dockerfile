FROM node:10.8.0-alpine

WORKDIR /usr/src

COPY dist/App.umd.min.js dist/App.umd.min.js
COPY dist/App.css dist/App.css
COPY index.html.ejs index.html.ejs
COPY build-html-app.js build-html-app.js
COPY package.json package.json

RUN mkdir /usr/src/rspec_report

RUN npm install ejs
CMD [ "npm", "run", "build-app" ]
# docker run -it -v $(pwd)/data/result.json:/usr/src/data/result.json -v $(pwd):/usr/src/rspec_report devmasx/rspec-reporter
