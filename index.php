<!-- se obtienen los valores que como usuario ingrese: nombre, edad, check enviados por el metodo post -->
<?php
$nombre = $_POST['name'];
$edad = $_POST['edad'];
$interesado = isset($_POST['interesado']) ? $_POST['$interesado'] : 'no';

// definimos dos arreglos con parramos de texto.

// definir el primer parrafo como variable $parrafo y contendra la informacion para mayores de 18 anios.

// definir el segundo parrafo como variable $parrafo_menores y contendra la informacion para menores de 18 anios.

$parrafo = ['Ropa para niños 35% Desct.'];


$parrafo_menores = ['Camisas para adultos 35% Desct.'];

$imagenesMay = [
    ' img1M.png,
    img2M.png,
    img3M,
    img4M.jpeg,
    img5M.jpeg'
];
$imagenesMen = [
    ' img1,
     img2,
     img3,
     img4,
     img5'
];


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>mercado</title>
</head>


<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mercado S&M</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./cuento.html">Cuento</a>
                        </li>

                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    <?php

    // verificar si la variable de $edad es menor a 18
    if ($edad < 18) {
        for ($i = 0; $i < count($parrafo_menores); $i++) {
            echo "<h" . ($i + 1) . ">" . $parrafo_menores[$i] . "</h" . ($i + 1) . ">";
            echo " <img src='" . $imagenesMen[$i] . "'/>";
        }


    } else {
        // si el usuario es mayor de 18 mostramos los parrafos correspondientes.
        for ($i = 0; $i < count($parrafo); $i++) {
            echo "<h" . ($i + 1) . ">" . $parrafo[$i] . "</h" . ($i + 1) . ">";
            echo " <img src='" . $imagenesMay[$i] . "'/>";
        }

    }
    if ($interesado === 'si') {
        // si el usuario esta interesado en ver informacion adicional mostrar lo siguiente:.
        echo '<div class="contenedor"';
        echo '<img src="imginfo1.jpeg"';
        echo '<img src="imginfo2.jpeg"';
        echo '<img src="imginfo3.jpeg"';
        echo '<img src="imginfo4.jpeg"';
        echo '/div>';
    }



    ?>
    <div class="CACPN1">
        <div class="CACPN">

            <a href="./cuento.html">
                <h2>Cuento corto para niño</h2>
            </a>
        </div>
    </div>


    <footer>
        <h2>Desarrollador por Joan corporan </h2>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
</body>

</html>