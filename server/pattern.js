/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
const bots = [
  ' daum[\\s/]',
  ' deusu/',
  '(?:^|\\s)site',
  '@[a-z]',
  '\\(at\\)[a-z]',
  '\\(github\\.com/',
  '\\[at\\][a-z]',
  '^12345',
  '^<',
  '^[\\w\\s\\.]+/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?$',
  '^[\\w]+$',
  '^ace explorer',
  '^acoon',
  '^active',
  '^ad muncher',
  '^anglesharp/',
  '^apple-pubsub/',
  '^astute srm',
  '^avsdevicesdk/',
  '^bidtellect/',
  '^biglotron',
  '^blackboard safeassign',
  '^blocknote.net',
  '^braze sender',
  '^camo asset proxy',
  '^captivenetworksupport',
  '^castro',
  '^clamav[\\s/]',
  '^cobweb/',
  '^coccoc',
  '^dap ',
  '^ddg[_-]android',
  '^discourse',
  '^dispatch/\\d',
  '^downcast/',
  '^duckduckgo',
  '^enigma browser',
  '^evernote clip resolver',
  '^facebook',
  '^faraday',
  '^fdm[\\s/]\\d',
  '^getright/',
  '^gozilla/',
  '^hatena',
  '^hobbit',
  '^hotzonu',
  '^hwcdn/',
  '^infox-wisg',
  '^invision',
  '^jeode/',
  '^jetbrains',
  '^jetty/',
  '^jigsaw',
  '^linkdex',
  '^lwp-',
  '^lwp::simple',
  '^mailchimp\\.com$',
  '^metauri',
  '^microsoft bits',
  '^microsoft data',
  '^microsoft office existence',
  '^microsoft office protocol discovery',
  '^microsoft windows network diagnostics',
  '^microsoft-cryptoapi',
  '^microsoft-webdav-miniredir',
  '^movabletype',
  '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
  '^my browser$',
  '^navermailapp',
  '^netsurf',
  '^node-superagent',
  '^octopus',
  '^offline explorer',
  '^ossproxy',
  '^pagething',
  '^panscient',
  '^perimeterx',
  '^php',
  '^postrank',
  '^python',
  '^ramblermail',
  '^read',
  '^reed',
  '^restsharp/',
  '^shareaza',
  '^shockwave flash',
  '^smallproxy',
  '^snapchat',
  '^space bison',
  '^sprinklr',
  '^svn',
  '^swcd ',
  '^t-online browser',
  '^taringa',
  '^test certificate info',
  '^the knowledge ai',
  '^thinklab',
  '^traackr.com',
  '^tumblr/',
  '^vbulletin',
  '^venus/fedoraplanet',
  '^w3c',
  '^webbandit/',
  '^webcopier',
  '^wget',
  '^whatsapp',
  '^www-mechanize',
  '^xenu link sleuth',
  '^yahoo',
  '^yandex',
  '^zdm/\\d',
  '^zeushdthree',
  'adbeat\\.com',
  'appinsights',
  'archive',
  'ask jeeves/teoma',
  'bit\\.ly/',
  'bluecoat drtr',
  'bot',
  'browsex',
  'burpcollaborator',
  'capture',
  'catch',
  'check',
  'chrome-lighthouse',
  'chromeframe',
  'client',
  'cloud',
  'crawl',
  'daemon',
  'dareboost',
  'datanyze',
  'dataprovider',
  'dejaclick',
  'dmbrowser',
  'download',
  'email',
  'evc-batch/',
  'feed',
  'fetch',
  'firephp',
  'freesafeip',
  'ghost',
  'gomezagent',
  'google',
  'headlesschrome/',
  'http',
  'httrack',
  'hubspot marketing grader',
  'hydra',
  'ibisbrowser',
  'images',
  'index',
  'ips-agent',
  'java',
  'jorgee',
  'library',
  'mail\\.ru/',
  'manager',
  'monitor',
  'neustar wpm',
  'news',
  'nutch',
  'offbyone',
  'optimize',
  'pagespeed',
  'parse',
  'perl',
  'phantom',
  'pingdom',
  'powermarks',
  'preview',
  'probe',
  'ptst[\\s/]\\d',
  'reader',
  'rigor',
  'rss',
  'scan',
  'scrape',
  'search',
  'server',
  'sogou',
  'sparkler/',
  'spider',
  'statuscake',
  'stumbleupon\\.com',
  'supercleaner',
  'synapse',
  'synthetic',
  'toolbar',
  'torrent',
  'tracemyfile',
  'transcoder',
  'trendsmapresolver',
  'twingly recon',
  'url',
  'valid',
  'virtuoso',
  'wappalyzer',
  'webglance',
  'webkit2png',
  'websitemetadataretriever',
  'whatcms/',
  'wordpress',
  'zgrab',
  'bingbot',
  'BingPreview',
  'Baiduspider',
  '360Spider',
  'DareBoost',
  'GTmetrix',
  'developers.google.com',
  'Googlebot',
  'Googlebot-Mobile',
  'Googlebot-Image',
  'MSNBot',
  'Sosospider',
  'Sogou web spider',
  'Twitterbot',
  'TweetmemeBot'
]

const botsPattern = new RegExp(bots.join('|'), 'i')

module.exports = botsPattern