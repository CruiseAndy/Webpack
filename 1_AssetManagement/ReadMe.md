
## Loading CSS
In order to import a CSS file from within a JavaScript module, you need to install and add the **style-loader** and **css-loader** to your module configuration
> npm install --save-dev style-loader css-loader

## Loading Image
Using the **file-loader** we can easily incorporate those in our system as well
> npm install --save-dev file-loader

## Loading Data
Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS, meaning import Data from `` './data.json' `` will work by default. To import CSVs, TSVs, and XML you could use the **csv-loader** and **xml-loader**. 
> npm install --save-dev csv-loader xml-loader