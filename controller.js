app.controller('myCtrl', function ($scope) {
    $scope.carname = "Volvo";
    $scope.qty = 1;
    $scope.listItems=[];
    $scope.countList=[];
    $scope.images = [{
                        image : 'images/im1.jpeg', pid : '1', title : 'CARTA', price : 13,
                        content : "The U.S. construction industry: labor shortages and implications."
                     },
                     {
                        image : 'images/im2.jpeg', pid : '2', title : 'OFF-WHITE X”', price : 23,
                        content : "Project management within the construction United States."
                     },
                     {
                        image : 'images/im3.jpeg', pid : '3', title : 'OLLIE',price : 34,
                        content : "The modular construction of the purpose built apartments."
                     },
                     {
                        image : 'images/im4.jpeg', pid : '4', title : 'DAMN',price : 32,
                        content : "The shortage of the constructions skills and the alternatives of recruitment."
                     }
                    //  {
                    //     image : 'images/im5.jpeg', pid : '5', title : 'BODEGA',price : 51,
                    //     content : "Barriers to construction contractors that want to implement sustainable construction."},
                    //  {
                    //     image : 'images/im6.jpeg', pid : '6', title : 'JUICERO',price : 57,
                    //     content : "The construction industry: the adoption and development of safety culture."},
                    //  {
                    //     image : 'images/im7.jpeg', pid : '7', title : 'BRANDLESS',price : 41,
                    //     content : "Direct property and its role within investment funds"},
                    //  {
                    //     image : 'images/im8.jpeg', pid : '8', title : 'Wizard of Oz Dorothy',price : 47,
                    //     content : "Waste management in the construction industry."}
                    ];
    // add the item in the list
    $scope.addItem=function(item){
        if($scope.listItems.indexOf(item)==-1){
        $scope.listItems.push(item);
        $scope.countList.push(1);
        }else
            alert("item is already available in your cart");
    }
    // delete the item from list
    $scope.removeItem=function(item){
        console.log(item);
        var index = $scope.listItems.indexOf(item);
        $scope.listItems.splice(index,1);
        $scope.countList.splice(index,1);
    }
    
    $scope.add = function (i) {

        var x=$scope.countList[i];
        if(x < 10){
            $scope.countList[i]=x+1;
        }
        // a=a+1;
        // $scope.qty=a;
        // if(a >= 1 && a < 10){
        //     console.log(a);
        //     a=a+1;
        //     //$scope.countList[] = a + 1;
        // }
    }
    $scope.min = function (i) {
        
        var x=$scope.countList[i];
        if(x >1){
            $scope.countList[i]=x-1;
        }
    }

    //calculate total cost
    $scope.totalCost=function(){

        var x=0;
        for(var i=0; i<$scope.listItems.length ;i++){
            x=x+($scope.listItems[i].price*$scope.countList[i]);
        }
        return x;
    }
    // open the card sidebar
    $scope.openNav=function(data) {
        $scope.addItem(data);
        document.getElementById("mySidenav").style.right = "0px";
        // document.getElementById("main").style.marginLeft = "250px";
      }

    // close the card sidebar
    $scope.closeNav=function() {
        document.getElementById("mySidenav").style.right = "-500px";
        // document.getElementById("main").style.marginLeft= "0";
      }
});