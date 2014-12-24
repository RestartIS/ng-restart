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

    function chuck() {
        return {
            restrict: "E",
            replace: "true",
            scope: {
                jokes : "="
            },
            template: "<div ng-repeat='value in jokes'>{{value.joke}}</div>"
        }
    }


    function Restart() {

        this.$get = function() {
            return {
                getBinary: function(name) {
                    var binary = "";
                    for (var i=0; i < name.length; i++) {
                        binary += name[i].charCodeAt(0).toString(2) + " ";
                    }
                    return binary;
                }
            }
        }
    }

     angular.module("ngRestart", [])
    .provider({ $restart : Restart })
    .directive({ ngSkill : skill, ngChuck : chuck });

})();