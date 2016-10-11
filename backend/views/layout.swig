<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{{ title|default('The Default Title') }}</title>
  </head>
  <body>
    {% block body %}{% endblock %}
  </body>
</html>
