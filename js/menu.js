	var menu = {
					"menupunkter": [ 
										{
											"link": "index.html",
											"navn":	"introduktion",
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
											"link": "andet.html",
											"navn":	"andet",
										},
										{
											"link": "simulationer.html",
											"navn":	"simulationer",
										}
									]
				}



var googleAnalyticsString = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-162467431-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-162467431-1');
</script>

`


var logo = `
<img src="/assets/sebastian_website_logo.png" alt="" width="500" height="100" />
`



function drawmenu() {

	var url = window.location.href
	console.log(url)
	var urlsplit = url.split('/')
	var lastPartOfUrl = urlsplit[urlsplit.length-1]

/*	var ul = createElement('ul')
	ul.parent('menu')

	for(var i=0; i<menu.menupunkter.length; i++) {
		var menupunkt = menu.menupunkter[i];
		
		var li = createElement('li')
		ul.child(li)

		var a = createElement('a',menupunkt.navn)
		a.attribute('href','/' + menupunkt.link)

		if (lastPartOfUrl == menupunkt.link) {
			a.attribute('class','active')
		}

		li.child(a)	
	}
	var div = createDiv( googleAnalyticsString )
	div.parent('menu')

*/


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

	var div = document.createElement("div")
	div.innerHTML = googleAnalyticsString
	menu_element.appendChild(div)



}

window.onload = function() {
	drawmenu()
}

