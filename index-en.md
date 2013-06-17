---
published: true
layout: "default-theme-wet-boew-en"
permalink: "index-en.html"
filename_root: index
title: null
description: null
languages: null
search: null
site_menu: null
breadcrumb: null
breadcrumb_parent1_url: "http://wet-boew.github.io/wet-boew/demos/index-eng.html"
breadcrumb_parent1_name: Working examples
breadcrumb_parent2_url: null
breadcrumb_parent2_name: null
breadcrumb_parent3_url: null
breadcrumb_parent3_name: null
date_modified: null
css_href: null
script_src: null
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
{% if post.url contains '-en.html' %}
    <li>
		<a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
		<p>{{ post.excerpt }}</p>
    </li>
{% endif %}
{% endfor %}
</ul>

Test
