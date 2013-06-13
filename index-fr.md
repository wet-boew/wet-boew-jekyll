---
layout: default-theme-wet-boew-fr
published: "true"
permalink: index-fr.html
filename_root: index
title:
description:
languages:
search:
site_menu:
breadcrumb:
breadcrumb_parent1_url: http://wet-boew.github.io/wet-boew/demos/index-fra.html
breadcrumb_parent1_name: Exemples pratiques
breadcrumb_parent2_url:
breadcrumb_parent2_name:
breadcrumb_parent3_url:
breadcrumb_parent3_name:
date_modified:
css_href:
script_src:
---

## Pages Web normales ##
* [Thème de la BOEW](theme-wet-boew/index-fr.html)
* [Thème de base](theme-base/index-fr.html)
* [Thème de la PGO](theme-ogpl/index-fr.html)

## Articles de blogue ##
<ul>
{% for post in site.posts %}
    <li>
		<a href="{{ post.url }}">{{ post.title }}</a>
		<p>{{ post.excerpt }}</p>
    </li>
{% endfor %}
</ul>