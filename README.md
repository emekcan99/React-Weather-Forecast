# React Weather Forecast 
#### Video Demo:  https://www.youtube.com/watch?v=tjDgULoyQYQ&t=6s&ab_channel=emekcan%C5%9Fanl%C4%B1
#### Description:

*Introduction:*
I want to learn web programing and I researched modern technologies for web programing. The technology I encountered the most was React and I deceted to learn react after cs50x.

*summary*
My final project is a real time single page weather forecast app written with react. Since other APIs are paid, I got the data from weatherbit.io. I pulled data with axios because really easy to use. I preferred to use Context because I want to change data from other components. I used reactstrap to get a more elegant visual and use react-icons for my icons in app.

*how is it works?*

When the app is running, pulls data from weatherbit.io with axios. So which City? I set it to pull from Istanbul as default because why not :).
After that If we want saw the details. We have to click details button, with context we access the data and shows top right.If we want to access another city weather forecast. We have to use form left top in the app. When entered a city name in input area and clicked the button.Application send a request weatherbit.io and shows the response.If we want to change units application automatically sends a request weatherbit.io and shows the changing data. I wrote custom handle functions in units,form .etc because When I changed units api didn't return a unit name and I had to writte that manually.I used useEffect hook to shows data the first time it runs I aslo add units parameter in this hook because I want to send a request when unit changed.

*which technologies i used and why ?*

1) React / React hooks -> because I want to learn  web programing
2) Context -> I need to access and change data from another components 
3) Rest Api -> I need weather forecast data
4) Axios  -> Because axios easier than fetch 
5) Reactstrap -> for styling and easy to use
6) React-icons -> To be more elegant and understandable
7) Custom css

*how can I use?*
1) firstly you need react packages and some code editor you can visit react website and dowland there 
2) you have to use npm i command because we need some packages
3) after that you just write that 'npm run start' in terminal and opens in a window and enjoy! 

*What I learned?*
The most important thing I learned how to I learn by myself.
I learned little bit web,javascript,front end, asynchronous programming, react etc. 
I discovered what I enjoy. I had a lot of fun writing (not always :) ). I hope you have fun too.

Name:Emekcan Surname:Şanlı GithubName:emekcan99 


