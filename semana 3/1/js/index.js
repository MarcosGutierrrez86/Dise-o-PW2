$(document).ready(function(){
    cargarEstados();
    
        function cargarEstados(){
            console.log("Hola Mundo");
            $.ajax({
                url: "crud/estados.php",
                type: "POST",
                data: {'lista' : 'todos' },
                dataType: "json",
                success: function(estados){
                    $("#estados").append("<option value=''>Seleccione una opcion</option>");  
            $.each(estados,function(i,estado){
                    $("#estados").append("<option value=" + estado.idestado + ">"+ estado.nombre + "</option>");  
                });//each
                },//succes 
                error: function(){
                    alert("Error en la peticion ajax");
                }
            });//ajax
        }//funcion cargar estados
    
        $("#agregar").click(function(){
                //console.log("Boton click");
                var nombreEstado = $("#estado").val();
                console.log(nombreEstado);
                $.ajax({
                        url:"crud/estados.php",
                        type: "POST",
                        data: {
                            'ADD' : 'estado',
                            'nombre' : nombreEstado
                        }, //data
                        dataType: 'json',
                        success: function(data){
                            alert(data.estado);
                            $("#divAgregar").toggle();
                               $("#estados").empty();
                               cargarEstados(); 
                        },
                        error : function(data){
                            alert(data.estado);
                        }
                });//ajax
        });//agregar
        $("#eliminar").click(function(){
            var nombreEliminar =$("#estadoEliminar").val();
            console.log(nombreEliminar);
            if(nombreEliminar===""){
                alert("El nombre es requerido");
                return;
            }
            $.ajax({
                url: "crud/estados.php",
                type:"POST",
                dataType: "json",
                data:{
                    'DELETE': 'estado',
                'nombre': nombreEliminar},
            success: Function(data){ $("#estados").empty();
                    alert(data.estado);
                    cargarEstados();
            },
            error: Function(data){
                alert(data.estado);
        }               }
            });
        }
    
        $("#btAgregar").click(function(){
            $("#divAgregar").toggle();
        });//click de agregar
        $("#btActualizar").click(function(){
            var idestado =$("#idEstado").val();
            var nombreEstado =$("#estadoActualizar").val();
            if(nombreEstado===""){
                alert("Ingrese un nombre valido");
                retun:
            }
            $("#divActualizar").toggle();
            $.ajax({
                url: "crud/estados.php",
                type: "POST",
                dataType: "json",
                data: {
                    "UPDATE" :"estado",
                    "idEstado" : idEstado,
                    "nombre": nombreEstado
                }
                success: function(data){
                    $("#estados").empty();
                    cargarEstados();
                    alert(data.estado);
                }

            });
        }
    
        $("#btEliminar").click(function(){
            $("#divEliminar").toggle();

        });//click eliminar
        $("#btActualizar").click(function(){
            $("#divActualizar").toggle();
            $("idEstado").val("$()")
            $("#estadoActualizar").val("estados option:selected").text();
        });
    });//documebt ready