# Eleventy Basic Resume

Inspired by [Michael Engen](https://michaelengen.com/posts/my-eleventy-resume/), uses data in `src/_data/resume.json` to generate a one-page resume website.

## How to Use

To build and host the one-page resume website:

```zsh
npm install
npm run start
```

You might need to install Playwright and Chromium:

```zsh
$ npx playwright install
```

Then you can use it to create a PDF of your beautiful new resume ✨:

```zsh
$ node print.js
```
