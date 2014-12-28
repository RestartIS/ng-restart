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

    b. level - your level of expertise in that skill
               represented in percentage, for example: "80%"

    c. color - choose a color to represent the level
               of your skill, for example: "#8736C9%"

##### 3) Add the element ng-skill to your index.html inside the scope of the controller you created

       a. add the attribute - skills to the element and attach the
          array of objects you created on the scope


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

       c. the directive should have link function with
          the arguments: scope, element and attributes

##### 3) Add the $restart service to your directive dependencies

       a.  add to the scope a name property
       b.  call to the method getBinary from the $restart service
       c.  pass your attribute name to the method getBinary


##### 4) Add css to your binary name

       a. add css to the div of your name

You can check out this live example here: http://codepen.io/anon/pen/yyaBVW

### 3) Working with $http to create chuck norris jokes list, we love you chuck!

##### 1) Create a controller

    a. add ng-controller into your index.html

    b. register the controller into your angular app

##### 2) Add $http service to your controller and call the api

    a. make a GET request to the api and attach the output value to the scope
       the url to the api documentation : http://www.icndb.com/api/


    b. get 5 jokes from the api

##### 3) Add the element ng-chuck to your index.html inside the scope of the controller you created

       a. add the attribute - jokes to the element and attach the
          array of jokes


##### 4) Add css to your jokes

      a. add css to the generated divs

You can check out this live example here: http://codepen.io/anon/pen/OPRWVq

### 4) Create a search text input that will filter your friends names

##### 1) Create a controller

    a. add ng-controller into your index.html

    b. register the controller into your angular app

    c. add array of names and attach it to the scope

##### 2) Add the Search part

    a. add an input with an ng-model

    b. create div with ng-repeat and loop
       over the names array from the controller

    c. filter the names using the input value

##### 3) Add custom filter that you build that returns a perfect match

       a. create a filter function on your app module

       b. the filter should return a perfect match,
          example: type "yo" in the input, should retrieve
          only the names that starts with "yo".


##### 4) Add our directive ngAwesomeness

      a. add the directive to add awesomeness to
         the names by clicking on the div

##### 5) Add css to your list of names

      a. add css to the generated divs

You can check out this live example here: http://codepen.io/anon/pen/WbGKJQ
   
