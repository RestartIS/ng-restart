/*
   ng-restart

   version: 0.0.1
   licence: MIT
   author: Restart (http://restartit.co.il)
 */
(function() {

    function skill() {
        return {
            restrict: "E",
            replace: "true",
            scope: {
                skills : "="
            },
            template: "<div ng-repeat='value in skills' ng-style='{\"background\" : value.color, \"width\": value.level  }'>{{value.skill}}</div>"
        }
    }



    angular.module("ngRestart", [])
    .directive({ ngSkill : skill });

})();