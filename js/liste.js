var data = {
	"punkter": [
		
		
		





		
		
		/* alle søgeord

		alle

		simulationer

		visuelt

		forsøg

		tower defence test

		spil forsøg

		3d animation

		video


		
		*/

		/*{
			"navn": 		"FANEN ALLE PROJEKTER",
			"tekst": 		"tekst",
			"billede": 		"/assets/alle_projekter_1.png",
			"link": 		"/alle_projekter.html",
			"type": 		"link side",
			"lavet": 		"12 april 2020",
			"opdateret": 	""
		},*/
		{
			"navn": 		"TYNGDEKRAFT SIMULATOR 1",
			"tekst": 		"tekst",
			"billede": 		"/assets/tyngdekraft_simulator.png",
			"link": 		"/simulationer/tyngdekraft%20simulator/html.html",
			"type": 		"simulation",
			"lavet": 		"7 april 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","simulationer"]
		},
		{
			"navn": 		"KORONA SIMULATOR",
			"tekst": 		"tekst",
			"billede": 		"/assets/syge_simulator.png",
			"link": 		"/simulationer/syge%20simulator/html.html",
			"type": 		"simulation",
			"lavet": 		"1 april 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","simulationer"]
		},

		{
			"navn": 		"TOWER DEFENCE TEST TEGN MAP",
			"tekst": 		"tekst",
			"billede": 		"/assets/tower_defence_tegn_map.png",
			"link": 		"/visuelt/tower_defence_test_to_tegn/html.html",
			"type": 		"visuelt + tower defence test",
			"lavet": 		"14 marts 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","visuelt","forsøg","tower defence test"]
		},
		{
			"navn": 		"TOWER DEFENCE TEST MAP GENERATOR",
			"tekst": 		"tekst",
			"billede": 		"/assets/tower_defence_map_generator.png",
			"link": 		"/visuelt/tower_defence_test/tower_defence_test.html",
			"type": 		"visuelt + tower defence test",
			"lavet": 		"14 marts 2020 ferdig efter TOWER DEFENCE TEST TEGN MAP",
			"opdateret": 	"",
			"søgeord": 		["alle","visuelt","forsøg","tower defence test"]
		},
		{
			"navn": 		"SHOOTER GAME",
			"tekst": 		"dette er en tekst om shooter game",
			"billede": 		"/assets/shooter_game.png",
			"link": 		"/spil/shooter game/html.html",
			"type": 		"spil forsøg",
			"lavet": 		"11 marts 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","spil forsøg","forsøg"]
		},

		{
			"navn": 		"PING PONG",
			"tekst": 		"dette er en tekst om pingpong spillet",
			"billede": 		"/assets/pingpong.png",
			"link": 		"/spil/pingpong/pingpong.html",
			"type": 		"spil forsøg",
			"lavet": 		"19 febuar 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","spil forsøg","forsøg"]
		},
		{
			"navn": 		"SLUSH ICE MASKINE VIDEO",
			"tekst": 		"tekst",
			"billede": 		"/assets/slush_ice_425_300.png",
			"link": 		"/visuelt/videoer/slush ice maskine/slush ice maskine.html",
			"type": 		"3d animation + video",
			"lavet": 		"12 febuar 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","3d animation","video"]
		},
		{
			"navn": 		"DONUT VIDEO",
			"tekst": 		"tekst",
			"billede": 		"/assets/dounot_video.png",
			"link": 		"/visuelt/videoer/dounot/dounot.html",
			"type": 		"3d animation + video",
			"lavet": 		"2 febuar 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","3d animation","video"]
		},


		{
			"navn": 		"POLYGON",
			"tekst": 		"tekst",
			"billede": 		"/assets/polygon.png",
			"link": 		"/visuelt/polygon/p5 skabelon/html.html",
			"type": 		"visuelt",
			"lavet": 		"19 januar 2020",
			"opdateret": 	"",
			"søgeord": 		["alle","visuelt","forsøg"]
		},
		{
			"navn": 		"EPIC LABYRINT",
			"tekst": 		"dette spil er et labyrint spil hvor man skal komme fra start (den lilla boks) til mål (den grønne boks) ved at bruge W, A, S og D knaberne på computeren",
			"billede": 		"/assets/epick_labyrint.png",
			"link": 		"/spil/epick labyrint/p5 skabelon/epick labyrint.html",
			"type": 		"spil forsøg",
			"lavet": 		"startede 15 januar 2020. blev færdig senere",
			"opdateret": 	"",
			"søgeord": 		["alle","spil forsøg","forsøg"]
		},



		
		{
			"navn": 		"BIL SPIL",
			"tekst": 		"dette er en tekst om bil spil",
			"billede": 		"/assets/bil_spil.png",
			"link": 		"/spil/bil spil/bil spil.html",
			"type": 		"spil forsøg",
			"lavet": 		"1 december 2019",
			"opdateret": 	"19 marts 2020",
			"søgeord": 		["alle","spil forsøg","forsøg"]
		}

		,
		{
			"navn": 		"CIRKEL TRÆNING",
			"tekst": 		"tekst",
			"billede": 		"/assets/cirkel_træning.png",
			"link": 		"/spil/cirkel trening/cirkel trening.html",
			"type": 		"forsøg",
			"lavet": 		"13 november 2019",
			"opdateret": 	"",
			"søgeord": 		["alle","forsøg"]
		}
		
	]
}


