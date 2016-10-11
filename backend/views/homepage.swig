{% extends 'layout.swig' %}
{% set title = 'Homepage Title' %}
{% block body %}
  <h1>Homepage!</h1>
  <p>Welcome to the homepage!</p>

  <p>Current date is: {{ currentDate }}</p>

{% endblock %}