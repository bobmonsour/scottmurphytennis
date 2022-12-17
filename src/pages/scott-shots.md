---
layout: default.njk
title: Scott Shots | Scott Murphy Tennis Pro
description: Scott Shots are Scott's thoughts on various aspects of the game of tennis.
nav: Scott Shots
permalink: /scott-shots/
navweight: 3
tags: navpage
---

{% from "macros.njk" import article %}

 <div class="container">
  <div class="row animate">
    {% for post in collections.posts | reverse %}
      {{ article(post) }}
    {% endfor %}
  </div>
</div>
