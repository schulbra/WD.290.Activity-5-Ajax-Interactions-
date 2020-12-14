//-----------------------------------------------------------------------------------------------//
//	Name: Brandon Schultz                                                                        //
//	Date: 5-12-20                                                                                //
//	Description: Assignment Five - AJAX interactions                                             //
//-----------------------------------------------------------------------------------------------//

document.addEventListener('DOMContentLoaded', bindButtons);

//-----------------------------------------------------------------------------------------------//
//	-Function used in conjunction with the City/Zip get request forms from index.html to obtain  //
//  and display weather data for city/zip entered as input from                                  //
//	"https://home.openweathermap.org/".                                                          //
//	-Heavily inspired by reference code in this week's module:                                   //
//	https://eecs.oregonstate.edu/ecampus-video/CS290/core-content/ajax-forms/js-forms.html       //
//-----------------------------------------------------------------------------------------------//
function bindButtons()
{
	document.getElementById('weatherLookUp').addEventListener('click', function(e)
	{
		//request data from server asscoiated with URL.
		var req = new XMLHttpRequest();
		//URL that will return weather info dependent upon user input.
		var url = "http://api.openweathermap.org/data/2.5/weather?";
		//My appid, used to prevent abuse of server associated with URL.
		var appId = "&appid=6fc5082f03484a82fdf1c26eae7f2e03";
		//Returns element object representing element whose id matches specific string.
		//Ensures that city names/zips are only input that generates a return of temp data.
		var cityInput = document.getElementById("cityLookUpTemp").value;
		var zipCodeInput = document.getElementById("zipLookUpTemp").value;
		if (zipCodeInput === '')
		{
			formInput = "q=" + cityInput;
		}

		else
		{
			formInput = "zip=" + zipCodeInput;
		}

		var finalUrl = url + formInput + appId + '&units=imperial';
		req.open("GET", finalUrl, true);
		req.addEventListener('load', function()
		{
			//If html status code from server is in range of [200(ok) - 400(not ok)]
			//return temperature data of specific city/zip input by user.
			if (req.status >= 200 && req.status < 400)
			{
				var res = JSON.parse(req.responseText);
				weatherResponse(res);
			}
			//If html status value isnt in rnage, return network error prompt.
			else
			{
				var str = "Error | That doesn't look like anything to me." + res.statusText;
				console.log(str);
				alert(str);
			}
		});

		req.send();
		e.preventDefault();
	});

	//-------------------------------------------------------------------------------------------//
    //	-Porition of button function that allowes asynchronous submission of input via a POST to //
    //	"http://httpbin.org/post" before displaying the same data sent back.                     //
    //-------------------------------------------------------------------------------------------//
	document.getElementById('pasteSubmit').addEventListener('click', function(e)
	{
		var req = new XMLHttpRequest();
		var url = "http://httpbin.org/post";
		var payload =
		{
			'name': null,
			'social': null,
		};

		payload.name = document.getElementById('in-name').value;
		payload.social = document.getElementById('in-social').value;

		req.open("POST", url, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function()
		{
			if (req.status >= 200 && req.status < 400)
			{
				var res = JSON.parse(JSON.parse(req.responseText).data);
				console.log(res);
				postResponse(res);
			}

			else
			{
				var str = "Error | That doesn't look like anything to me. " + res.statusText;
				console.log(str);
				alert(str);
			}
		});

		req.send(JSON.stringify(payload));
		e.preventDefault();
	});
}

function postResponse(res)
{
	document.getElementById('out-name').textContent = res.name;
	document.getElementById('out-social').textContent = res.social;
}

function weatherResponse(res)
{
	document.getElementById('city').textContent = res.name;
	document.getElementById('temperature').textContent = res.main.temp;
	document.getElementById('24hrHigh').textContent = res.main.temp_max;
	document.getElementById('24hrLow').textContent = res.main.temp_min;
	console.log(res);
}	