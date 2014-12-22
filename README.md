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

### 1) Create your own skill level resume

##### 1) Create a controller

   a. add ng-controller into your index.html

   b. register the controller into your angular app
   
##### 2) Add an array of objects to the scope of the controller, each object should have this properties:

   a. skill - one of your skills, for example: "html"

   b. level - your level of expertise in that skill represented in percentage, for example: "80%"

   c. color - choose a color to represent the level of your skill, for example: "#8736C9%"

##### 3) Add the element ng-skill to your index.html inside the scope of the controller you created

   a. add the attribute - skills to the element and attach the array of objects you created on the scope

   
##### 4) Add css to your skills

  a. add css to the generated divs

You can check out this live example here: http://codepen.io/anon/pen/WbGeQg


### 2) Create a directive that prints binary representation of your name with our service $restart

##### 1) Create directive element

   a. add an element directive with your name to your index.html

   b. add the attribute - name to the element and attach the your name to it

##### 2) Register directive to your angular app

   a. the directive should except only elements

   b. the directive should replace your element

   c. the directive should have link function with the arguments: scope, element and attributes

##### 3) Add the $restart service to your directive dependencies

   a.  add to the scope a name property
   b.  call to the method getBinary from the $restart service
   c.  pass your attribute name to the method getBinary


##### 4) Add css to your binary name

  a. add css to the div of your name

You can check out this live example here: http://codepen.io/anon/pen/yyaBVW

   
