 

$( document ).ready(function() {

    let countries = [];

    let mapOptions = {
        zoom: 3,
        minZoom: 1,
        center: new google.maps.LatLng(50.7244893,3.2668189),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        backgroundColor: 'none'
    };

    let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    console.log("Вызов инит",map);
    init();

    function init() {
        $.ajax({
            url : "./src/json/data.json",
            cache : true,
            dataType : "json",
            async : true,

            success : function(data) {
                console.log("Data",data);
                if (data) {

                    $.each(data, function(id,country) {

                        var countryCoords;
                        var ca;
                        var co;

                        if ('multi' in country) {

                            var ccArray = [];

                            for (var t in country['xml']['Polygon']) {

                                countryCoords = [];

                                co = country['xml']['Polygon'][t]['outerBoundaryIs']['LinearRing']['coordinates'].split(' ');

                                for (var i in co) {

                                    ca = co[i].split(',');

                                    countryCoords.push(new google.maps.LatLng(ca[1], ca[0]));
                                }

                                ccArray.push(countryCoords);
                            }

                            createCountry(ccArray,country);

                        } else {

                            countryCoords = [];

                            co = country['xml']['outerBoundaryIs']['LinearRing']['coordinates'].split(' ');

                            for (var j in co) {

                                ca = co[j].split(',');

                                countryCoords.push(new google.maps.LatLng(ca[1], ca[0]));
                            }

                            createCountry(countryCoords,country);
                        }
                    }.bind(this));
         console.log("countries ====",countries);
                    showCountries();
                }
            }.bind(this),
            error: function (error) {
                console.log("Ошибка ",error)
              },
        });
    }

    function showCountries() {

        console.log("Countries =",countries);
        for (var i=0; i<countries.length; i++) {
            countries[i].setMap(map);

            google.maps.event.addListener(countries[i],"mouseover",function(){
                this.setOptions({fillColor: "#f5c879", 'fillOpacity': 0.5});
            });

            google.maps.event.addListener(countries[i],"mouseout",function(){
                this.setOptions({fillColor: "#f5c879", 'fillOpacity': 0});
            });

            google.maps.event.addListener(countries[i], 'click', function(event) {
                alert(this.title+' ('+this.code+')');
            });
        }
    }
    // function showCountriesName(contry) {}

    function createCountry(coords, country) {
        var currentCountry = new google.maps.Polygon({
            paths: coords,
            //strokeColor: 'white',
            title: country.country,
            code: country.iso,
            strokeOpacity: 0,
            //strokeWeight: 1,
            //fillColor: country['color'], // can be used as default color
            fillOpacity: 0
        });

        countries.push(currentCountry);
    }

});


 
