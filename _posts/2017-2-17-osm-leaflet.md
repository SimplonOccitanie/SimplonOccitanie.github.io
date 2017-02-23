---
layout: post
date:   2017-02-23 09:11:00 +0100
title:  "Adoptez OpenStreetMap et sa Librairie Leaflet "
categories: osm, maps, leaflet
---
# 
*******************************************************
   
![OSM](http://openstreetmap.fr/f/OSM-FR-logo-web-avec-texte.png)      

![Leaflet](http://t3.gstatic.com/images?q=tbn:ANd9GcS5d8NPc4K2rv-wa6cB8xTmMk_yRz0uj9APe6Us5iMjJWQrnj_AggiF0dQ)        

>Besoin d'une carte ?     
>Adoptez Open Street Map et sa Librairie Leaflet : une solution pratique et une prise en main rapide !      


Mais qu'est ce donc ?     
==

## OpenStreetMap (OSM)

OpenStreetMap est un projet international datant de 2004.  
Ce projet est open-source et donc librement modifiable, pratique !       

Il a pour but de créer une carte libre du monde. A cette fin, les données exploitables ont du être collectées dans le monde entier notamment grâce à des données brutes et du géocodage.       

Sachez que ces données géographiques sont mises à disposition des utilisateurs pour des utilisations diverses tels que des calculs d'itinéraires ou différents rendus de carte grâce à des plugins mais également que vous pouvez contribuer à cette entreprise de récolte !  
En effet, chaque personne peut participer à la création et à la numérisation des cartes que ce soit en marchant, à 2 roues, en voiture ou tout autre moyen de transport.      

--------------------------
Comment faire cela ?  
- Vous recueillez des données enregistrées par exemple avec un GPS sur un itinéraire, 
- Vous prenez des notes (photographiques, écrites ou orales) sur les mentions utiles comme les noms, le type de lieu (parcs, forêt, zone résidentielle, commerces ...), présence de boites aux lettres, tout ce que vous jugerez utile,
- Puis vous reportez ces informations sur le serveur de données d'OpenStreetMap.    

--------------------------

Si vous êtes intéressés, je vous invite à cliquer **[ici](http://www.openstreetmap.org/#map=5/51.495/-0.110)** pour découvrir le site et commencer à cartographier vous même !      

En plus, d'être très pratique ces cartes ont un réel intérêt pour de nombreux projets humanitaires notamment dans les parties du monde où les cartes sont incomplètes ou rapidement obsolètes.      

Ce projet à permit la naissance d'Humanitarian OpenStreetMap Team (HOT), une équipe humanitaire qui applique les principes et activités du logiciel libre et de l'opendata pour répondre à des crises humanitaires et au développement.  
Pour en savoir davatange sur cette initiative : **[HOT](https://hotosm.org/)**     


Maintenant que vous êtes convaincu par le choix d'Open Street Map, il vous faut une librairie !      
==
 
## Leaflet

Leaflet est une bibliothèque JavaScript open-source pour des cartes interactives.  
Leaflet a été développée par Vladimir Agafonkin de CloudMade ainsi que de nombreux contributeurs. Elle est notamment utilisée par le projet de cartographie open-source OpenStreetMap.       

Elle est très légère (38Ko) ce qui la rend idéale pour les supports tels que smartphones et tablettes. Elle possède tout les éléments de base indispensables dont ont besoin la plupart des développeurs. Elle est également très simple d'utilisation et la prise en main est plutôt rapide.       

----------------------------------
Utilisation :  
* L'installation est simple et rapide en la téléchargeant sur le **[site officiel](http://leafletjs.com/)** ou en forkant le repo **[GitHub](https://github.com/Leaflet/Leaflet)**  
* Quelques lignes suffisent pour visualiser votre première carte :  

```
function initmap() {
    var map = new L.Map('map');
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 18, attribution: osmAttrib});
  
    map.setView(new L.LatLng(46, 2),6);
    map.addLayer(osm);
}
initmap();
```
* Vos cartes sont facilement personnalisables, quelques exemples:  

![exemple circle et popup](https://upload.wikimedia.org/wikipedia/en/a/a8/Leaflet_example.png)
![exemple marker personnalisable](http://leafletjs.com/examples/custom-icons/thumbnail.png)

----------------------------------

#### Pour des besoins plus poussés

Sachez qu'il existe une version plus poussée de cette librairie en la bibliothèque de OpenLayers encore plus riche en fonctionnalités mais plus complexe et plus lourde.       

## Pour conclure

* OpenSteetMap c'est un projet :      

	* open-source
	* créé et enrichi par et pour les utilisateurs
	* qui met à disposition des données géographiques
	* qui est une ressource de grande valeur pour de nombreux projets humanitaires     

* Leaflet c'est une librairie :       

	* légère
	* open-source
	* facile d'utilisation
	* comportant toutes les fonctionnalités de base nécessaires pour une belle carte interactive  

### Alors plus d'hésitation, adoptez les !     

Marine Colonge   
Simplonienne de la promotion 2 Toulouse    
![Simplon Occitanie](https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/a/0/d/0/global_450101168.jpeg)

#### Sources 
* [Site officiel OpenStreetMap](https://openstreetmap.fr/)
* [Site officiel Leaflet](http://leafletjs.com/)
* [Switch2osm](https://switch2osm.org/fr/utilisation-des-tuiles/debuter-avec-leaflet/)
* [wikipédia](https://fr.wikipedia.org/wiki/OpenStreetMap)
* [Contribuer à OpenStreetMap](http://www.openstreetmap.org/#map=5/51.495/-0.110)
* [Initiative HOT](https://hotosm.org/)
