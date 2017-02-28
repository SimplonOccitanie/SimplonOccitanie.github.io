Si vous devez vous intéresser à la question du référencement naturel (SEO), une bonne façon d'appréhender le sujet peut être de vous ntéresser au fonctionnement des moteurs de recherche (je citerai souvent Google dans cet article, mais Yahoo ou Bing fonctionnent sur les mêmes principes). Cet article n’est pas exhaustif, mais j’aimerais ici introduire les notions de crawl et d'indexation, et vous proposer des pistes pour aller plus loin si le sujet vous intéresse.

## Que fait le moteur de recherche ?
Vous pouvez voir le moteur de recherche comme le **sommaire dynamique d’un grand catalogue de pages internet**. Lorsqu’un internaute fait une recherche en entrant un ensemble de mots-clefs (ou requête), le moteur de recherche va d’abord sélectionner, parmi les pages de ce catalogue, celles qui correspondent à cette recherche. Puis, il va appliquer un algorithme de tri afin de faire ressortir dans les premiers résultats les pages qui lui paraîtront les plus pertinentes. 

Ainsi, la première étape du travail de SEO consiste à faire en sorte que les pages de notre site **appartiennent bien au catalogue du moteur de recherche**. Il s’agit donc de s’assurer que le moteur de recherche a bien eu connaissance de l’existence d’une page, qu’il l’a visitée (*crawlée*) et qu’il l’a jugée d’assez bonne qualité pour appartenir à son catalogue (*indexée*). Revenons plus en détail sur ces étapes.

## Etape 1 : le crawl

### C'est quoi ?

Un logiciel, appelé robot (ou *spider*, ou *crawler*) parcourt le web de page en page. Il lit chaque page de haut en bas, en suivant leur structure html. Il passe d’une page à une autre en suivant les liens qu’il rencontre sur son chemin. 

Le robot peut aussi bien crawler de nouvelles pages afin des les rapatrier sur un serveur, que crawler des pages qu’il connaît déjà afin de voir si celles-ci ont été modifiées depuis son dernier passage.

### Comment attirer l’attention du moteur de recherche pour qu’il vienne crawler une nouvelle url ?

Pour attirer l’attention de Google sur une page que vous venez de mettre en ligne, la solution la plus simple est de vous assurer qu’un lien vers cette page existe depuis une autre page de votre site, déjà connue de Google. Par exemple, si vous postez un nouvel article de blog, vous pouvez faire un lien vers celui-ci depuis la page d’accueil. Ainsi, lorsque le moteur de recherche va revenir crawler la page d’accueil, il suivra le lien vers le nouvel article et parcourra la page.

D’autres options peuvent être explorées pour accélérer le processus de crawl :
* obtenir un lien vers la nouvelle page depuis un autre site web
* demander une exploration immédiate de la page dans Google Search Console
* publier un fichier SiteMap 

### Comment faire en sorte que le moteur de recherche revienne plus souvent crawler une url qu'il connaît déjà ?

Une fois qu’une page est connue de Google, celui-ci reviendra (plus ou moins) régulièrement crawler celle-ci. La fréquence de ces visites dépend de plusieurs critères. Ainsi, Google crawle plus souvent des sites populaires (recevant beaucoup de visites, ayant de nombreux liens externes entrants…). Il crawle également plus souvent les pages populaires (d’où l’intérêt de poster un lien vers votre nouvel article de blog depuis la page d’accueil : celle-ci étant surement la page la plus populaire de votre blog, il y a des chances que Google vienne plus régulièrement la visiter que les autres). Il semble également que Google revienne plus souvent visiter une page lorsqu’il constate que celle-ci est régulièrement mise à jour.

### Outils et liens pour aller plus loin sur le crawl

* Une petite commande simple à taper dans votre barre de recherche pour connaître la date du dernier passage de Google sur une page donnée et avoir un aperçu de ce qu'a lu le moteur de recherche (en cliquant sur la version en text seul) : `cache:www.nomdusite.fr/page`

