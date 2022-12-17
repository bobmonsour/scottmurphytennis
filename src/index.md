---
layout: default.njk
---

{% from "macros.njk" import article %}

{% include "hero.njk" %}

<div class="container">
  <div class="row animate">
    {% set latests_posts = collections.posts | reverse %}
    {% for post in latests_posts.slice(0,3) %}
      {{ article(post) }}
    {% endfor %}
  </div>
  <h2><a href="scott-shots/">Click for more Scott Shots...</a></h2>
</div>
