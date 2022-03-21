# React App With Webdriverio

This project demonstrates 
- a working react app (created with `create-react-app`)
- written spec tests with [https://webdriver.io/](WebdriverIO)
- code references to constants from the tests to the production code --> This gives you compilation checks 👍 and code reference search 👍

Both projects have been freshly set up with as less code and configurations changes as possible.

## Reason for this demo project
It was and is still a big pain to get WebdriverIO tests running with create-react-app. The biggest problem is, that `create-react-app` only works with `module : 'esnext'` where WebdriverIO requires `module : 'CommonJS'`.

## Not working solutions

### Shared code
The solution described under https://stackoverflow.com/a/56542874 does not work, because `create-react-app` does not allow code outside of your own src folder (source: https://github.com/oklas/react-app-alias#readme)

## Do you have a better idea?
Please, please let me know!
