var map;

var markers = [
    {
        coords:{lat:38.7092, lng:-90.3083},
            iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content:'<h1>University of Missouri- St. Louis</h1>',
            type:"none"
        },
            {
            coords:{lat:38.7382, lng:-90.3023},
            content:'<h1>Ferguson Brewing Company</h1>',
            type:'food'
            },
            {
            coords:{lat:38.7380, lng:-90.3021},
            content:'<h1>Marleys Bar & Grill</h1>',
            type:"food"
            },
         {
            coords:{lat:38.6869, lng:-90.2728},
            content:'<h1>Goody Goody Diner</h1>',
            type:"food"
         },
       {
            coords:{lat:38.6557, lng:-90.3006},
            content:'<h1>Blueprint Coffee</h1>',
            type:"food"
        },
        {
            coords:{lat:38.7468, lng:-90.3057},
            content:'<h1>Corner Coffee House</h1>',
            type:"food"
        },
        {
            coords:{lat:38.6416, lng:-90.2618},
            content:'<h1>Shake Shack</h1>',
            type:"food"
        },
        {
            coords:{lat:38.6559, lng:-90.3026},
            content:'<h1>Milano Hookah Bar</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.8058, lng:-90.3530},
            content:'<h1>Dogs N Frie</h1>',
            type:"food"
        },
      
         {
            coords:{lat:38.7102, lng:-90.3086},
            content:'<h1>UMSL Recreation and Wellness Center</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.7503, lng:-90.3755},
            content:'<h1>St. Louis Lambert International Airport</h1>',
            type:"Activity"
        },
       
        {
            coords:{lat:38.7445, lng:-90.4696},
            content:'<h1>Hollywood Ampitheater</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6556, lng:-90.2979},
            content:'<h1>The Pagent</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6408, lng:-90.2805},
            content:'<h1>The Muny</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6389, lng:-90.2318},
            content:'<h1>The Fox Theater</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.7092, lng:-90.3083},
            content:'<h1>UMSL Hackathon</h1>',
            type:"Activity"
        },
        {
            coords:{lat:40.854295, lng:-76.78757},
            content:'<h1>Wheelhouse</h1>',
            type:"food"
        
        },
        {
            coords:{lat:38.623438, lng:-90.19725},
            content:'<h1>Start Bar/h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.624388, lng:-90.196895},
            content:'<h1>Tin Roof</h1>',
            type:"food"
        },
        {
            coords:{lat:38.7463972, lng:-90.6537455},
            content:'<h1>St. Charles Main Street</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.783090, lng:-90.480043},
            content:'<h1>Big A</h1>',
            type:"food"
        },
        {
            coords:{lat:38.782001, lng:-90.481122},
            content:'<h1>Bobbys Place</h1>',
            type:"food"
        },
        {
            coords:{lat:38.61042, lng:-90.20299},
            content:'<h1>International Tap House</h1>',
            type:"food"
        },
        {
            coords:{lat:38.622536, lng:-90.192711},
            content:'<h1>Ballpark Village</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.628011, lng:-90.25113},
            content:'<h1>Siam</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6268, lng:-90.2027},
            content:'<h1>ScottTrade Center</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6226, lng:-90.1928},
            content:'<h1>Busch Stadium</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6325, lng:-90.2280},
            content:'<h1>Chafetz Arena</h1>',
            type:"Activity"
        },
        {
            coords:{lat:38.6278, lng:-90.2019},
            content:'<h1>Peabody Opera House</h1>',
            type:"Activity"
        },
        {
            coords:{lat:30.701728, lng:-90.292954},
            content:'<h1>WingStop</h1>',
            type:"food"
        },
        {
            coords:{lat:38.711372, lng:-90.308831},
            content:'<h1>Einstein Bros</h1>',
            type:"food"
        },
        {
            coords:{lat:38.711415, lng:-90.320348},
            content:'<h1>St. Louis Kitchen</h1>',
            type:"food"
        },
        {
            coords:{lat:38.717632, lng:-90.327728},
            content:'<h1>Big L Chop Suey</h1>',
            type:"food"
        },
        {
            coords:{lat:38.740457, lng:-90.303121},
            content:'<h1>Vincenzos</h1>',
            type:"food"
        },
        {
            coords:{lat:38.736408, lng:-90.353746},
            content:'<h1>The Pasta House</h1>',
            type:"food"
        },
        {
            coords:{lat:38.717764, lng:-90.327878},
            content:'<h1>Imos Pizza</h1>',
            type:"food"
        },
        {
            coords:{lat:38.594035, lng:-90.230211},
            content:'<h1>La Vallesana</h1>',
            type:"food"
        },
        {
            coords:{lat:38.661589, lng:-90.308779},
            content:'<h1>Mi Ranchito</h1>',
            type:"food"
        },
        {
            coords:{lat:38.655747, lng:-90.300812},
            content:'<h1>Mission Taco Joint</h1>',
            type:"food"
        },
        {
            coords:{lat:38.645193, lng:-90.261858},
            content:'<h1>Burro Loco</h1>',
            type:"food"
        },
        {
            coords:{lat:38.632677, lng:-90.233921},
            content:'<h1>Chipotle</h1>',
            type:"food"
        },
        {
            coords:{lat:38.640026, lng:-90.244652},
            content:'<h1>Qdoba</h1>',
            type:"food"
        },
        {
            coords:{lat:38.708869, lng:-90.317724},
            content:'<h1>Breakaway Cafe</h1>',
            type:"food"
        },
        {
            coords:{lat:38.655767, lng:-90.304959},
            content:'<h1>Blueberry Hill</h1>',
            type:"food"
        },
        {
            coords:{lat:38.708221, lng:-90.299585},
            content:'<h1>Whalens Bar</h1>',
            type:"food"
        },
        {
            coords:{lat:38.635979, lng:-90.261940},
            content:'<h1>Narwhals Crafted Urban Ice</h1>',
            type:"food"
        },
        {
            coords:{lat:38.6379, lng:-90.2258},
            content:'<h1>Urban Chestnut</h1>',
            type:"food"
        },
        {
            coords:{lat:38.645053, lng:-90.261940},
            content:'<h1>Drunken Fish</h1>',
            type:"food"
        },
        {
            coords:{lat:38.757312, lng:-90.468386},
            content:'<h1>Dave & Busters</h1>',
            type:"Activity"
        },
    ];


