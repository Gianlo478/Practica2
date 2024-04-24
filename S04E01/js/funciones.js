window.onload = function() {
    document.getElementById("btnEnviar").addEventListener("click", registrarUsuario);
    document.getElementById("btnEnviar").addEventListener("click", imprimirConsola);

    document.getElementById("btnEnviarConDOM").addEventListener("click", registrarUsuarioDOM);
    document.getElementById("btnShowAll").addEventListener("click", listarTodosUsuarios);

    var arrUsuarios = [];

    function registrarUsuario() {
        console.log("click en el boton");
        // Captura de datos del formulario
        let nuevoUsuario = {
            username: document.getElementById("username").value,
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            edad: document.getElementById("edad").value,
            password: document.getElementById("password").value
        };
        console.log("objeto", nuevoUsuario);
        /*
        let username = document.getElementById("username").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let pass = document.getElementById("password").value;

        // Insertar en la tabla
        const bodytabla = document.getElementById("tab_body1");
        let str_insercion = "<tr><td>" + username + "</td><td>" 
            + nombre + "</td><td>" 
            + apellido + "</td><td>" 
            + edad + "</td></tr>";
        */
        const bodytabla = document.getElementById("tab_body1");
        let str_insercion = "<tr><td>" + nuevoUsuario.username + "</td><td>" 
            + nuevoUsuario.nombre + "</td><td>" 
            + nuevoUsuario.apellido + "</td><td>" 
            + nuevoUsuario.edad + "</td></tr>";
        bodytabla.innerHTML += str_insercion;
        // bodytabla.innerHTML = bodytabla.innerHTML + str_insercion;
        
        arrUsuarios.push(nuevoUsuario);
        console.log(arrUsuarios);
    }

    function registrarUsuarioDOM() {
        console.log("DOM");
        // Captura de datos del formulario
        let username = document.getElementById("username").value;
        //console.log(username);
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let pass = document.getElementById("password").value;

        // Insercion en la tabla
        const col1 = document.createElement("td");
        const texto1 = document.createTextNode(username);
        col1.appendChild(texto1);
        const col2 = document.createElement("td");
        col2.appendChild(document.createTextNode(nombre));
        const col3 = document.createElement("td");
        col3.appendChild(document.createTextNode(apellido));
        const col4 = document.createElement("td");
        col4.appendChild(document.createTextNode(edad));

        const row = document.createElement("tr");
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        document.getElementById("tab_body1").appendChild(row);
    }

    function imprimirConsola() {
        console.log("function imprimirConsola");
    }

    function listarTodosUsuarios() {
        const bodytabla = document.getElementById("tab_body2");
        let str_insercion = "";
        for (let idx in arrUsuarios) {
            console.log(idx, arrUsuarios[idx]);
            str_insercion += "<tr><td>" + arrUsuarios[idx].username + "</td><td>" 
            + arrUsuarios[idx].nombre + "</td><td>" 
            + arrUsuarios[idx].apellido + "</td><td>" 
            + arrUsuarios[idx].edad + "</td><td>"
            + arrUsuarios[idx].password + "</td></tr>";
        }
        bodytabla.innerHTML = str_insercion;
    }
}