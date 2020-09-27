console.log ("Working")


var books = {
/*
	"books_minus_mellemdatoer":[

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
*/



	"done_data":[
		{"title":"Det forsvundene tegn",				"serie":"langdon-serien (3)",		"startdato":"2020-01-07",	"slutdato":"2020-02-04",	"main_collor":"",	"sider":[{"dato":"2020-01-07T00:00:00.000Z","side":0},{"dato":"2020-01-08T00:00:00.000Z","side":30},{"dato":"2020-01-09T00:00:00.000Z","side":55},{"dato":"2020-01-10T00:00:00.000Z","side":62},{"dato":"2020-01-11T00:00:00.000Z","side":79},{"dato":"2020-01-12T00:00:00.000Z","side":116},{"dato":"2020-01-13T00:00:00.000Z","side":138},{"dato":"2020-01-14T00:00:00.000Z","side":167},{"dato":"2020-01-15T00:00:00.000Z","side":190},{"dato":"2020-01-16T00:00:00.000Z","side":203},{"dato":"2020-01-17T00:00:00.000Z","side":221},{"dato":"2020-01-18T00:00:00.000Z","side":274},{"dato":"2020-01-19T00:00:00.000Z","side":285},{"dato":"2020-01-20T00:00:00.000Z","side":319},{"dato":"2020-01-21T00:00:00.000Z","side":342},{"dato":"2020-01-22T00:00:00.000Z","side":389},{"dato":"2020-01-23T00:00:00.000Z","side":414},{"dato":"2020-01-24T00:00:00.000Z","side":446},{"dato":"2020-01-25T00:00:00.000Z","side":479},{"dato":"2020-01-26T00:00:00.000Z","side":494},{"dato":"2020-01-27T00:00:00.000Z","side":522},{"dato":"2020-01-28T00:00:00.000Z","side":552},{"dato":"2020-01-29T00:00:00.000Z","side":577},{"dato":"2020-01-30T00:00:00.000Z","side":586},{"dato":"2020-01-31T00:00:00.000Z","side":616},{"dato":"2020-02-01T00:00:00.000Z","side":638},{"dato":"2020-02-02T00:00:00.000Z","side":661},{"dato":"2020-02-03T00:00:00.000Z","side":676},{"dato":"2020-02-04T00:00:00.000Z","side":680}]},
		{"title":"Inferno",								"serie":"langdon-serien (4)",		"startdato":"2020-02-04",	"slutdato":"2020-02-25",	"main_collor":"",	"sider":[{"dato":"2020-02-04T00:00:00.000Z","side":0},{"dato":"2020-02-05T00:00:00.000Z","side":26},{"dato":"2020-02-06T00:00:00.000Z","side":48},{"dato":"2020-02-07T00:00:00.000Z","side":64},{"dato":"2020-02-08T00:00:00.000Z","side":87},{"dato":"2020-02-09T00:00:00.000Z","side":117},{"dato":"2020-02-10T00:00:00.000Z","side":140},{"dato":"2020-02-11T00:00:00.000Z","side":164},{"dato":"2020-02-12T00:00:00.000Z","side":200},{"dato":"2020-02-13T00:00:00.000Z","side":224},{"dato":"2020-02-14T00:00:00.000Z","side":258},{"dato":"2020-02-15T00:00:00.000Z","side":276},{"dato":"2020-02-16T00:00:00.000Z","side":303},{"dato":"2020-02-17T00:00:00.000Z","side":326},{"dato":"2020-02-18T00:00:00.000Z","side":350},{"dato":"2020-02-19T00:00:00.000Z","side":375},{"dato":"2020-02-20T00:00:00.000Z","side":408},{"dato":"2020-02-21T00:00:00.000Z","side":432},{"dato":"2020-02-22T00:00:00.000Z","side":480},{"dato":"2020-02-23T00:00:00.000Z","side":500},{"dato":"2020-02-24T00:00:00.000Z","side":527},{"dato":"2020-02-25T00:00:00.000Z","side":547}]},
		{"title":"oprindelse",							"serie":"langdon-serien (5)",		"startdato":"2020-02-25",	"slutdato":"2020-03-19",	"main_collor":"",	"sider":[{"dato":"2020-02-25T00:00:00.000Z","side":0},{"dato":"2020-02-26T00:00:00.000Z","side":30},{"dato":"2020-02-27T00:00:00.000Z","side":52},{"dato":"2020-02-28T00:00:00.000Z","side":73},{"dato":"2020-02-29T00:00:00.000Z","side":96},{"dato":"2020-03-01T00:00:00.000Z","side":108},{"dato":"2020-03-02T00:00:00.000Z","side":128},{"dato":"2020-03-03T00:00:00.000Z","side":164},{"dato":"2020-03-04T00:00:00.000Z","side":178},{"dato":"2020-03-05T00:00:00.000Z","side":188},{"dato":"2020-03-06T00:00:00.000Z","side":190},{"dato":"2020-03-07T00:00:00.000Z","side":228},{"dato":"2020-03-08T00:00:00.000Z","side":260},{"dato":"2020-03-09T00:00:00.000Z","side":276},{"dato":"2020-03-10T00:00:00.000Z","side":308},{"dato":"2020-03-11T00:00:00.000Z","side":332},{"dato":"2020-03-12T00:00:00.000Z","side":359},{"dato":"2020-03-13T00:00:00.000Z","side":400},{"dato":"2020-03-14T00:00:00.000Z","side":428},{"dato":"2020-03-15T00:00:00.000Z","side":454},{"dato":"2020-03-16T00:00:00.000Z","side":482},{"dato":"2020-03-17T00:00:00.000Z","side":501},{"dato":"2020-03-18T00:00:00.000Z","side":524},{"dato":"2020-03-19T00:00:00.000Z","side":555}]},
		{"title":"The hitchhikers guid to the galaxy",	"serie":"a trilogy in four parts",	"startdato":"2020-03-19",	"slutdato":"2020-05-27",	"main_collor":"",	"sider":[{"dato":"2020-03-19T00:00:00.000Z","side":0},{"dato":"2020-03-20T00:00:00.000Z","side":30},{"dato":"2020-03-21T00:00:00.000Z","side":50},{"dato":"2020-03-22T00:00:00.000Z","side":62},{"dato":"2020-03-23T00:00:00.000Z","side":80},{"dato":"2020-03-24T00:00:00.000Z","side":92},{"dato":"2020-03-25T00:00:00.000Z","side":102},{"dato":"2020-03-26T00:00:00.000Z","side":110},{"dato":"2020-03-27T00:00:00.000Z","side":116},{"dato":"2020-03-28T00:00:00.000Z","side":128},{"dato":"2020-03-29T00:00:00.000Z","side":142},{"dato":"2020-03-30T00:00:00.000Z","side":150},{"dato":"2020-03-31T00:00:00.000Z","side":172},{"dato":"2020-04-01T00:00:00.000Z","side":186},{"dato":"2020-04-02T00:00:00.000Z","side":198},{"dato":"2020-04-03T00:00:00.000Z","side":204},{"dato":"2020-04-04T00:00:00.000Z","side":212},{"dato":"2020-04-05T00:00:00.000Z","side":214},{"dato":"2020-04-06T00:00:00.000Z","side":216},{"dato":"2020-04-07T00:00:00.000Z","side":219},{"dato":"2020-04-08T00:00:00.000Z","side":224},{"dato":"2020-04-09T00:00:00.000Z","side":229},{"dato":"2020-04-10T00:00:00.000Z","side":237},{"dato":"2020-04-11T00:00:00.000Z","side":251},{"dato":"2020-04-12T00:00:00.000Z","side":257},{"dato":"2020-04-13T00:00:00.000Z","side":261},{"dato":"2020-04-14T00:00:00.000Z","side":273},{"dato":"2020-04-15T00:00:00.000Z","side":278},{"dato":"2020-04-16T00:00:00.000Z","side":289},{"dato":"2020-04-17T00:00:00.000Z","side":300},{"dato":"2020-04-18T00:00:00.000Z","side":306},{"dato":"2020-04-19T00:00:00.000Z","side":316},{"dato":"2020-04-20T00:00:00.000Z","side":322},{"dato":"2020-04-21T00:00:00.000Z","side":328},{"dato":"2020-04-22T00:00:00.000Z","side":336},{"dato":"2020-04-23T00:00:00.000Z","side":343},{"dato":"2020-04-24T00:00:00.000Z","side":346},{"dato":"2020-04-25T00:00:00.000Z","side":360},{"dato":"2020-04-26T00:00:00.000Z","side":368},{"dato":"2020-04-27T00:00:00.000Z","side":378},{"dato":"2020-04-28T00:00:00.000Z","side":383},{"dato":"2020-04-29T00:00:00.000Z","side":392},{"dato":"2020-04-30T00:00:00.000Z","side":400},{"dato":"2020-05-01T00:00:00.000Z","side":408},{"dato":"2020-05-02T00:00:00.000Z","side":414},{"dato":"2020-05-03T00:00:00.000Z","side":420},{"dato":"2020-05-04T00:00:00.000Z","side":428},{"dato":"2020-05-05T00:00:00.000Z","side":440},{"dato":"2020-05-06T00:00:00.000Z","side":446},{"dato":"2020-05-07T00:00:00.000Z","side":449},{"dato":"2020-05-08T00:00:00.000Z","side":460},{"dato":"2020-05-09T00:00:00.000Z","side":467},{"dato":"2020-05-10T00:00:00.000Z","side":472},{"dato":"2020-05-11T00:00:00.000Z","side":475},{"dato":"2020-05-12T00:00:00.000Z","side":480},{"dato":"2020-05-13T00:00:00.000Z","side":484},{"dato":"2020-05-14T00:00:00.000Z","side":490},{"dato":"2020-05-15T00:00:00.000Z","side":496},{"dato":"2020-05-16T00:00:00.000Z","side":504},{"dato":"2020-05-17T00:00:00.000Z","side":508},{"dato":"2020-05-18T00:00:00.000Z","side":518},{"dato":"2020-05-19T00:00:00.000Z","side":522},{"dato":"2020-05-20T00:00:00.000Z","side":524},{"dato":"2020-05-21T00:00:00.000Z","side":526},{"dato":"2020-05-22T00:00:00.000Z","side":528},{"dato":"2020-05-23T00:00:00.000Z","side":560},{"dato":"2020-05-24T00:00:00.000Z","side":574},{"dato":"2020-05-25T00:00:00.000Z","side":579},{"dato":"2020-05-26T00:00:00.000Z","side":584},{"dato":"2020-05-27T00:00:00.000Z","side":590}]},
		{"title":"Tyranens Gravkamer",					"serie":"Apollons prÃ¸velser",		"startdato":"2020-05-27",	"slutdato":"2020-06-27",	"main_collor":"",	"sider":[{"dato":"2020-05-27T00:00:00.000Z","side":0},{"dato":"2020-05-28T00:00:00.000Z","side":49},{"dato":"2020-05-29T00:00:00.000Z","side":55},{"dato":"2020-05-30T00:00:00.000Z","side":73},{"dato":"2020-05-31T00:00:00.000Z","side":96},{"dato":"2020-06-01T00:00:00.000Z","side":119},{"dato":"2020-06-02T00:00:00.000Z","side":130},{"dato":"2020-06-03T00:00:00.000Z","side":154},{"dato":"2020-06-04T00:00:00.000Z","side":160},{"dato":"2020-06-05T00:00:00.000Z","side":180},{"dato":"2020-06-06T00:00:00.000Z","side":194},{"dato":"2020-06-07T00:00:00.000Z","side":202},{"dato":"2020-06-08T00:00:00.000Z","side":226},{"dato":"2020-06-09T00:00:00.000Z","side":246},{"dato":"2020-06-10T00:00:00.000Z","side":273},{"dato":"2020-06-11T00:00:00.000Z","side":288},{"dato":"2020-06-12T00:00:00.000Z","side":290},{"dato":"2020-06-13T00:00:00.000Z","side":291},{"dato":"2020-06-14T00:00:00.000Z","side":302},{"dato":"2020-06-15T00:00:00.000Z","side":315},{"dato":"2020-06-16T00:00:00.000Z","side":326},{"dato":"2020-06-17T00:00:00.000Z","side":344},{"dato":"2020-06-18T00:00:00.000Z","side":363},{"dato":"2020-06-19T00:00:00.000Z","side":370},{"dato":"2020-06-20T00:00:00.000Z","side":390},{"dato":"2020-06-21T00:00:00.000Z","side":392},{"dato":"2020-06-22T00:00:00.000Z","side":404},{"dato":"2020-06-23T00:00:00.000Z","side":417},{"dato":"2020-06-24T00:00:00.000Z","side":440},{"dato":"2020-06-25T00:00:00.000Z","side":458},{"dato":"2020-06-26T00:00:00.000Z","side":460},{"dato":"2020-06-27T00:00:00.000Z","side":465}]},
		{"title":"9 fra de ni verdner",					"serie":"magnus chase",				"startdato":"2020-06-27",	"slutdato":"2020-07-04",	"main_collor":"",	"sider":[{"dato":"2020-06-27T00:00:00.000Z","side":0},{"dato":"2020-06-28T00:00:00.000Z","side":27},{"dato":"2020-06-29T00:00:00.000Z","side":53},{"dato":"2020-06-30T00:00:00.000Z","side":79},{"dato":"2020-07-01T00:00:00.000Z","side":96},{"dato":"2020-07-02T00:00:00.000Z","side":108},{"dato":"2020-07-03T00:00:00.000Z","side":126},{"dato":"2020-07-04T00:00:00.000Z","side":137}]},
		{"title":"DÃ¦monernes by",						"serie":"dÃ¸dens instrumenter",		"startdato":"2020-07-04",	"slutdato":"2020-07-15",	"main_collor":"",	"sider":[{"dato":"2020-07-04T00:00:00.000Z","side":0},{"dato":"2020-07-05T00:00:00.000Z","side":43},{"dato":"2020-07-06T00:00:00.000Z","side":109},{"dato":"2020-07-07T00:00:00.000Z","side":142},{"dato":"2020-07-08T00:00:00.000Z","side":197},{"dato":"2020-07-09T00:00:00.000Z","side":231},{"dato":"2020-07-10T00:00:00.000Z","side":246},{"dato":"2020-07-11T00:00:00.000Z","side":327},{"dato":"2020-07-12T00:00:00.000Z","side":363},{"dato":"2020-07-13T00:00:00.000Z","side":393},{"dato":"2020-07-14T00:00:00.000Z","side":421},{"dato":"2020-07-15T00:00:00.000Z","side":448}]},
		{"title":"Den Tavse by",						"serie":"dÃ¸dens instrumenter",		"startdato":"2020-07-15",	"slutdato":"2020-07-24",	"main_collor":"",	"sider":[{"dato":"2020-07-15T00:00:00.000Z","side":0},{"dato":"2020-07-16T00:00:00.000Z","side":41},{"dato":"2020-07-17T00:00:00.000Z","side":69},{"dato":"2020-07-18T00:00:00.000Z","side":102},{"dato":"2020-07-19T00:00:00.000Z","side":136},{"dato":"2020-07-20T00:00:00.000Z","side":156},{"dato":"2020-07-21T00:00:00.000Z","side":184},{"dato":"2020-07-22T00:00:00.000Z","side":308},{"dato":"2020-07-23T00:00:00.000Z","side":387},{"dato":"2020-07-24T00:00:00.000Z","side":403}]},{"title":"Englenes by","serie":"dÃ¸dens instrumenter","startdato":"2020-07-24","slutdato":"2020-08-03","sider":[{"dato":"2020-07-24T00:00:00.000Z","side":0},{"dato":"2020-07-25T00:00:00.000Z","side":142},{"dato":"2020-07-26T00:00:00.000Z","side":167},{"dato":"2020-07-27T00:00:00.000Z","side":204},{"dato":"2020-07-28T00:00:00.000Z","side":288},{"dato":"2020-07-29T00:00:00.000Z","side":325},{"dato":"2020-07-30T00:00:00.000Z","side":392},{"dato":"2020-07-31T00:00:00.000Z","side":438},{"dato":"2020-08-01T00:00:00.000Z","side":457},{"dato":"2020-08-02T00:00:00.000Z","side":475},{"dato":"2020-08-03T00:00:00.000Z","side":490}]},
		{"title":"de faldene engles by",				"serie":"dÃ¸dens instrumenter",		"startdato":"2020-08-03",	"slutdato":"2020-08-29",	"main_collor":"",	"sider":[{"dato":"2020-08-03T00:00:00.000Z","side":0},{"dato":"2020-08-04T00:00:00.000Z","side":59},{"dato":"2020-08-05T00:00:00.000Z","side":65},{"dato":"2020-08-06T00:00:00.000Z","side":85},{"dato":"2020-08-07T00:00:00.000Z","side":104},{"dato":"2020-08-08T00:00:00.000Z","side":116},{"dato":"2020-08-09T00:00:00.000Z","side":141},{"dato":"2020-08-10T00:00:00.000Z","side":146},{"dato":"2020-08-11T00:00:00.000Z","side":154},{"dato":"2020-08-12T00:00:00.000Z","side":164},{"dato":"2020-08-13T00:00:00.000Z","side":183},{"dato":"2020-08-14T00:00:00.000Z","side":193},{"dato":"2020-08-15T00:00:00.000Z","side":209},{"dato":"2020-08-16T00:00:00.000Z","side":232},{"dato":"2020-08-17T00:00:00.000Z","side":247},{"dato":"2020-08-18T00:00:00.000Z","side":258},{"dato":"2020-08-19T00:00:00.000Z","side":273},{"dato":"2020-08-20T00:00:00.000Z","side":294},{"dato":"2020-08-21T00:00:00.000Z","side":308},{"dato":"2020-08-22T00:00:00.000Z","side":319},{"dato":"2020-08-23T00:00:00.000Z","side":329},{"dato":"2020-08-24T00:00:00.000Z","side":337},{"dato":"2020-08-25T00:00:00.000Z","side":345},{"dato":"2020-08-26T00:00:00.000Z","side":354},{"dato":"2020-08-27T00:00:00.000Z","side":362},{"dato":"2020-08-28T00:00:00.000Z","side":369},{"dato":"2020-08-29T00:00:00.000Z","side":377}]}
	]

/*
	"test_data":[

		{"title":"bog_1",		"serie":"serie_1",		"startdato":"2020-08-14",	"slutdato":"2020-08-20",	"sider":[{"side":0,"dato":"2020-08-14"},{"side":30,"dato":"2020-08-15"},{"side":70,"dato":"2020-08-16"},{"side":100,"dato":"2020-08-17"},{"side":150,"dato":"2020-08-18"},{"side":180,"dato":"2020-08-19"},{"side":200,"dato":"2020-08-20"}]},
		{"title":"bog_2",		"serie":"serie_1",		"startdato":"2020-08-20",	"slutdato":"2020-08-24",	"sider":[{"side":0,"dato":"2020-08-20"},{"side":150,"dato":"2020-08-24"}]},
		{"title":"bog_3",		"serie":"serie_2",		"startdato":"2020-08-24",	"slutdato":"2020-08-29",	"sider":[{"side":0,"dato":"2020-08-24"},{"side":25,"dato":"2020-08-25"},{"side":220,"dato":"2020-08-29"}]}

	]
*/

}

