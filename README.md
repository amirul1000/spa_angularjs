"# spa_angularjs" 

SAP (Single Page Application) in Angular.js
=============================================

In this video tutorial I am going to discuss about SPA in angular.js
SPA stands for Single Page Application.
In SPA we will have a main page and 
various pages will be injected to this main page on actions (click).

in this architecture we will have an appName with  main controller.
and each individual page we will have separate controller.
Controller manage all data and interact with the html page.

We need to use the ngRoute directive to enable routing/navigation.

We need an app name and its controller to start SPA
in main app we will have a injected div to show the incoming page 



Basic of Angular js
====================
AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.
in angular js data is 2 way binding
Two-way Binding
Data binding in AngularJS is the synchronization between the model and the view.
When data in the model changes, the view reflects the change, and when data in the view changes, 
the model is updated as well. This happens immediately and automatically,
which makes sure that the model and the view is updated at all times.
in short data could be pass from controller/js to html and 
html to controller

AngularJS extends HTML with ng-directives.
The ng-app directive : defines an AngularJS application.
The ng-model directive :  binds the value of HTML controls (input, select, textarea) to application data.
The ng-bind directive :  binds application data to the HTML view.

directives 
============================   
AngularJS directives are HTML attributes with an ng prefix.
ng-directives (ng-model,ng-app,ng-bind) <input type="text" ng-model="first_name"> 

expressions    
============================
AngularJS expressions are written inside double braces: {{ expression }}.
AngularJS will "output" data exactly where the expression is written:
{{ $scipe.first_name }}

filters     
============================    
Filters can be added in AngularJS to format data
<div ng-app="myApp" ng-controller="personCtrl">
<p>The name is {{ lastName | uppercase }}</p>
</div>

modules       
==============================   
a specific potion of the page/a page
AngularJS modules define AngularJS applications.

<div ng-app="myApp" ng-controller="myCtrl">
    HTML
</div>

controllers 
============================   
Control the entrire page with a js functiom

app.controller('myCtrl', function($scope) 
{
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});

Youtube Tutorial : https://youtu.be/Nx-Qfskf2W4

Youtube Channel : https://www.youtube.com/channel/UC2Q4oWfoMQzi6AES8Vb2vQw?view_as=subscriber

Donate to Paypal : patabuz@gmail.com

https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KHM59LRPNV3YY&source=url
