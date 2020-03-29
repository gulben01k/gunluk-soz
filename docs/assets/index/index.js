console.log("index.js is run");

// yazı güncelleme fonksiyonları
function guncelleTarih(a){
    $("#baslik").text(a);
}

function guncelleYazi(a){
    $("#altBaslik").text(a);
}

function guncelleYazar(a){
    $("#yazi").text(a);
}

/** zamanı tanımla */
var d = new Date();
var zaman =[];
zaman['yil'] = d.getFullYear();
zaman['ay'] = d.getMonth()+1;
zaman['gun'] = d.getDate();

/** söz listesinden verileri çek */
Papa.parse("https://raw.githubusercontent.com/gulben01k/gunluk-soz/master/soz-listesi.csv", {
    download: true,
    header: true,
    complete: function (results) {
        data = results.data;
        
        /** tarihe göre sonucu yaz */
        for (var i = 0; data.length > i; i++) {
            
            /**eğer yıl kaydı var ise */
            if(data[i]["yıl"]==zaman.yil){
                
                /** eğer ay kaydı var ise */
                if(data[i]["ay"]==zaman.ay){
                    
                    /** eğer gün kaydı var ise */
                    if(data[i]["gün"]==zaman.gun){
                        guncelleTarih(zaman.gun+"."+zaman.ay+"."+zaman.yil);
                        guncelleYazi(data[i]["Söz"]);
                        guncelleYazar(data[i]["Yazar"]);
                        i = data.length;
                    }
                }
            }
        }
    }
});
