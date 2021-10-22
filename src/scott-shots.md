---
layout: default
title: Scott Shots | Scott Murphy Tennis Pro
nav: Scott Shots
permalink: /scott-shots/
nav-weight: 3
tags: page
---

 <div class="container">
  <div class="row animate">
      {% for post in collections.post | reverse %}
        {% include post-list.html %}
      {% endfor %}
  </div>
</div>
