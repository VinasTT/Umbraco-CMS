﻿
/*********************************************************************************************************/
/* grid row editor */
/*********************************************************************************************************/

angular.module("Umbraco.canvasdesigner")

.controller("Umbraco.canvasdesigner.gridRow", function ($scope, $modal) {

    if (!$scope.item.values) {
        $scope.item.values = {
            color: '',
            imageorpattern: '',
            fullSize:false
        };
    }

    // Open image picker modal
    $scope.open = function (field) {

        $scope.data = {
            newFolder: "",
            modalField: field
        };

        var modalInstance = $modal.open({
            scope: $scope,
            templateUrl: 'myModalContent.html',
            controller: 'canvasdesigner.mediapickercontroller',
            resolve: {
                items: function () {
                    return field.imageorpattern;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            field.imageorpattern = selectedItem;
        });
    };

})