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

function drawmenu() {

	var url = window.location.href
	console.log(url)
	var urlsplit = url.split('/')
	var lastPartOfUrl = urlsplit[urlsplit.length-1]

	var ul = createElement('ul')
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

}