function initMap(){
    //map options
var options = {
zoom:10,
center:{lat:38.6270, lng:-90.1994}
}
// New map
map = new google.maps.Map(document.getElementById('map'), options);
            
// Array of Markers
        
            // Loop Through Markers
            for (var i = 0;i < markers.length;i++)
            {
                // Add Marker
                addMarker(markers[i]);
            }

                //Add Marker Function
   

    function addMarker(marker1){
        var marker = new google.maps.Marker({
    position:marker1.coords,
    map:map,
    //icon:props.iconImage
});
                // Check for Custom Icon
                     if(marker1.iconImage){
                         //Set Icon Image
                        marker.setIcon(marker1.iconImage);
    } 
        // Check Content
            if (marker1.content){
                var infoWindow = new google.maps.InfoWindow({
    content:marker1.content
});
        marker.addListener('click', function(){
                infoWindow.open(map, marker);
        });
            }
    }

}
function viewMap(){
     markers = [
        {
            coords:{lat:38.7092, lng:-90.3083},
                iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                content:'<h1>University of Missouri- St. Louis</h1>',
                type:"none"
            },
                {
                coords:{lat:38.7382, lng:-90.3023},
                content:'<h1>Ferguson Brewing Company</h1>',
                type:'food'
                },
                {
                coords:{lat:38.7380, lng:-90.3021},
                content:'<h1>Marleys Bar & Grill</h1>',
                type:"food"
                },
             {
                coords:{lat:38.6869, lng:-90.2728},
                content:'<h1>Goody Goody Diner</h1>',
                type:"food"
             },
           {
                coords:{lat:38.6557, lng:-90.3006},
                content:'<h1>Blueprint Coffee</h1>',
                type:"food"
            },
            {
                coords:{lat:38.7468, lng:-90.3057},
                content:'<h1>Corner Coffee House</h1>',
                type:"food"
            },
            {
                coords:{lat:38.6416, lng:-90.2618},
                content:'<h1>Shake Shack</h1>',
                type:"food"
            },
            {
                coords:{lat:38.6559, lng:-90.3026},
                content:'<h1>Milano Hookah Bar</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.8058, lng:-90.3530},
                content:'<h1>Dogs N Frie</h1>',
                type:"food"
            },
          
             {
                coords:{lat:38.7102, lng:-90.3086},
                content:'<h1>UMSL Recreation and Wellness Center</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.7503, lng:-90.3755},
                content:'<h1>St. Louis Lambert International Airport</h1>',
                type:"Activity"
            },
           
            {
                coords:{lat:38.7445, lng:-90.4696},
                content:'<h1>Hollywood Ampitheater</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6556, lng:-90.2979},
                content:'<h1>The Pagent</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6408, lng:-90.2805},
                content:'<h1>The Muny</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6389, lng:-90.2318},
                content:'<h1>The Fox Theater</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.7092, lng:-90.3083},
                content:'<h1>UMSL Hackathon</h1>',
                type:"Activity"
            },
            {
                coords:{lat:40.854295, lng:-76.78757},
                content:'<h1>Wheelhouse</h1>',
                type:"food"
            
            },
            {
                coords:{lat:38.623438, lng:-90.19725},
                content:'<h1>Start Bar/h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.624388, lng:-90.196895},
                content:'<h1>Tin Roof</h1>',
                type:"food"
            },
            {
                coords:{lat:38.7463972, lng:-90.6537455},
                content:'<h1>St. Charles Main Street</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.783090, lng:-90.480043},
                content:'<h1>Big A</h1>',
                type:"food"
            },
            {
                coords:{lat:38.782001, lng:-90.481122},
                content:'<h1>Bobbys Place</h1>',
                type:"food"
            },
            {
                coords:{lat:38.61042, lng:-90.20299},
                content:'<h1>International Tap House</h1>',
                type:"food"
            },
            {
                coords:{lat:38.622536, lng:-90.192711},
                content:'<h1>Ballpark Village</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.628011, lng:-90.25113},
                content:'<h1>Siam</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6268, lng:-90.2027},
                content:'<h1>ScottTrade Center</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6226, lng:-90.1928},
                content:'<h1>Busch Stadium</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6325, lng:-90.2280},
                content:'<h1>Chafetz Arena</h1>',
                type:"Activity"
            },
            {
                coords:{lat:38.6278, lng:-90.2019},
                content:'<h1>Peabody Opera House</h1>',
                type:"Activity"
            },
            {
                coords:{lat:30.701728, lng:-90.292954},
                content:'<h1>WingStop</h1>',
                type:"food"
            },
            {
                coords:{lat:38.711372, lng:-90.308831},
                content:'<h1>Einstein Bros</h1>',
                type:"food"
            },
            {
                coords:{lat:38.711415, lng:-90.320348},
                content:'<h1>St. Louis Kitchen</h1>',
                type:"food"
            },
            {
                coords:{lat:38.717632, lng:-90.327728},
                content:'<h1>Big L Chop Suey</h1>',
                type:"food"
            },
            {
                coords:{lat:38.740457, lng:-90.303121},
                content:'<h1>Vincenzos</h1>',
                type:"food"
            },
            {
                coords:{lat:38.736408, lng:-90.353746},
                content:'<h1>The Pasta House</h1>',
                type:"food"
            },
            {
                coords:{lat:38.717764, lng:-90.327878},
                content:'<h1>Imos Pizza</h1>',
                type:"food"
            },
            {
                coords:{lat:38.594035, lng:-90.230211},
                content:'<h1>La Vallesana</h1>',
                type:"food"
            },
            {
                coords:{lat:38.661589, lng:-90.308779},
                content:'<h1>Mi Ranchito</h1>',
                type:"food"
            },
            {
                coords:{lat:38.655747, lng:-90.300812},
                content:'<h1>Mission Taco Joint</h1>',
                type:"food"
            },
            {
                coords:{lat:38.645193, lng:-90.261858},
                content:'<h1>Burro Loco</h1>',
                type:"food"
            },
            {
                coords:{lat:38.632677, lng:-90.233921},
                content:'<h1>Chipotle</h1>',
                type:"food"
            },
            {
                coords:{lat:38.640026, lng:-90.244652},
                content:'<h1>Qdoba</h1>',
                type:"food"
            },
            {
                coords:{lat:38.708869, lng:-90.317724},
                content:'<h1>Breakaway Cafe</h1>',
                type:"food"
            },
            {
                coords:{lat:38.655767, lng:-90.304959},
                content:'<h1>Blueberry Hill</h1>',
                type:"food"
            },
            {
                coords:{lat:38.708221, lng:-90.299585},
                content:'<h1>Whalens Bar</h1>',
                type:"food"
            },
            {
                coords:{lat:38.635979, lng:-90.261940},
                content:'<h1>Narwhals Crafted Urban Ice</h1>',
                type:"food"
            },
            {
                coords:{lat:38.6379, lng:-90.2258},
                content:'<h1>Urban Chestnut</h1>',
                type:"food"
            },
            {
                coords:{lat:38.645053, lng:-90.261940},
                content:'<h1>Drunken Fish</h1>',
                type:"food"
            },
            {
                coords:{lat:38.757312, lng:-90.468386},
                content:'<h1>Dave & Busters</h1>',
                type:"Activity"
            },
        ];
       console.log(document.getElementById('select-what-you-are-looking-for').value)
    var userPick=document.getElementById('select-what-you-are-looking-for').value;
    if(userPick=="Activity"){
        console.log("in Activity")
        var filteredMarkers=_.filter(markers,{type:userPick});
        markers=filteredMarkers;
        initMap();
    }
    if(userPick=="food"){
        console.log("in food")
        
        var filteredMarkers=_.filter(markers,{type:userPick});
        markers=filteredMarkers;
        console.log(markers,"in food")
        initMap();
    }


    
}