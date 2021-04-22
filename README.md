# Nerds API

## About

<p>Nerds API is the API which is used by my discord bot, frosty!</p>
<p>Currently the only features this API has are shortening URL's and generating a custom image based on text</p>

| Name          | Description                                  | Parameters                                     |
| ------------- | -------------------------------------------- | ---------------------------------------------- |
| DuckDuckGo    | Generates a duck duck go search image        | search: The text you want                      |
| Google        | Generates a google search image              | search: The text you want                      |
| URL Shortener | Shorten a URL                                | redirect: The long url that will be shortened  |
| SadPika       | Generate an image with sadpika and some text | text: the text to be put on the sad pika image |

## Running

### Requirements

- Node.js v14+
- Typescript 4.1.5
- MongoDB Database

### Setup

- Make sure you're running the requirements mentioned above

```sh
node -v && tsc -v && mongo -version
# v14.15.4
# Version 4.1.5
# MongoDB shell version v4.4.3
```

- Clone the respository

```sh
$ git clone https://github.com/nerdthatnoonelikes/nerds-api
```

- Install all dependencies and install typescript

```sh
$ cd nerds-api
$ yarn && yarn global add typescript
```

- Add the configuration file

```sh
# Assuming you're still in the nerds-api directory
$ vim config.ts
# Example config
# export const PORT: number = 3000;
# export const mongoDB: string = "mongodb://172.17.0.1:27017/nerdsapi";
```

- Start the API

```sh
# Still assuming you're in the nerds-api directory
$ yarn start
```
