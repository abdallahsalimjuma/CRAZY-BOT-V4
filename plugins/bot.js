let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = conn.getName(m.sender)
  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let av = `./Assets/mp3/${pickRandom(['Crazybot', 'Crazybot'])}.mp3`

  m.reply(`Hello ${taguser} CRAZY BOT💥 IS AVAILABLE  type .menu `)
  conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

handler.customPrefix = new RegExp(
  '^[' +
    (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(
      /[|\\{}()[\]^$+*?.\-\^]/g,
      '\\$&'
    )
handler.command = /^(bot|Crazybot)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
    }