function drawlist() {

	let liste_element = document.getElementById("list")
	
	
	for(let i = 0; i < data.punkter.length; i++) {
		let punkt = data.punkter[i]

			let listitem_div = document.createElement("div")
			listitem_div.setAttribute("class","listitem")
			listitem_div.setAttribute("id","list_item_" + i)
			listitem_div.setAttribute("onClick","window.location.href = '" + data.punkter[i].link+"';" )
			liste_element.appendChild(listitem_div)

				let listitem_topbar_div = document.createElement("div")
				listitem_topbar_div.setAttribute("class","listitem_topbar")
				listitem_div.appendChild(listitem_topbar_div)

					let listitem_topbar_type_div = document.createElement("div")
					listitem_topbar_type_div.setAttribute("class","listitem_topbar_type")
					listitem_topbar_div.appendChild(listitem_topbar_type_div)

						listitem_topbar_type_div.innerHTML = "<b>Type:</b>" + data.punkter[i].type

					
					let listitem_topbar_created_div = document.createElement("div")
					listitem_topbar_created_div.setAttribute("class","listitem_topbar_created")
					listitem_topbar_div.appendChild(listitem_topbar_created_div)

						listitem_topbar_created_div.innerHTML = "<b>Lavet:</b>" + data.punkter[i].lavet
					


					if (data.punkter[i].opdateret){
					let listitem_topbar_updated_div = document.createElement("div")
					listitem_topbar_updated_div.setAttribute("class","listitem_topbar_updated")
					listitem_topbar_div.appendChild(listitem_topbar_updated_div)

						listitem_topbar_updated_div.innerHTML = "<b>Opdateret:</b>" + data.punkter[i].opdateret
					}

				let listitem_content_div = document.createElement("div")
				listitem_content_div.setAttribute("class","listitem_content")
				listitem_div.appendChild(listitem_content_div)

					let listitem_content_text_div = document.createElement("div")
					listitem_content_text_div.setAttribute("class","listitem_content_text")
					listitem_content_div.appendChild(listitem_content_text_div)

						listitem_content_text_div.innerHTML = "<h1><b><u>" + data.punkter[i].navn + "</u></b></h1>" + "<p>" + data.punkter[i].tekst + "</p>"


					let listitem_content_image_div = document.createElement("div")
					listitem_content_image_div.setAttribute("class","listitem_content_image")
					listitem_content_div.appendChild(listitem_content_image_div)

						listitem_content_image_div.innerHTML = "<img src=" + data.punkter[i].billede + " width='425' height='300'" + ">"
	}
}





