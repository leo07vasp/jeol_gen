function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function ucFirst(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
}


function gen(){
   
   var joel = ["You tá the brinqueichon uite me, cara? ", "You ar a véri mutchi caspa man ", "Do you nou the number one xampu contra caspa in the uordi ", "Luqui aqui Capitachion ", "Rimouve uarandredi porcenti ofi the caspa ande idrateiti ior hair. ", "You puti the xampu in the midiu ", "rom the fronte from the berrind ande the caspa donti cai io xolder ", "Pliss luqui tu me ", "Not joelzetes " , "rélô mai friênds do youtubiu ", "ainda nót aprendeichon qual é o xampu namer uã contra caspa inde uordi ", "luque aqui ", "camón ", "uãm ", "tchu ", "tri ", "fó ", "anderistendi ", "caspa is not bacana ", "de cocereichon is di matá ", "se o xampú não for véri gude ", "a mulhereichon vai vazá ", "you puti in de réndi ", "you puti from the midou ", "from the fronte ", "from the saidi ", "from the birraindi ", "you enxagueiti  ", "you espalheiti ", "repiti uiti me ", "puti no seu head ", "the neime ofi the xampú ", "espiqui laike a gringo ", "the neime isi inglish ", "evribóde nau ", "Finixi the cocereichon in the red ", "Bati, pera ai,", "you no precisa ", " you ar a carecaition ", "you donti révi caspa ", "Tu teami prei veri gudi ", "From birráind ", "from de léfiti ", "from de raiti ", "My equipe pray veri naici. ", "Iraq ande sal de Africa pray semen ", "But de second taime ai hevi de mete ", "Control de mete bai equipe praying de left de write in the midiu ", "Have on bext oportuniti four ixcore " ,"Iraq marquee de midiu found berrind ","I afte-dem in seconde time ai maique to chanjer ","Uon prayer experience sempre maschego ","I anoder prayer que hevi eperience ","Qui pray very gude Steven pienar ","but ai donti 'bidebu' "];  

  var elem = document.getElementById("conteudo");
  var content = "";
  var to = Math.floor((Math.random()*10)+5);
  var from = Math.floor((Math.random()*50)+20);
  for(i = 1; i <= 2; i++){
    var numbersp = Math.floor((Math.random()*from)+to);
    var joeltemp = shuffle(joel.slice(0, numbersp));

    elem.innerHTML = joeltemp.toString();
  }




}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', gen);
  main();
});
