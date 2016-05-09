var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $http.get('/zoo').success(function(zoo){
      var dataArray = formatDataForView(zoo);
        var table = google.visualization.arrayToDataTable(dataArray, false);   
       var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        
        var options = {
            'title' : 'Visters at the Zoo',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'Number of Visitors',
                minValue: 0
            },
            vAxis: {
                title: 'Year'
            }
        };
        chart.draw(table, options);
    });
}]);

function formatDataForView(animals) {
    var dataArray = [], keysArray = [];
        keysArray.push('Groups');
        keysArray.push('Number of Visitors');
    dataArray.push(keysArray);
    
    animals.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
            dataEntry.push(value[prop]);
        }
        dataArray.push(dataEntry);
});
return dataArray;
}














