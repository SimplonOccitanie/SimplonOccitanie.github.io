---
layout: post
date:   2017-01-27 09:11:00 +0100
title:  "Passer de jQuery à Vanilla JS "
categories: javascript
---
Je me suis récemment retrouvée dans une situation où je devais absolument utiliser Vanilla JS à la place du confortable et si pratique jQuery auquel je m’étais habitué.

![Logo_jQuery](https://s3.amazonaws.com/media-p.slid.es/uploads/105389/images/1991279/JavaScript-logo-300x300.png)

VS

![Logo_JS](http://www.sebastian-basler.de/uploads/tx_sbslide/04_jquery.png)

### Vanilla JS c’est quoi?

C’est avant tout  JavaScript *natif*, c’est à dire nu, zéro bibliothèque, absolument rien!
jQuery est une bibliothèque de JavaScript créée pour faciliter l’écriture de scripts côté client.  

Je me suis posée la question pourquoi  privilégier Vanilla Js à JQuery qui facilite l’écriture du code , alors que Vanilla paraît plus *verbeux* au premier abord.

Au fil de mes recherches je comprends que Vanilla est _rapide_, _léger_ et _multi plateformes_.
Qu’il est déjà implémenté dans tous les navigateurs d’aujourd’hui, donc pas de bibliothèque supplémentaire à charger.

Par exemple, il faut toujours trouver un moyen de réduire la taille d’un site Web afin qu’il soit facile et accessible à n’importe qui (même celui qui qui possède encore Internet Explorer…au fin fond de la France!).

Saviez-vous que Google, facebook, Amazon, Paypal, Wikipedia, LinkedIn et bien d’autres utilisent Vanilla JS?

## En pratique…

Voici quelques exemples de comparaison…

**Evènement**

*jQuery*
``` javascript
 $(document).ready(function() {
// du code….
});	
```

*Vanilla*

``` js
document.addEventListener('DOMContentLoaded', function() {
  // du code, du code...
}); 
```

*jQuery*
``` js
$('#').click(function() {
  // code…
});
```
*Vanilla*
``` js
 elementHtml.addEventListener('click', function() {
 // code…
});
```

**Sélecteurs**

*jQuery*
``` js
var *htmlElement* = $('#id')[0];
```
*Vanilla* 
``` js
var *htmlElement* = document.getElementById('id');
```

*jQuery*
``` js
var divs = $('div');
```
*Vanilla*
``` js
var divs = document.querySelectorAll('div');
```
 *jQuery*
 ``` js
var newDiv = $('li');
```
*Vanilla*
``` js
var newDiv = document.createElement('li');
```

**Manipulation**

*jQuery*
``` js
$(htmlElement).append($(appendHtmlElement));   
```
                                

*Vanilla*
``` js
htmlElement.appendChild(appendHtmlElement);
```

*jQuery*
``` js
$(htmlElement).html();
```
                                                
*Vanilla*
``` js
htmlElement.innerHTML;
```


**Attributs**

*jQuery*
``` js
$(htmlElement).attr(attributeName);
```
                                                
*Vanilla*
``` js
 htmlElement.getAttribute(attributeName);
 ```

*jQuery*
``` js
$(“htmlElement”).data(dataName);
```
                                           
*Vanilla*
``` js
htmlElement.getAttribute(”data” + dataName);
```
*jQuery*
``` js
$(“htmlElement”).val();
```
                                                
*Vanilla*
``` js
htmlElement.value;
```
**Ajax**

_GET_

*jQuery*
``` js
$.ajax({
1. type: “GET”,
2. url: url,
3. data: data,
});
```
*Vanilla*
``` js
1. var get = new XMLHttpRequest();
2. get.open(“GET”, url, true);
3. get.setRequestHeader(“Content-Type”,”application/x-www-form-urlencoded;
charset=UTF-8”);
4. get.send(data);
```
_POST_

*jQuery*
``` js
$.ajax({
1. type:’ POST’,
2. url: url,
3. data: data
});
```
*vanilla*
``` js
1. var post=new XMLHttpRequest();
2. post.open(“POST”, url, true);
3. post.setRequestHeader(“Content-Type”,“application/x-www-form-urlencoded;
    charset=UTF-8”);
4. post.send(data);
```
**Effets**



Hide  
*jQuery*
``` js
$(“htlmElement”).hide();
```
*vanilla*
``` js
htmlElement.style.display=’none’;
```
Show
*jQuery*
``` js
$(“htmlElement”).show();
```
*vanilla*
``` js
htmlElement.style.display=” ”;
```
Voilà, une toute petite partie de ce que l’on peut faire en utilisant Vanilla JS;
Ici, il n’est pas question de choisir et prendre position sur ce qui est “mieux” entre l’un et l’autre…
A vous de choisir en fonction de vos besoins en développement, pour ma part cela m’a permis de parfaire mes connaissance en JavaScript et ça n’est que le début!


Muriel THOMAS
Simplonienne de la promotion 2 Toulouse.

![Logo_JS](https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/a/0/d/0/global_450101168.jpeg)

Sources:
- [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [wikipedia](https://fr.wikipedia.org/wiki/JavaScript)
- [vanilla-js](http://putaindecode.io/fr/articles/js/de-jquery-a-vanillajs/)
- [vanilla-js.com](http://vanilla-js.com)
- [choisir vanilla-js](https://andrewrabon.com/choosing-vanilla-javascript-in-2016-6f38a8302ee5#.ifxd2qy5t)
