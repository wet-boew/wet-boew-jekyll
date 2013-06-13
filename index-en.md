---
layout: default-theme-wet-boew-en
published: "true"
permalink: index-en.html
filename_root: index
title:
description:
languages:
search:
site_menu:
breadcrumb:
breadcrumb_parent1_url: http://wet-boew.github.io/wet-boew/demos/index-eng.html
breadcrumb_parent1_name: Working examples
breadcrumb_parent2_url:
breadcrumb_parent2_name:
breadcrumb_parent3_url:
breadcrumb_parent3_name:
date_modified:
css_href:
script_src:
---

## Normal Web pages ##
* [GC Web Usability theme](theme-gcwu-fegc/index-en.html)
* [GC Web Usability Intranet theme](theme-gcwu-intranet/index-en.html)
* [WET theme](theme-wet-boew/index-en.html)
* [Base theme](theme-base/index-en.html)
* [OGPL theme](theme-ogpl/index-en.html)

## Blog posts ##
<ul>
{% for post in site.posts %}
    <li>
		<a href="{{ post.url }}">{{ post.title }}</a>
		<p>{{ post.excerpt }}</p>
    </li>
{% endfor %}
</ul>