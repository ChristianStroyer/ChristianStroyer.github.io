	var menu = {
					"menupunkter": [ 
										{
											"link": "index.html",
											"navn":	"introduktion",
										},
										{
											"link": "alle_projekter.html",
											"navn":	"alle projekter",
										},
										{
											"link": "spil.html",
											"navn":	"spil",
										},
										{
											"link": "visuelt.html",
											"navn":	"visuelt",
										},
										{
											"link": "bog_uddrag.html",
											"navn":	"bog uddrag",
										},
										{
											"link": "simulationer.html",
											"navn":	"simulationer",
										},
										{
											"link": "andet.html",
											"navn":	"andet",
										}
									]
				}





var logo = `
<img src="/assets/sebastian_website_logo.png" alt="" width="500" height="100" />
`



function drawmenu() {

	var url = window.location.href
	console.log(url)
	var urlsplit = url.split('/')
	var lastPartOfUrl = urlsplit[urlsplit.length-1]




	var menu_element = document.getElementById("menu")

	var div = document.createElement("div")
	div.innerHTML = logo
	menu_element.appendChild(div)

	var ul = document.createElement("ul");   
	menu_element.appendChild(ul);

	for(var i=0; i<menu.menupunkter.length; i++) {
		var menupunkt = menu.menupunkter[i];
		
		var li = document.createElement("li");
		ul.appendChild(li)

		var a = document.createElement("a");
		li.appendChild(a)
		var textnode = document.createTextNode(menupunkt.navn);
		a.appendChild(textnode)
		a.setAttribute("href","/" + menupunkt.link);


		if (lastPartOfUrl == menupunkt.link) {
			a.setAttribute("class","active")
		}
	}


}
window.onload = function() {
	drawmenu()
}


