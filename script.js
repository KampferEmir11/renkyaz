const clickButton = document.querySelector(".show");
clickButton.addEventListener("click" , function(){   
    const girilenDeger = document.querySelector(".deger").value;
    document.querySelector(".clear").addEventListener("click" , function(){
        document.querySelector("body").style.backgroundColor="#adadad";
        document.querySelector("h1").style.color="white";
        document.querySelector(".deger").value = "";
    })
    if (girilenDeger == "sarı") {
        document.querySelector("body").style.backgroundColor="yellow";
        document.querySelector("h1").style.color="black"
    }
    else if(girilenDeger == "SARI") {
        document.querySelector("body").style.backgroundColor="yellow"
        document.querySelector("h1").style.color="black"
    }
    else if(girilenDeger == "beyaz") {
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector("h1").style.color="black"
    }
    else if(girilenDeger == "BEYAZ") {
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector("h1").style.color="black"
    }
    else if(girilenDeger == "açık mavi") {
        document.querySelector("body").style.backgroundColor="lightblue";
    }
    else if(girilenDeger == "AÇIK MAVİ") {
        document.querySelector("body").style.backgroundColor="lightblue";
    }
    else if(girilenDeger == "açık yeşil") {
        document.querySelector("body").style.backgroundColor="lightgreen";
    }
    else if(girilenDeger == "AÇIK YEŞİL") {
        document.querySelector("body").style.backgroundColor="lightgreen";
    }
    else if(girilenDeger == "bordo") {
        document.querySelector("body").style.backgroundColor="#800000";
    }
    else if(girilenDeger == "BORDO") {
        document.querySelector("body").style.backgroundColor="#800000";
    }
    else if(girilenDeger == "gri") {
        document.querySelector("body").style.backgroundColor="gray";
    }
    else if(girilenDeger == "GRİ") {
        document.querySelector("body").style.backgroundColor="gray";
    }
    else if(girilenDeger == "kahverengi") {
        document.querySelector("body").style.backgroundColor="#993300"
    }
    else if(girilenDeger == "KAHVERENGİ") {
        document.querySelector("body").style.backgroundColor="#993300"
    }
    else if(girilenDeger == "kırmızı") {
        document.querySelector("body").style.backgroundColor="red"
    }
    else if(girilenDeger == "KIRMIZI") {
        document.querySelector("body").style.backgroundColor="red"
    }
    else if(girilenDeger == "mavi") {
        document.querySelector("body").style.backgroundColor="blue"
    }
    else if(girilenDeger == "MAVİ") {
        document.querySelector("body").style.backgroundColor="blue"
    }
    else if(girilenDeger == "yeşil") {
        document.querySelector("body").style.backgroundColor="green"
    }
    else if(girilenDeger == "YEŞİL") {
        document.querySelector("body").style.backgroundColor="green"
    }
    else if(girilenDeger == "lacivert") {
        document.querySelector("body").style.backgroundColor="#000080"
    }
    else if(girilenDeger == "lacivert") {
        document.querySelector("body").style.backgroundColor="#000080"
    }
    else if(girilenDeger == "mor") {
        document.querySelector("body").style.backgroundColor="#6A0DAD"
    }
    else if(girilenDeger == "MOR") {
        document.querySelector("body").style.backgroundColor="#6A0DAD"
    }
    else if(girilenDeger == "siyah") {
        document.querySelector("body").style.backgroundColor="black"
    }
    else if(girilenDeger == "SİYAH") {
        document.querySelector("body").style.backgroundColor="black"
    }
    else if(girilenDeger == "pembe") {
        document.querySelector("body").style.backgroundColor="#FFC0CB"
    }
    else if(girilenDeger == "PEMBE") {
        document.querySelector("body").style.backgroundColor="#FFC0CB"
    }
    else if(girilenDeger == "turkuaz" ) {
        document.querySelector("body").style.backgroundColor="#40E0D0"
    }
    else if(girilenDeger == "TURKUAZ") {
        document.querySelector("body").style.backgroundColor="#40E0D0"
    }
    else if(girilenDeger == "turuncu" ) {
        document.querySelector("body").style.backgroundColor="#FFA500"
    }
    else if(girilenDeger == "TURUNCU") {
        document.querySelector("body").style.backgroundColor="#FFA500"
    }
});