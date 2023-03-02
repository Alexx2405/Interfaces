/* NOMBRE APELLIDOS */

$(document).ready(function () {
    hideOtherElements(1);
    //ejercicio2 al dar f5 o abrir página siempre aparezca la imagen 1
    print_first_image(document.getElementById('ver-inicio'));
    $("#ver-inicio").click(function () {
        var divInteresado = document.getElementById('ver-inicio');
        hideImagesRandom(divInteresado);
    });
    /**
     * Hide images except one random image.
     * @param {*} div_Work div contains images.

     *
     */

    function hideImagesRandom(div_Work) {

        var children = div_Work.children;
        var numElementRandom = Math.round(Math.random() * 4);
        // $(div_Work).toggle("slow", true);
        console.log(numElementRandom);
        console.log($(children[1]));
        for (let index = 0; index < children.length; index++) {
            if (index != numElementRandom) {

                $(children[index]).css('display', 'none');

            } else {
                $(children[index]).css({
                    'display': 'block',
                    'margin-left': '150px'
                });
            }

            console.log($('children[' + index + ']'));

        }

    }
    /**
     * Hide the specified image
     * @param {*} div_Work section where are every images
     * @param {*} num_element image to display:none.
     */
    function hideImagesLineal(div_Work, num_element) {
        var list_images = div_Work;
        console.log(list_images);
        var element = div_Work.children[num_element];
        $(element).css('display', 'none');
    }
    /**
     * Print the first image and hide other images.
     * @param {*} div_Work  div contains images.
     */
    function print_first_image(div_Work) {

        var children = div_Work.children;


        for (let index = 1; index < children.length; index++) {


            $(children[index]).css('display', 'none');



            console.log($(children[index]));

        }
    }
    /**
     * only show the form. Other Element style display:none
     */
    function showForm() {
        hideOtherElements(9);
        // var section_form=document.getElementById('ver-form').getElementsByTagName('div');





        $("#ver-form div").css('display', 'block');


        //document.getElementById('ver-form').getElementsByTagName('div')[1].style = 'display:block';

        //console.log(section_form);
    }
    /**
    * Hide elements different in the  div indicated since position number.
    * @param {*} positionElement  position of focus div
    */
    function hideOtherElements(positionElement) {
        var list_Div = $("div");
        console.log('ppppppp');
        console.log(list_Div[1]);
        for (let index = 1; index < list_Div.length; index++) {
            var object = list_Div[index];
            if (index != positionElement) {
                $(object).css('display', 'none');
            } else {
                $(object).css('display', 'block');
            }


        }


    }
    /* Ejercicio 1 */
    //  click event of inicio element.
    $("#inicio").click(function () {



        hideOtherElements(1);
        //var divInteresado = document.getElementById('ver-inicio');
        var divInteresado = $('#ver-inicio');
        $(divInteresado).click(function () {
            console.log("llllllllll")
            $(divInteresado).slideToggle("slow", function () {
                hideImagesRandom(divInteresado);
                hideOtherElements(1);
                console.log('mc')

            });
        });
        /*$("#ver-inicio").click(function () {



            hideImagesRandom(divInteresado);



        })*/













    })


    //  click event of slider element.
    $("#slider").click(function () {

        hideOtherElements(2);
    })
    //  click event of information element.

    //  click event of table element.

    //form

    $("#form").click(function () {
        showForm();
    })
    /* Ejercicio 2 */
    //funcion print_first_image utilizada arriba al abrir web.



    /* Ejercicio 3 */
    $("#slider").click(function () {
        var slideer = $('#ver-slider')[0];

        print_first_image(slideer);
        var index = 0;

        $(slideer).click(function () {




            hideImagesLineal(slideer, index);
            if (index >= 3) {
                index = -1;
            }

            $("#ver-slider").fadeIn("slow", function () {
                document.getElementById('ver-slider').children[index + 1].style = "display:block";
                index++;



            });
        });
        //})

    });




    /* Ejercicio 4 */
    $("#info").click(function () {

        hideOtherElements(3);


        // Exception! Show necessary checkbox for other functions.
        $("#mostrar_enlace").css('display', 'block');
        var checkbox = $('#ver-ocultar-enlace')[0]; // Object for checking if its selected one actions else other actions.
        console.log(checkbox.checked);
        var checkedElement = checkbox.checked;
        // Problem !! its necessary do F5 for the changes.
        if (checkedElement) {
            console.log('gg');
            var links_Notices = Array($('#noticia-1'), $('#noticia-2'), $('#noticia-3'));
            links_Notices.forEach(element => {
                $(element).css('display', 'none')

            });
        }


        //------------


    })


    /* Ejercicio 5 */
    $("#tabla").click(function () {
        hideOtherElements(5);
        // Exception! Show necessary radio for other functions.

        var div_radio = $('#radio')[0];


        //Change Style (display:none) for the style (display:block).

        $(div_radio).css('display', 'block');
        $("#radio div").css('display', 'inline');
        var frutas = $("#radio #fruta")[0];
        var verdura = $("#radio #verdura")[0];
        console.log('sssssssssssssss');
        console.log(frutas);
        console.log('dddddddddddddd');
        console.log(verdura);
        var tabla_verdura = $(".datos")[1];
        var tabla_fruta_uno =$(".datos")[0];
        var tabla_fruta_dos= $('.datos')[2];
        if ($(verdura).is(':checked')) {
            console.log('mam'); console.log($(".datos"));
            $(tabla_verdura).css('background-color','yellowgreen');
        }
        if (!$(verdura).is(':checked')) {
            console.log('mam'); console.log($(".datos"));
            $(tabla_verdura).css('background-color','#FFFFFF');
        }
        if ($(frutas).is(':checked')) {
            console.log('mamffffffffff'); console.log($(".datos"));
            $(tabla_fruta_uno).css('background-color','yellowgreen');
            $(tabla_fruta_dos).css('background-color','yellowgreen');
            
        }
        else if (!$(frutas).is(':checked')) {
            console.log('mamddddddddhfbdd'); console.log($(".datos"));
            $(tabla_fruta_uno).css('background-color','#FFFFFF');
            $(tabla_fruta_dos).css('background-color','#FFFFFF');

        }


        //$('#radio')[0].css('display','block');







    })


    /* Ejercicio 6 */


    /* Ejercicio 7 */


});