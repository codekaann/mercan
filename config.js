const config = {
    bot : {
        slashCommands: "1126439796223524885", // global veya sunucuIDsi yazın - slash olmayacaksa undefined yapın
	    token: "Nzg5MDY5MDcyNjM3MjMxMTA1.GnxDDV.fO3VOqI8V1M0PasodmIgdXAJo1WfNgqM7HsRq8", //Bot Tokeniniz
	    prefix: ["."], //komut ön eki
        id: "789069072637231105" //bot idsi
    },
    sunucu : {
        type: "java", //sunucu türü java veya bedrock 
 	    ip: "play.mercancraft.xyz", //sunucu adresi
        port: 25565, //sunucu portu java için varsayılan 25565 bedrock için varsayılan 19132
        site: "http://www.mercancraft.xyz", //sunucu sitesi
        isim: "Mercan Craft", //sunucu ismi
        mcindir: "https://tlauncher.org/", //minecraft indirme linki
        vote: "Sunucunuzun Oy linki", //oy verme linki
        
    },
    kanal : {
	    aktif: true, //sesli kanalda online gösterme aktif mi(true) olsun kapalı mı(false)
	    id: "1137470417733431327", // sunucu online sayısının gözükeceği kanal (ses kanalı)
	    yazi: "🐬 Aktif: {online}/{maxonline}" // kanalda gözükecek yazı || Varsayılan: • Aktif: {online}/{maxonline}
   },
    durum : {
	    mesaj: "{online} Kişi Sunucumuzda" // bot durumunda online sayısı || Varsayılan {online} Kişi Sunucumuzda 
   },
    ticket : {    
        parentOpened: "1137470622281236570", //destek talep kanallarının açılacağı kategorinin idsi

        Category1: "Minecraft Sorunları", //Destek talebi detayı için kategori 3 || Varsayılan: Minecraft Sorunları
        Category2: "Bulduğunuz Buglar", //Destek talebi detayı için kategori 2 || Varsayılan: Bulduğunuz Buglar
        Category3: "Şikayetler", //Destek talebi detayı için kategori 3 || Varsayılan: Şikayetler
          
        roleSupport: "1137471202961658017", //Destek talebine bakacak kişilere verilecek rolün idsi
            
        logsTicket: "1137470793052328006", //Destek taleplerinin loglanacağı kanal
        ticketChannel: "1137470676693950635" //Kullanıcıların destek talebi oluşturacağı kanalın idsi
    },
    oylama: {
        enabled: true, //oylama aktif mi? true: aktif false: pasif
        channelID: "1137471011428761600", //oylama kanalı
        emoji: "👍", //oylama emoji || Varsayılan: 👍
        emoji2: "👎", //oylama emoji || Varsayılan: 👎
        emoji3: "🤷", //oylama emoji || Varsayılan: 🤷
        altBaslik: { //alt başlık kullanılsın mı?
            enabled: false, //alt başlık kullanılsın mı? true: kullanılsın false: kullanılmasın
            arsivlemeSure: "2880" //alt başlık arşivlenme süresi (1440 dakika sonra [1440 dakika = 1 gün] arşivlenecek)
        } 

    }
}


module.exports = config;
