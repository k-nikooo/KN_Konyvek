var konyvek = [
    {
        szerzo: "Anna Bishop",
        cim: "Vörös betűkkel",
        kotet: "(A Másik 1.)",
        ar: "3490 Ft",
        oldal: "509",
        leiras: "Meggie Corbyn cassandra sangue, vagyis vérpróféta, azaz..."
    },
    {
        szerzo: "Sarah J. Maas",
        cim: "Föld és vér háza",
        kotet: "(Crescent City 1.)",
        ar: "5999 Ft",
        oldal: "366",
        leiras: "A félig tündér, félig ember Bryce Quinlan..."
    },
    {
        szerzo: "Mark Lawrence",
        cim: "Szent Nővér",
        kotet: "(Az Ős könyve 3.)",
        ar: "4590 Ft",
        oldal: "656",
        leiras: "A világot felfalja a jég..."
    },
    {
        szerzo: "Anthony Ryan",
        cim: "A vér éneke",
        kotet: "(Hollóárnyék-trilógia 1.)",
        ar: "7490 Ft",
        oldal: "656",
        leiras: "Vaelin ​Al Sorna apja legfőbb hadúr..."
    }
];

var konyvekJSON = '[{"szerzo": "Anna Bishop", "cim": "Vörös betűkkel", "kotet": "(A Másik 1.)", "ar":"3490 Ft", "oldal": "509", "leiras": "Meggie Corbyn cassandra sangue, vagyis vérpróféta, azaz..."}, {"szerzo": "Sarah J. Maas", "cim": "Föld és vér háza", "kotet": "(Crescent City 1.)", "ar": "5999 Ft", "oldal": "366", "leiras": "A félig tündér, félig ember Bryce Quinlan..."}, {"szerzo": "Mark Lawrence", "cim": "Szent Nővér", "kotet": "(Az Ős könyve 3.)", "ar": "4590 Ft", "oldal": "656", "leiras": "A világot felfalja a jég..."}, {"szerzo": "Anthony Ryan", "cim": "A vér éneke", "kotet": "(Hollóárnyék-trilógia 1.)", "ar": "7490 Ft", "oldal": "656", "leiras": "Vaelin ​Al Sorna apja legfőbb hadúr..."}]';

$(function () {

    tablazatKiir();
    kiir();
    //$("#OK").click(ment);
    $("#ujKonyv").click(ujKonyvUrlap);
    //$("#1").click(sorTorles);

});

function tablazatKiir() {
    $("section").empty();
    $("section").append("<table>");

    $("section table").append("<tr>");
    for (var item in konyvek[0]) {
        $("section tr").append("<th id=\"" + item + "\">" + item + "</th>");
    }

    for (var i = 0; i < konyvek.length; i++) {
        $("section table").append("<tr>");
        for (var item in konyvek[i]) {
            $("section table tr").eq(i + 1).append("<td>" + konyvek[i][item] + "</td>");
        }
    }

    //$("section table tr td").eq(5).append('<input type="button" id="tovabb" name="tovabb" value="Tovább>>">');
    //$("section table tr td").eq(5).append('<a class="tovabb" href="#">tovább</a>');
    $("th").click(rendez);
}

function kiir() {
    for (var i = 0; i < $("section table tr").length; i++) {
        $("section table tr").eq(i + 1).append('<td><input type="button" id=t' + i + ' name="torol" value="Töröl"></td><td><input type="button" id=' + i + ' name="modosit" value="Módosít"></td>');
        $("#t" + i).click(sorTorles);
        $("#" + i).click(sorModositas);
    }
}

function ujKonyvUrlap() {
    $("article").empty();
    $("article").append("<form>");
    $("article form").append("<fieldset>");
    $("article form fieldset").append('<div><label for="sz">Szerző</label><input type="text" id="sz" name="sz" value="Kim Harrison"></div>');
    $("article form fieldset").append('<div><label for="c">Cím</label><input type="text" id="c" name="c" value="Boszorkányfutam"></div>');  //required placeholder
    $("article form fieldset").append('<div><label for="k">Kötet</label><input type="text" id="k" name="k" value="(Hollows 1.)"></div>');
    $("article form fieldset").append('<div><label for="a">Ár</label><input type="text" id="a" name="a" value="2999 Ft"></div>');
    $("article form fieldset").append('<div><label for="o">Oldal</label><input type="text" id="o" name="o" value="530"></div>');
    $("article form fieldset").append('<div><label for="l">Leírás</label><input type="text" id="l" name="l" value="Rachel ​Morgan, a boszorkány..."></div>');
    $("article form").append('<input type="button" id="OK" name="OK" value="OK">');

    $("#OK").click(ment);
}

var seged = $("#szerzo").val();
console.log(seged);

