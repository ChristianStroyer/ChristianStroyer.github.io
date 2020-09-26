console.log ("Working")


var books = {

	"books":[

		{"title":"Det forsvundene tegn",				"serie":"langdon-serien (3)",		"startdato":"2020-01-07",	"slutdato":"2020-02-04",	"sider":[0,30,55,62,79,116,138,167,190,203,221,274,285,319,342,389,414,446,479,494,522,552,577,586,616,638,661,676,680]},
		{"title":"Inferno",								"serie":"langdon-serien (4)",		"startdato":"2020-02-04",	"slutdato":"2020-02-25",	"sider":[0,26,48,64,87,117,140,164,200,224,258,276,303,326,350,375,408,432,480,500,527,547]},
		{"title":"oprindelse",							"serie":"langdon-serien (5)",		"startdato":"2020-02-25",	"slutdato":"2020-03-19",	"sider":[0,30,52,73,96,108,128,164,178,188,190,228,260,276,308,332,359,400,428,454,482,501,524,555]},
		{"title":"The hitchhikers guid to the galaxy",	"serie":"a trilogy in four parts",	"startdato":"2020-03-19",	"slutdato":"2020-05-27",	"sider":[0,30,50,62,80,92,102,110,116,128,142,150,172,186,198,204,212,214,216,219,224,229,237,251,257,261,273,278,289,300,306,316,322,328,336,343,346,360,368,278,383,392,400,408,414,420,428,440,446,449,460,467,472,475,480,484,490,496,504,508,518,522,524,526,528,560,574,579,584,590]},
		{"title":"Tyranens Gravkamer",					"serie":"Apollons prøvelser",		"startdato":"2020-05-27",	"slutdato":"2020-06-27",	"sider":[0,49,55,73,96,119,130,154,160,180,194,202,226,246,273,288,290,291,302,315,326,344,363,370,390,392,404,417,440,458,460,465]},
		{"title":"9 fra de ni verdner",					"serie":"magnus chase",				"startdato":"2020-06-27",	"slutdato":"2020-07-04",	"sider":[0,27,53,79,96,108,126,137]},
		{"title":"Dæmonernes by",						"serie":"dødens instrumenter",		"startdato":"2020-07-04",	"slutdato":"2020-07-15",	"sider":[0,43,109,142,197,231,246,327,363,393,421,448]},
		{"title":"Den Tavse by",						"serie":"dødens instrumenter",		"startdato":"2020-07-15",	"slutdato":"2020-07-24",	"sider":[0,41,69,102,136,156,184,308,387,403]},
		{"title":"Englenes by",							"serie":"dødens instrumenter",		"startdato":"2020-07-24",	"slutdato":"2020-08-03",	"sider":[0,142,167,204,288,325,392,438,457,475,490]},
		{"title":"de faldene engles by",				"serie":"dødens instrumenter",		"startdato":"2020-08-03",	"slutdato":"2020-08-29",	"sider":[0,59,65,85,104,116,141,146,154,164,183,193,209,232,247,258,273,294,308,319,329,337,345,354,362,369,377]}

	]

}

var test_jason = {

	"books":[

		{"title":"bog_1",		"serie":"serie_1",		"startdato":"2020-08-14",	"slutdato":"2020-08-20",	"sider":[{"side":0,"dato":"2020-08-14"},{"side":30,"dato":"2020-08-15"},{"side":70,"dato":"2020-08-16"},{"side":100,"dato":"2020-08-17"},{"side":150,"dato":"2020-08-18"},{"side":180,"dato":"2020-08-19"},{"side":200,"dato":"2020-08-20"}]},
		{"title":"bog_2",		"serie":"serie_1",		"startdato":"2020-08-20",	"slutdato":"2020-08-24",	"sider":[{"side":0,"dato":"2020-08-20"},{"side":150,"dato":"2020-08-24"}]},
		{"title":"bog_3",		"serie":"serie_2",		"startdato":"2020-08-24",	"slutdato":"2020-08-29",	"sider":[{"side":0,"dato":"2020-08-24"},{"side":75,"dato":"2020-08-25"},{"side":220,"dato":"2020-08-29"}]}

	]

}

var first_shown_date = "2020-08-10"
var intarval_sice = 25


var visningsmode = "side kommet til" // "side kommet til", "sider læst"




function setup () {
	createCanvas(750,500)
	opdate_wiew()
}

function draw () {

	
	
}


function opdate_wiew () {
	background(120)

	for (var i = 0; i < test_jason.books.length; i++) {


		//graffer
		fill(color(Math.floor(Math.random() * 156),Math.floor(Math.random() * 156),Math.floor(Math.random() * 156)))
		beginShape()
		vertex(days_betwin_dates(test_jason.books[i].sider[0].dato,first_shown_date)*intarval_sice,450 - 0)
		for (var j = 1; j < test_jason.books[i].sider.length; j++) {
			let x;
			let y;
			if(visningsmode == "side kommet til"){
				x = days_betwin_dates(test_jason.books[i].sider[j].dato,first_shown_date)*intarval_sice
				y = 450 - test_jason.books[i].sider[j].side
			}else if(visningsmode == "sider læst"){
				x = days_betwin_dates(test_jason.books[i].sider[j].dato,first_shown_date)*intarval_sice
				y = 450 - (test_jason.books[i].sider[j].side - test_jason.books[i].sider[j-1].side)
			}else{
				console.alert("fejl")
			}
			vertex(x,y)
		}
		vertex(days_betwin_dates(test_jason.books[i].sider[test_jason.books[i].sider.length-1].dato,first_shown_date)*intarval_sice,450 - 0)
		endShape(/*CLOSE*/)
		



		//tekst
		let startdato = days_betwin_dates(test_jason.books[i].sider[0].dato,first_shown_date)
		let slutdato = days_betwin_dates(test_jason.books[i].sider[test_jason.books[i].sider.length-1].dato,first_shown_date)
		let graf_midt = (startdato + slutdato) / 2

		textSize(15)
		textAlign(CENTER);
		text(test_jason.books[i].title, graf_midt * intarval_sice, 465);
		text(test_jason.books[i].serie, graf_midt * intarval_sice, 485);

	}

}











function days_betwin_dates (date_1, date_2) {
	var day_1 = Date.parse(date_1) / 86400000
	var day_2 = Date.parse(date_2) / 86400000

	return (day_1 - day_2)
}


