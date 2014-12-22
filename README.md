ng-restart
==========

#### Download the files or install via bower

```shell
  bower install ng-restart
```

### Usage

(1) Add ng-restart.js to your main file (index.html)

(2) Set ngRestart as a dependency in your module

 ```javascript
   var myapp = angular.module('myapp', ['ngRestart']);
 ```

## Choose one or more of the assignments:

### Create your own skill level resume

##### 1) Create a controller

   a. add an ng-controller into your index.html

   b. register the controller into your angular app
   
##### 2) Add an array of objects to the scope of the controller, each object should have this properties:

   a. skill - one of your skills, for example: "html"

   b. level - your level of expertise in that skill represented in percentage, for example: "80%"

   c. color - choose a color to represent the level of your skill, for example: "#8736C9%"

##### 3) Add the element ng-skill to your index.html inisde the scope of the controller you created

   a. add the attribute - skills to the element and attach the array of objects you created on the scope

   
##### 4) Add css to your skills

  a. add css to the generated divs
  
  
   
