<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LightsOff</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        /* Barra de Navegación */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        nav {
            background-color: #333;
            padding: 10px;
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
        }

        nav ul li a:hover {
            text-decoration: underline;
        }

        /* Mapa */
        #map {
            height: 500px;
            width: 100%;
        }

        /* Secciones */
        section {
            padding: 20px;
            margin-top: 20px;
        }

        #acerca-de {
            background-color: #f4f4f4;
        }

        #descripcion {
            background-color: #e9e9e9;
        }

        #autor {
            background-color: #dcdcdc;
        }
    </style>
</head>

<body>

    <!-- Barra de Navegación -->
    <nav>
        <ul>
            <li><a href="#acerca-de">Acerca de</a></li>
