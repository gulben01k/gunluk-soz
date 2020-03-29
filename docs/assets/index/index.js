console.log("index.js is run");

// yazı güncelleme fonksiyonları
function guncelleTarih(a){
    $("#tarih").text(a);
}

function guncelleYazi(a){
    $("#yazi").text(a);
}

function guncelleYazar(a){
    $("#yazar").text(a);
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
        var sonuc = 0;
        for (var i = 0; sonuc==0; i++) {
            
            /**eğer yıl kaydı var ise */
            if(data[i]["yıl"]==zaman.yil){
                
                /** eğer ay kaydı var ise */
                if(data[i]["ay"]==zaman.ay){
                    
                    /** eğer gün kaydı var ise */
                    if(data[i]["gün"]==zaman.gun){
                        guncelleTarih(zaman.gun+"."+zaman.ay+"."+zaman.yil);
                        guncelleYazi(data[i]["Söz"]);
                        guncelleYazar(data[i]["Yazar"]);
                        sonuc = 1;
                    }
                    
                    /** güne ait kayıt yoksa */
                    else{
                        
                        /** kayıt bulunamadı mesajı göster */
                        guncelleTarih(zaman.yil+" yılı "+zaman.ay+".ayı "+zaman.gun+".gününe ait kayıt bulunamadı");
                        guncelleYazi("");
                        guncelleYazar("");
                        sonuc = 1;
                    }
                }
                
                /** aya ait kayıt yoksa */
                else{
                    
                    /** kayıt bulunamadı mesajı göster */
                    guncelleTarih(zaman.yil+" yılı "+zaman.ay+".ayına ait kayıt bulunamadı");
                    guncelleYazi("");
                    guncelleYazar("");
                    sonuc = 1;
                }
            }
            
            /** yıla ait kayıt yok ise */
            else{
                
                /** kayıt bulunamadı mesajı göster */
                guncelleTarih(zaman.yil+" yılına ait kayıt bulunamadı");
                guncelleYazi("");
                guncelleYazar("");
                sonuc=1;
            }
        }
    }
});
