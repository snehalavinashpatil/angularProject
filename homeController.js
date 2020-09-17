var app = angular.module("myapp", []);
    app.controller("homeController", ['$scope','$http', function($scope,$http) {
        $scope.personalDetails = [];
          $http.get("data.json")
            .then(function(response) {
                console.log(response,"response testing");
                $scope.personalDetails = response.data.data;
            });
        
            $scope.addNew = function(personalDetails){
                $scope.personalDetails.push({
                    'name': personalDetails.name,
                    'description': personalDetails.description,
                    'webReference': personalDetails.webReference,
                });
                $scope.PD = {};
            };
        
            $scope.remove = function(){
                var newDataList=[];
                $scope.selectedAll = false;
                angular.forEach($scope.personalDetails, function(selected){
                    if(!selected.selected){
                        newDataList.push(selected);
                    }
                });
                $scope.personalDetails = newDataList;
            };
        
            $scope.checkAll = function () {
                if (!$scope.selectedAll) {
                    $scope.selectedAll = true;
                } else {
                    $scope.selectedAll = false;
                }
                angular.forEach($scope.personalDetails, function (personalDetails) {
                    personalDetails.selected = $scope.selectedAll;
                });
            };
        
            var modal = document.getElementById("myModal");

        var btn = document.getElementById("myBtn");

        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
        modal.style.display = "block";
        }

        $scope.closeModel = function(){
            modal.style.display = "none";
        }
        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
        }]);
