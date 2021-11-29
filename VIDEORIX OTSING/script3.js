// Koodi baas on võetud lehelt https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp ja lehelt https://stackoverflow.com/questions/10671174/changing-button-text-onclick
// Funktsioon show_element() muudab nupu vajutamisel esiteks nupu peal kuvatavat sisu ning toob nähtavale read, mis suunavad edasi alternatiivsele sõnade veebileheküljele

function show_element() {
    var x = document.getElementById("tagavara");
        displayValue='';
    var btn = document.getElementById("nupp");
    if (btn.value=='Ei näita'){
        btn.value='Näitab';
        btn.innerHTML='LISAINFO PEITMISEKS VAJUTAGE SIIA';
    }
    else{
        btn.value='Ei näita';
        btn.innerHTML='OODATUD SÕNADE PUUDUMISEL VAJUTA SIIA';
    }
    if (x.style.display == "")
        displayValue="block";
    
    x.style.display=displayValue;
  }