function ment() {
    var szerzo = $("#sz").val();
    var cim = $("#c").val();
    var kotet = $("#k").val();
    var ar = $("#a").val();
    var oldal = $("#o").val();
    var leiras = $("#l").val();
//
    konyvek.push({szerzo, cim, kotet, ar, oldal, leiras});
    console.log(konyvek);



//    var ujKonyv = {};
//    ujKonyv.szerzo = $("#szerzo").val();
//    ujKonyv.cim = $("#cim").val();
//    ujKonyv.kotet = $("#kotet").val();
//    ujKonyv.ar = $("#ar").val();
//    ujKonyv.oldal = $("#oldal").val();
//    ujKonyv.leiras = $("#leiras").val();
//    console.log(ujKonyv);
//    konyvek.push(ujKonyv);

    tablazatKiir();
    kiir();

    $("article").empty();
    $("article").append('<button id="ujKonyv">Új könyv hozzáadása</button>');
    $("#ujKonyv").click(ujKonyvUrlap);
}

var irany = false;

function rendez() {
    var id = $(this).attr("id");
    console.log(id);
    if (irany) {
        konyvek.sort(function (a, b) {
            return Number(a[id] > b[id]) - 0.5;
        });
    } else {
        konyvek.sort(function (a, b) {
            return Number(a[id] > b[id]) - 0.5;
        });
    }
    irany = !irany;
    tablazatKiir();
    kiir();
}

function sorTorles() {
    //alert("Hello");
    //console.log($("#id").val());
    var index = $(this).attr("id");
    konyvek.splice(index, 1);
    console.log(konyvek);
    tablazatKiir();
    kiir();
}

function sorModositas() {
    //alert("fejlesztés alatt");
    var id = $(this).attr("id");
    console.log(id);
    $("article").empty();
    $("article").append("<form>");
    $("article form").append("<fieldset>");
    $("article form fieldset").append('<div><label for="sz">Szerző</label><input type="text" id="sz" name="sz" value="' + konyvek[id].szerzo + '"></div>');
    $("article form fieldset").append('<div><label for="c">Cím</label><input type="text" id="c" name="c" value="' + konyvek[id].cim + '"></div>');
    $("article form fieldset").append('<div><label for="k">Kötet</label><input type="text" id="k" name="k" value="' + konyvek[id].kotet + '"></div>');
    $("article form fieldset").append('<div><label for="a">Ár</label><input type="text" id="a" name="a" value="' + konyvek[id].ar + '"></div>');
    $("article form fieldset").append('<div><label for="o">Oldal</label><input type="text" id="o" name="o" value="' + konyvek[id].oldal + '"></div>');
    $("article form fieldset").append('<div><label for="l">Leírás</label><input type="text" id="l" name="l" value="' + konyvek[id].leiras + '"></div>');
    $("article form").append('<input type="button" id="mm" name="mm" value="OK">');
    $("#mm").click(modosit);

    function modosit() {
        konyvek[id].szerzo = $("#sz").val();
        konyvek[id].cim = $("#c").val();
        konyvek[id].kotet = $("#k").val();
        konyvek[id].ar = $("#a").val();
        konyvek[id].oldal = $("#o").val();
        konyvek[id].leiras = $("#l").val();
        tablazatKiir();
        kiir();
        $("article").empty();
        $("article").append('<button id="ujKonyv">Új könyv hozzáadása</button>');
        $("#ujKonyv").click(ujKonyvUrlap);
    }
}


//function szoveg(){
//    $("section table tr td").eq(5).empty();
//    $("section table tr td").eq(5).append("Meggie Corbyn cassandra sangue, vagyis vérpróféta, azaz ha a bőrén vágás nyomán kiserken a vér, látja a jövőt. Meggie ezt a különleges képességét inkább átoknak, mint áldásnak tekinti. Meg nem szabad ember. Tartógazdája rabszolgaságban őrzi, hogy csak ő szerezhessen tudomást látomásairól. Meggie azonban megszökik és az egyetlen biztonságos hely, ahol elrejtőzhet, a Lakeside Udvar nevű üzleti negyed, amit a Mások működtetnek.<br>Az alakváltó Simon Wolfgard vonakodik felvenni az Emberi összekötő állásra jelentkező idegent. Egyrészt azért, mert úgy érzi, hogy valami titkot rejteget, másrészt azért, mert nincs emberi prédaszaga. Ám egy erősebb ösztön arra készteti, hogy mégis alkalmazza Meggie-t. Amikor megtudja róla az igazat, és azt is, hogy a kormányhatóság körözi, Simonnak el kell döntenie, vajon megéri-e, hogy bekövetkezzen az emberek és a Mások között szinte elkerülhetetlen harc.<a class=\"vissza\" href=\"#\">vissza</a>");
//    $(".vissza").click(eredetiAllapot);
//}
//
//function eredetiAllapot(){
//     $("section table tr td").eq(5).empty();
//     $("section table tr td").eq(5).append("Meggie Corbyn cassandra sangue, vagyis vérpróféta, azaz...");
//}