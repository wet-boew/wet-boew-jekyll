---
published: true
layout: "default-theme-wet-boew-fr"
permalink: "index-fr.html"
filename_root: index
title: Variant pour Jekyll
description: "Variant pour Jekyll - Boîte à outils de l'expérience Web (BOEW)"
modified: "Date modified (YYYY-MM-DD) / Date de modification (AAAA-MM-JJ)"
---

## Pages Web normales ##
* [Thème de la facilité d'emploi Web GC](theme-gcwu-fegc/index-fr.html)
* [Thème de la facilité d’emploi Web GC pour les sites intranet](theme-gcwu-intranet/index-fr.html)
* [Thème de la BOEW](theme-wet-boew/index-fr.html)
* [Thème de base](theme-base/index-fr.html)
* [Thème de la PGO](theme-ogpl/index-fr.html)

## Articles de blogue ##
<ul>
{% for post in site.posts %}
{% if post.url contains '-fr.html' %}
    <li>
		<a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
		<p>{{ post.excerpt }}</p>
    </li>
{% endif %}
{% endfor %}
</ul>