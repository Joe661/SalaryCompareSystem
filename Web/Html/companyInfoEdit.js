﻿app.controller('CompanyEditController', function ($scope, $http) {
    $scope.GetCompanyInfo = function () {

    }


    $scope.Save = function () {
        $.post('/api/CompanyInfo/AddCompanyInfo',
            {
                name: $scope.name,
                description: $scope.description,
                size: $scope.size,
                industry: $scope.industry,
                build: $scope.build,
                captial: $scope.captial,
                address: $scope.address
            }, function (data) {
                if (data.success) {
                    alert("保存成功");
                    window.location = '#home';
                }
                else {
                    alert("保存失败");
                }
            });
    }
});