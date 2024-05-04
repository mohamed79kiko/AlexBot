module.exports = {
  TOKEN: "",//حط توكن البوت
  ownerID: [""],//حط ايدي الاونر
  botInvite: "",//حط ايدي البوت
  supportServer: "",//حط رابط سيرفرك
  mongodbURL: "",//حط رابط المنجو
  status: '',//حط اسمك لو حابب
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",//حط روم المشاكل


  sponsor: {
    status: true,
    url: "",//حط رابط سيرفرك
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
