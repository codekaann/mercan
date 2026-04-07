const chalk = require('chalk');
const { ActivityType, ButtonStyle, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    eventName: "ready",
    name: 'Client Ready',
    once: true,
    async execute(client) {
        const settings = require("../../app.js");
        const i = require("util").promisify(setInterval);
        const got = require('got');

        const url = `https://api.mcstatus.io/v2/status/${settings.sunucu.type}/${settings.sunucu.ip}:${settings.sunucu.port}`;

        console.log(chalk.red('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))
        console.log(chalk.green('Bot İsmi: ') + chalk.cyan(client.user.username))
        console.log(chalk.green('Bot Durumu: ') + chalk.cyan('Başlatıldı'))
        console.log(chalk.green(`Sunucu IP`) + chalk.cyan(` ${settings.sunucu.ip}`));
        console.log(chalk.red('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))

        // 🔥 SUNUCU DURUM
        async function update() {
            try {
                const body = await got(url).json();

                const status = settings.durum.mesaj.replace("{online}", body.players.online);

                if (body.online === true) {
                    client.user.setStatus('online');
                    client.user.setActivity(status, { type: ActivityType.Playing });

                    console.log(
                        chalk.magenta(`[${settings.sunucu.isim}]`) +
                        chalk.cyan(" Sunucumuzda ") +
                        chalk.bold(chalk.yellow(`${body.players.online}`)) +
                        chalk.cyan(` oyuncu aktif!`)
                    );
                } else {
                    client.user.setStatus('dnd');
                    client.user.setActivity("Sunucu Kapalı", { type: ActivityType.Playing });

                    console.log(
                        chalk.yellow(`[${settings.sunucu.isim}]`) +
                        chalk.red(` Sunucu Kapalı`)
                    );
                }

            } catch (error) {
                console.log("API HATA:", error.message);
            }
        }

        // 🔥 KANAL GÜNCELLEME
        async function updates() {
            try {
                const body = await got(url).json();

                const channel = client.channels.cache.get(settings.kanal.id);
                if (!channel) return;

                if (!body.online) {
                    return channel.setName("Sunucu Kapalı");
                }

                const online = body.players.online || 0;
                const max = body.players.max || 0;

                channel.setName(
                    settings.kanal.yazi
                        .replace("{online}", online)
                        .replace("{maxonline}", max)
                );

            } catch (error) {
                console.log("KANAL HATA:", error.message);
            }
        }

        // başlat
        update();
        i(update, 30000).catch(err => console.log(err));

        if (settings.kanal.aktif) {
            updates();
            i(updates, 30000).catch(err => console.log(err));
        }

        // 🔥 TICKET
        const oniChan = client.channels.cache.get(settings.ticket.ticketChannel);

        async function sendTicketMSG() {
            const embed = new EmbedBuilder()
                .setColor('6d6ee8')
                .setAuthor({ name: 'Ticket', iconURL: client.user.avatarURL() })
                .setDescription('Destek talebi açmak için butona basın.')
                .setFooter({ text: `${settings.sunucu.isim} Destek Talebi`, iconURL: client.user.displayAvatarURL() });

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('talep-olustur')
                    .setLabel('Destek Talebi Oluştur')
                    .setEmoji('✉️')
                    .setStyle(ButtonStyle.Primary)
            );

            await oniChan.send({
                embeds: [embed],
                components: [row]
            });
        }

        oniChan.bulkDelete(100, true)
            .catch(() => console.log("Eski mesajlar silinemedi (14 gün sınırı)"))
            .then(() => {
                sendTicketMSG();
                console.log(chalk.green(`[Talep Sistemi]`) + chalk.cyan(' Mesaj gönderildi'));
            });

    },
};
