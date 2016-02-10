# skeletondashboard
This can be used as starting template for building multi page app current example is implementing dashboard it can be modified to meet your project specifications. 
How the code tides together is using angular as the framework which each module is created in seperate folders and later merged to master module which gets 
bootstrap to the document also using UMD pattern to invoke files together.   
This dashboard app implements widgets as a factory and the dashboard tab can get assign many widgets to it.
The test data can be imported using csv file and creates dashboard tab foreach file uploaded  
## Using Gulp, Bower, AngularJS, and Google Charts

## Must have tool on your machine
Please have some understanding how some of these tools work many tutorials out on the web.
Make sure following tools are installed on your dev machine list below
Install 
- sudo apt-get install nodejs
- sudo apt-get install npm
- sudo apr-get install git
- sudo npm install -g npm *<-- This updates npm to latest version*
- sudo npm install -g gulp
- sudo npm install -g bower
*Please make sure all libs listed before are installed ex: nodejs -v*
Now Lets clone repo to specific path which I wont cover there many examples how to do this.
Lets install all dependencies required for the project lets point to the repo path you should see package.json & bower.json
Initiate libs 
- sudo npm install *On Windows you will get maybe a error symlinks lets fix that by adding option to the cmd --> * --no-bin-links
- bower install 
OK now all required tools should be installed project. 
If you run into any errors this is a pretty straightforward install please have some knowledge with nodejs, npm, gulp, and bower
 