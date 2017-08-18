# Webpack
## Installation
### Local Installation
> npm --save-dev webpack

### Global Installation
> npm --global webpack

## Loading CSS
In order to import a CSS file from within a JavaScript module, you need to install and add the **==style-loader==** and **==css-loader==** to your module configuration
> npm install --save-dev style-loader css-loader

## Loading Image
Using the **==file-loader==** we can easily incorporate those in our system as well
> npm install --save-dev file-loader

## Loading Data
Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS, meaning import Data from =='./data.json'== will work by default. To import CSVs, TSVs, and XML you could use the **==csv-loader==** and **==xml-loader==**. 
> npm install --save-dev csv-loader xml-loader

## Setting up HtmlWebpackPlugin
Before we do a build, you should know that the ==HtmlWebpackPlugin== by default will generate its own ==index.html== file, even though we already have one in the ==dist/== folder. This means that it will replace our ==index.html== file with a newly generated one.
> npm install --save-dev html-webpack-plugin

## Cleaning up the ==/dist== folder
In general it's good practice to clean the ==/dist== folder before each build, so that only used files will be generated. Let's take care of that.
> npm install clean-webpack-plugin --save-dev

## Using source maps
In order to make it easier to track down errors and warnings, JavaScript offers **==source maps==**, which maps your compiled code back to your original source code. If an error originates from ==b.js==, the source map will tell you exactly that.

## Using webpack-dev-server
The **==webpack-dev-server==** provides you with a simple web server and the ability to use live reloading. 
> npm install --save-dev webpack-dev-server