* Un autre outil : la possibilité d’explorer une page “comme Google” et de voir le rendu de celle-ci telles qu’affichées par [Googlebot (le crawler)](https://webmaster-fr.googleblog.com/2014/05/rendu-pages-Explorer-comme-Google.html)

* Et enfin, pour aller plus loin sur la notion de crawl et notamment l’importance d’un temps de téléchargement faible pour faciliter cette étape, je vous conseille [cet article de webrankinfo](http://www.webrankinfo.com/dossiers/indexation/crawl-budget)

## Etape 2 : l’indexation

### C'est quoi ?

Une fois l’étape du crawl effectuée, le moteur de recherche analyse chaque page rapatriée selon de très nombreux critères. Son objectif est de définir s’il souhaite ou non ajouter cette page à son index (c’est-à-dire au catalogue de pages qu’il propose).

### Comment indexer une page web ?

Tout d’abord, le format doit être pris en compte par Google (HTML, PDF, Excel...). Le code HTTP doit être égal à 200 (donc si votre page est une redirection (code 3XX), en erreur client (code 4XX) ou en erreur serveur (code 5XX), elle ne pourra pas être indexée). Le moteur de recherche analysera ensuite la qualitée de la page (contenu, temps de chargement...) pour décider de l’ajouter ou non à son index.(

Si vous fournissez une URL canonique, c’est-à-dire si vous indiquez aux moteurs de recherche que la page sur laquelle il est n’est pas la page officielle, c’est cette url qui sera indexée. [Pour en savoir plus sur les urls canoniques](http://www.webrankinfo.com/dossiers/techniques/url-canonique#gref) 

### Outils pour surveiller l’indexation

* Une petite commande à taper dans la barre de recherche pour savoir si une page est indexée : `info:www.nomdusite.fr/page`

* Une autre commande à taper dans la barre de recherche pour voir toutes les pages indexées d’un site : `site:www.nomdusite.fr`

* Et pour ceux qui utilisent Google Search Console : [https://support.google.com/webmasters/answer/2642366?hl=fr](https://support.google.com/webmasters/answer/2642366?hl=fr) 


## Comment interdire le crawl et/ou l’indexation ?

**Dans certains cas, vous pouvez ne pas vouloir crawler et/ou indexer certaines pages**. C’est la cas notamment pour les espaces de connexion : une fois l’utilisateur logué sur votre site, celui-ci peut, par exemple, avoir accès à sa messagerie privée. Vous ne voulez pas que cette page de messagerie apparaisse parmi les résultats de recherche sur Google. Je vous propose de voir comment régler cette problématique selon deux cas de figure : soit cette page est nouvelle, elle n’est pas encore indexée et vous voulez empêcher qu’elle puisse l’être, soit celle-ci est déjà indexée et vous voulez donc la désindexer. 

### Empêcher l’indexation d’une nouvelle page

Si Google n’a pas encore connaissance de votre page, vous pouvez **lui interdire de la crawler**. Pour ce faire, vous pouvez **ajouter un fichier robots.txt à votre site web**. Ce fichier, facultatif, permet de lister les adresses des pages que vous ne voulez pas que Google passe visiter. Le fichier robots.txt est lié au sous-domaine (il peut donc il y avoir plusieurs fichiers robots.txt pour un même nom de domaine).

* [Un exemple de fichier robots.txt](https://www.airbnb.fr/robots.txt)
* [Pour en savoir plus sur le fichier robots.txt](https://support.google.com/webmasters/answer/6062608?hl=fr&visit_id=1-636231375803971570-1192364356&rd=1)

### Désindexer une page déjà connue de Google

Comme nous l’avons vu plus haut, lorsque Google connaît une page (qu’il l’a crawlée), il ne l’oublie pas. Il revient même régulièrement voir si celle-ci a été mise à jour. 

Dans le cas donc où vous voulez désindexer une page déjà connue de Google, vous pourriez vouloir utiliser un fichier robots.txt pour bloquer le crawl. Ainsi, lorsque le moteur de recherche revient visiter votre page, il est bloqué et ne peut pas la parcourir. A terme, il pourra donc décider de sortir cette page de son index. Mais cette solution n’est pas fiable à 100%, et peut prendre un certain temps.

La solution qui paraît être la plus fiable est de **placer une balise meta robots noindex dans le header de la page : <meta name="robots" content="noindex" />**. Cette balise dit clairement à Google vous ne souhaitez pas faire ressortir cette page dans les moteurs de recherche.

* Attention : si vous ajoutez cette balise à une page, le moteur de recherche doit pouvoir crawler la page pour la lire. Donc : si jamais votre page est listée dans le fichier robots.txt, le moteur de recherche ne pourra pas y accéder, et il ne verra donc pas l’indication lui disant de la désindexer. ([tout est expliqué sur ce lien du support google](https://support.google.com/webmasters/answer/93710?hl=fr))

Pour désindexer une page, il est également possible de demander une suppression immédiate dans Google Search Console. Pour en savoir plus sur comment désindexer une page, je vous renvoie encore une fois vers webrankinfo qui propose [un dossier très complet sur le sujet](http://www.webrankinfo.com/dossiers/indexation/comment-desindexer#gref)


## Pour finir...

Ainsi, pour chaque site web, vous pouvez définir 3 niveaux de pages :
* les pages existantes (toutes les pages du site, qu’elles soient indexées, crawlées, ou non)
* les pages crawlées (qu’elles soient indexées ou non)
* les pages indexées (uniquement celles qui apparaissent sur les moteurs de recherche)

Pour étudier le SEO d’un site, il peut être intéressant d’étudier les deltas entre ces différents types de pages. Par exemple, une différence importante entre nombre de pages crawlées et nombre pages indexées peut mettre en évidence un problème de duplicate content (Google parcourt de nombreuses pages de votre site, mais il considère qu’elles se ressemblent au niveau du contenu et ne va pas toutes les indexer).

Pour finir, voici un outil bien pratique pour y voir plus clair parmi toutes ces pages et aller plus loin dans leur analyse : [https://myrankingmetrics.com/](https://myrankingmetrics.com/) Une fois votre compte créé, vous pouvez faire une analyse gratuite de votre site, qui vous donnera une indication globale sur ses performances SEO. Si vous faites une analyse payante, vous aurez accès à des explication détaillées sur chaque point. La force de l’analyse payante est la possibilité d’exporter sous format Excel la liste de vos urls crawlées ou indexées, et de les filtrer selon de nombreux critères (code http, vitesse de téléchargement, profondeur de la page…). 

Bonne chance ! :)
