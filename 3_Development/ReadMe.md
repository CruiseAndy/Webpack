## Using source maps
In order to make it easier to track down errors and warnings, JavaScript offers **source maps**, which maps your compiled code back to your original source code. If an error originates from ``b.js``, the source map will tell you exactly that.

![](http://i.imgur.com/AlKZHQk.png)

## Using webpack-dev-server
The **webpack-dev-server** provides you with a simple web server and the ability to use live reloading. 
> npm install --save-dev webpack-dev-server