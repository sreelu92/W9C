var tweets=["Walks in the park and time in #nature are the safest places for our children during the pandemic",
"Canada has a real opportunity to invest in nature. We need to be ambitious,we want nature to thrive, not just survive.",
" Environmental groups have been ringing alarm bells over selenium pollution.","Canada is about to invest massive amounts of public money in recovery programs.",
"the air pollution case has grown stronger and stronger, as the science on air pollution has advanced by leaps and bounds.",
"As cities continue to expand, and #bird populations continue to decline","The past 250 years of human land use changed North American landscapes even more than the recession of mile-thick glaciers 12,000 years ago did.",
" Nature has been a source of comfort for many Canadians during the pandemic lockdowns.","Killing the sea lions isn't going to help the #salmon population ",
"The globally endangered #butterfly now flies in greater number in Britain than anywhere else in the world, four decades after it became extinct in the country.",
"Canada is the first country in the world to approve the production of a genetically engineered salmon for human consumption."]

for(index=0;index<tweets.length;index++)
{
    var content=tweets[index];
    console.log(content);
}



var newTweets=[{tweet:"Walks in the park and time in #nature are the safest places for our children during the pandemic",
username:"Andrew",created_at:"01/02/2020",age:21},
{tweet:"Canada has a real opportunity to invest in nature. We need to be ambitious,we want nature to thrive, not just survive.",
username:"Ann",created_at:"02/02/2020",age:24},
{tweet:"Environmental groups have been ringing alarm bells over selenium pollution.",
username:"James",created_at:"03/02/2020",age:27},
{tweet:"Canada is about to invest massive amounts of public money in recovery programs.",
username:"Jacob",created_at:"03/03/2020",age:30},
{tweet:"the air pollution case has grown stronger and stronger, as the science on air pollution has advanced by leaps and bounds.",
username:"Rini",created_at:"03/04/2020",age:25},
{tweet:"As cities continue to expand, and #bird populations continue to decline",
username:"Shaun",created_at:"03/05/2020",age:35},
{tweet:"The past 250 years of human land use changed North American landscapes even more than the recession of mile-thick glaciers 12,000 years ago did.",
username:"Annie",created_at:"04/05/2020",age:40},
{tweet:" Nature has been a source of comfort for many Canadians during the pandemic lockdowns.",
username:"Rachel",created_at:"04/06/2020",age:28},
{tweet:"Killing the sea lions isn't going to help the #salmon population ",
username:"Reeta",created_at:"05/21/2020",age:30},
{tweet:"The globally endangered #butterfly now flies in greater number in Britain than anywhere else in the world, four decades after it became extinct in the country.",
username:"Kim",created_at:"06/01/2020",age:45},
{tweet:"Canada is the first country in the world to approve the production of a genetically engineered salmon for human consumption.",
username:"Karey",created_at:"06/15/2020",age:42}
]
for(index1=0;index1<newTweets.length;index1++) {
    var term=(Object.keys(newTweets[index1])[0]);
    var term1=(Object.keys(newTweets[index1])[1]);
    var term2=(Object.keys(newTweets[index1])[2]);

    console.log("tweet:",newTweets[index1][term]);
    console.log("username:",newTweets[index1][term1]);
    console.log("created_at:",newTweets[index1][term2]);


    


}
