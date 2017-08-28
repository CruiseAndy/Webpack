## Setting up HtmlWebpackPlugin
Before we do a build, you should know that the **HtmlWebpackPlugin** by default will generate its own ``index.html`` file, even though we already have one in the ``dist/`` folder. This means that it will replace our ``index.html`` file with a newly generated one.
> npm install --save-dev html-webpack-plugin

## Cleaning up the ``/dist`` folder
In general it's good practice to clean the ``/dist`` folder before each build, so that only used files will be generated. Let's take care of that.
> npm install clean-webpack-plugin --save-dev
