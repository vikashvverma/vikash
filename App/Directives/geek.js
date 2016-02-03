angular.module('geek') .directive('geekIntro', function () {
    var animate = function (scope, element, attrs) {
        scope.geek={};
        var tl = new TimelineLite();
        tl.to('#box', 1, {
            borderRadius: '50%',
            height: '100px',
            width: '100px',
            boxShadow: '0px 0px 24px 6px white',
            lineHeight: '100px',
            delay: 1
        }) .to('#box', 1, {
            width: '150px',
            height: '150px',
            boxShadow: '0px 0px 24px 6px blue',
            borderRadius: '0px 20px'
        }) .to('#box', 1, {
            width: '400px',
            borderRadius: '25px',
            boxShadow: '0px 0px 24px 6px green',
            backgroundColor: '#eee',
            color: '#FFF',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '150px'
        }) .from('#greeting_text', 0.5, {
            display:'block',
            fontSize:'0px',
            color:'green'
        }).to('#greeting_text', 0.5, {
            display:'block',
            fontSize:'30px'
        },4).to('#box', 0, {
            fontSize: '25px',
//            boxShadow: '0px 0px 24px 6px white',
//            textShadow: '2px 2px 15px rgba(145, 233, 0, 1)',
//            color: '#91ff00',
            autoAlpha: 0.5
        },4).to('#greeting_text', 0, {
            display:'none'
        }).to('#box', 1, {
            borderRadius:0,
            marginLeft: "-0%",
            marginTop:'-27%',
            width:'250px',
            height:'100%',
            rotation: "360deg",
            autoAlpha:0.5,
            delay:1
        },4).to('#box',0,{
            display:'none',
            autoAlpha:0
        })
        .from(jQuery('.geek-nav'),0.50,{

            marginLeft:'-250px',
            display:'block',
        }).to(jQuery('.geek-nav'), 1,{

            marginLeft:'0px',
            display:'block',
        }).from(jQuery('.geek-nav').find('.geek-header'),0.50,{

            marginLeft:'-250px',
            marginTop:'-250px',
            display:'block'
        }).to(jQuery('.geek-nav').find('.geek-header'),0.50,{
            marginLeft:'0px',
            marginTop:'0px',
            display:'block'
        }).to(jQuery('.geek-nav .menu a'),0,{
            rotationY:360,
            display:'flex',
            backgroundColor:'#FFFFFF'
        }).staggerFrom(jQuery('.geek-nav .menu a i'),1,{
            display:'flex',
            rotation:360
        }).to(jQuery('.geek-nav .menu a i'),0,{
            display:'flex'
        }).staggerFrom(jQuery('.geek-nav .menu a .item'),2,{
            display:'block',
            x:-250,
            opacity:1,
            rotationX:360
        }).to(jQuery('.geek-nav .menu a .item'),2,{
            display:'block',
            x:20,
            opacity:1
        }).to('#profile',0,{
            width:'0px',
            display:'block'
        }).to('#profile',3,{
            width:'80%'
        }).to('#profile',1,{
            width:'auto'
        });
        // .to('#profile',2,{
        //     display:'block',
        //     rotation:360
        // });
        scope.play = function () {
            tl.play();
            //            t2.play();
            //            //t2.yoyo(true);
            //            t3.play();
        };
        scope.reverse = function () {
            tl.reverse();
            //            t2.reverse();
            //            t3.reverse();
        };
        //tl.play();



        scope.getContent=function(content){
            content=content?content:'profile';
            var t=new TimelineLite();
            scope.geek.content=content;
            t.to('#'+content,0,{
                width:'0px',
                height:'0px',
                display:'block'
            }).to('#'+content,0.5,{
                width:'10%',
                height:'10%'
            }).to('#'+content,3,{
                width:'80%',
                height:'80%'
            }).to('#'+content,0,{
                width:'auto',
                height:'auto'
            }).from('#'+content,2,{
                delay:1,
                display:'block',
                rotation:360
            });

        };
        //t.play();
    };
    return {
        restrict: 'A',
        replace: true,
        scope: {
            geekGreeting: '@',
            geekName: '@'
        },
        templateUrl: './App/Views/greeting.html',
        link: animate,
        controller:function($scope,$timeout){
            $timeout(function(){
                $scope.getContent('profile');
            },10000);
        }
    }
})
