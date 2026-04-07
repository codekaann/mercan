const config = {
    bot : {
        slashCommands: "984874881869029448", // global veya sunucuIDsi yazın - slash olmayacaksa undefined yapın
	    token: "Nzg5MDY5MDcyNjM3MjMxMTA1.GnxDDV.fO3VOqI8V1M0PasodmIgdXAJo1WfNgqM7HsRq8", //Bot Tokeniniz
	    prefix: ["."], //komut ön eki
        id: "787926529924792390" //bot idsi
    },
    sunucu : {
        type: "java", //sunucu türü java veya bedrock 
 	    ip: " play.lenosmc.com", //sunucu adresi
        port: 25565, //sunucu portu java için varsayılan 25565 bedrock için varsayılan 19132
        site: "http://www.lenosmc.com", //sunucu sitesi
        isim: "Lenos SMP", //sunucu ismi
        mcindir: "https://tlauncher.org/", //minecraft indirme linki
        vote: "http://www.lenosmc.com", //oy verme linki
        
    },
    kanal : {
	    aktif: true, //sesli kanalda online gösterme aktif mi(true) olsun kapalı mı(false)
	    id: "1491165081810108447", // sunucu online sayısının gözükeceği kanal (ses kanalı)
	    yazi: "🐬 Aktif: {online}/{maxonline}" // kanalda gözükecek yazı || Varsayılan: • Aktif: {online}/{maxonline}
   },
    durum : {
	    mesaj: "{online} Kişi Sunucumuzda" // bot durumunda online sayısı || Varsayılan {online} Kişi Sunucumuzda 
   },
    ticket : {    
        parentOpened: "1180249082422374451", //destek talep kanallarının açılacağı kategorinin idsi

        Category1: "Minecraft Sorunları", //Destek talebi detayı için kategori 3 || Varsayılan: Minecraft Sorunları
        Category2: "Bulduğunuz Buglar", //Destek talebi detayı için kategori 2 || Varsayılan: Bulduğunuz Buglar
        Category3: "Şikayetler", //Destek talebi detayı için kategori 3 || Varsayılan: Şikayetler
          
        roleSupport: "1016402758166913154", //Destek talebine bakacak kişilere verilecek rolün idsi
            
        logsTicket: "1175109559648526346", //Destek taleplerinin loglanacağı kanal
        ticketChannel: "1012629878597759017" //Kullanıcıların destek talebi oluşturacağı kanalın idsi
    },
    oylama: {
        enabled: true, //oylama aktif mi? true: aktif false: pasif
        channelID: "1021730680633307166", //oylama kanalı
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