/*
// skal ikke bruge medmindre der skal sættes nye mellempunkter ind
function beregnDato() {	
	for(let i=0; i<books.books.length; i++) {		
		let startdato = Date.parse( books.books[i].startdato )
		for(let j=0; j<books.books[i].sider.length; j++) {
			let sider = books.books[i].sider[j]
			let ny_dato = new Date( startdato+j*24*60*60*1000) ;
			let ny_sider= { dato: ny_dato, side: sider }
			books.books[i].sider[j] = ny_sider;
		}		
	}	
	console.log( JSON.stringify( books ) );	
}
*/



var first_shown_date = "2020-07-01"
var intarval_sice = 20


var visningsmode = "sider læst" // "side kommet til", "sider læst"




function setup () {
	createCanvas(750,500)
	set_main_collor()


	button = createButton("skift visnings mode");
	button.position(50, 50);
	button.mousePressed(change_visningsmode);




	button = createButton(">");
	button.position(80, 80);
	button.mousePressed(flyt_wiev_plus_ti);

	button = createButton("<");
	button.position(50, 80);
	button.mousePressed(flyt_wiev_minus_ti);
	



	opdate_wiew()
}

function draw () {


	
}


function opdate_wiew () {
	background(120)

	for (var i = 0; i < books.done_data.length; i++) {


		//graffer
		fill(books.done_data[i].main_collor)
		beginShape()
		vertex(days_betwin_dates(books.done_data[i].sider[0].dato,first_shown_date)*intarval_sice,450 - 0)
		for (var j = 1; j < books.done_data[i].sider.length; j++) {
			let x;
			let y;
			if(visningsmode == "side kommet til"){
				x = days_betwin_dates(books.done_data[i].sider[j].dato,first_shown_date)*intarval_sice
				y = 450 - books.done_data[i].sider[j].side
			}else if(visningsmode == "sider læst"){
				x = days_betwin_dates(books.done_data[i].sider[j].dato,first_shown_date)*intarval_sice
				y = 450 - (books.done_data[i].sider[j].side - books.done_data[i].sider[j-1].side) / days_betwin_dates(books.done_data[i].sider[j].dato,books.done_data[i].sider[j-1].dato)
			}else{
				console.alert("fejl")
			}
			vertex(x,y)
		}
		vertex(days_betwin_dates(books.done_data[i].sider[books.done_data[i].sider.length-1].dato,first_shown_date)*intarval_sice,450 - 0)
		endShape(/*CLOSE*/)
		



		//tekst
		let startdato = days_betwin_dates(books.done_data[i].sider[0].dato,first_shown_date)
		let slutdato = days_betwin_dates(books.done_data[i].sider[books.done_data[i].sider.length-1].dato,first_shown_date)
		let graf_midt = (startdato + slutdato) / 2

		textSize(15)
		textAlign(CENTER);
		text(books.done_data[i].title, graf_midt * intarval_sice, 465);
		text(books.done_data[i].serie, graf_midt * intarval_sice, 485);

	}

}











function days_betwin_dates (date_1, date_2) {
	var day_1 = Date.parse(date_1) / 86400000
	var day_2 = Date.parse(date_2) / 86400000

	return (day_1 - day_2)
}


function change_visningsmode(){
	if(visningsmode == "side kommet til"){
		visningsmode = "sider læst"
	}else if (visningsmode == "sider læst"){
		visningsmode = "side kommet til"
	}
	
	opdate_wiew()
}



function set_main_collor(){
	for (var i = 0; i < books.done_data.length; i++) {
		books.done_data[i].main_collor = color(Math.floor(Math.random() * 156),Math.floor(Math.random() * 156),Math.floor(Math.random() * 156))
	}
}



function flyt_wiev_plus_ti(){
	flyt_wiev(10)
}
function flyt_wiev_minus_ti(){
	flyt_wiev(-10)
}


function flyt_wiev (dage){
	var result = new Date(first_shown_date)
	result.setDate(result.getDate() + dage)

	//result = result.toISOString().slice(0,10)

	first_shown_date = result

	opdate_wiew()
}