# WD.290.Activity-5-Ajax-Interactions-

This week's assignment is going to be graded as an activity. It will be pass/fail based on effort. This is not to imply that it is not important. This material is absolutely critical and you will not be able to do much in the next portion of class if you are unable to write this kind of program.
However, it is also quite challenging and it is not uncommon to not get it working all the way within a week the first time you are doing it.


Deliverables:
You should submit a zip file with one or two html pages and as many js or css files as you need.


Requirements:

The HTML page(s) should have two forms. The first is the form you will construct in the activity that connect to Open Weather Map, lets a user input a CITY_NAME, COUNTRY_CODE OR ZIP_CODE,COUNTRY_CODE and asynchronously shows the weather information retrieved from Open Weather Map (via a GET). You need to sign up on the OpenWeatherMaps website in order to get your own appID https://home.openweathermap.org/users/sign_up (Links to an external site.)

The format for the City GET request URL should be: http://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={your api key}

The format for the Zip GET request URL should be: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

The other should be a form that submits to http://httpbin.org/post.

This form should submit asynchronously via a POST. It needs to send a content-type of application/json (you can also experiment with other content-types like application/x-www-form-urlencoded). You should display the data you get back (which should match the data you send). It will be stored as a string in the data field of the JSON encoded string returned from the server.

If you run into trouble, you can use a tool like https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo (Links to an external site.)

which will let you submit data manually via a GUI to check what the output looks like.



Note: Google is shutting down their API shortener so you may not be able to use it anymore.
