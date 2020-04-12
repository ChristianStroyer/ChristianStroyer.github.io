var data = {
	"punkter": [
		{
			"navn": 		"SHOOTER GAME",
			"tekst": 		"dette er en tekst om shooter game",
			"billede": 		"/assets/shooter_game.png",
			"link": 		"/spil/shooter game/html.html",
			"type": 		"spil forsøg",
			"lavet": 		"11 marts 2020",
			"opdateret": 	""
		},
		{
			"navn": 		"PING PONG",
			"tekst": 		"dette er en tekst om pingpong spillet",
			"billede": 		"/assets/pingpong.png",
			"link": 		"/spil/pingpong/pingpong.html",
			"type": 		"spil forsøg",
			"lavet": 		"19 febuar 2020",
			"opdateret": 	""
		},
		{
			"navn": 		"EPICK LABYRINT",
			"tekst": 		"dette er en tekst om epick labyrint spillet",
			"billede": 		"/assets/epick_labyrint.png",
			"link": 		"/spil/epick labyrint/p5 skabelon/epick labyrint.html",
			"type": 		"spil forsøg",
			"lavet": 		"startede 15 januar 2020. blev færdig senere",
			"opdateret": 	""
		},
		{
			"navn": 		"BIL SPIL",
			"tekst": 		"dette er en tekst om bil spil",
			"billede": 		"http://placekitten.com/425/300?image=15",/*/assets/bil_spil.png",*/
			"link": 		"/spil/bil spil/bil spil.html",
			"type": 		"spil forsøg",
			"lavet": 		"1 december 2019",
			"opdateret": 	"19 marts 2020"
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






window.onload = drawlist;

