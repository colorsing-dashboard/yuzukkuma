// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "ゆずにぃの蜜壺",
    "sidebarTitle": "　color sing",
    "footerText": "🐻蜂蜜はいいよなぁ🍯",
    "footerSubText": "今日も明日も楽しくなぁれ🪄",
    "footerNote": "© produced by  まぐろふぉん",
    "pageTitle": "採蜜壺 - 特典管理",
    "loadingEmoji": "🍯🧸",
    "loadingText": "Loading...",
    "showHeader": true,
    "showTitle": true,
    "titleStyle": "glass",
    "titleGradient": true,
    "titleGradientDirection": "to-r",
    "titleGlow": true,
    "titlePosition": "center",
    "titleSize": "medium",
    "titleTextFill": "default",
    "titleGlassBg": 0.2,
    "titleGlassBlur": 1,
    "titlePaddingY": 2,
    "headerOverlayOpacity": 0.1,
    "headerImageFit": "contain",
    "headerHeight": "",
    "headerHeightMobile": "",
    "headerImageW": 0,
    "headerImageH": 0,
    "headerImageWMobile": 0,
    "headerImageHMobile": 0
  },
  "colors": {
    "deepBlue": "#0c0a04",
    "oceanTeal": "#8a844d",
    "lightBlue": "#c89828",
    "amber": "#e8d080",
    "accent": "#ff0000",
    "gold": "#ffd700"
  },
  "colorOverrides": {
    "headerGradientStart": "",
    "headerGradientEnd": "",
    "titleGradientStart": "",
    "titleGradientMid": "",
    "titleGradientEnd": "",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#d8e84a",
    "accentText": "",
    "rank1Card": "",
    "backgroundMain": "#737373",
    "backgroundMid": "",
    "nameText": "#ffffff",
    "footerText": "",
    "contentText": "",
    "titleColor": "",
    "subText": "",
    "popupOverlayColor": "",
    "popupOverlayOpacity": "",
    "menuCardLabelColor": "",
    "menuCardLabelOpacity": "",
    "glassBgColor": "",
    "glassBgOpacity": ""
  },
  "fonts": {
    "display": "'Hachi Maru Pop', cursive",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Hachi%20Maru%20Pop:wght@400&display=swap",
    "body": "'RocknRoll One', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=RocknRoll%20One:wght@400&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "https://drive.google.com/file/d/1rzEh50gQEOGJKtGgY72a6HxPNoImOWws/view?usp=drivesdk",
    "headerMobile": "https://drive.google.com/file/d/1i66mpeieEES5LwnyIg8gtgWRd5Jei3WU/view?usp=drivesdk",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1z5nTH-vWi_Uomew6_EyNZK8YgiI2CTA_outjaKn8nek",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "eventSheetName": "イベント",
    "ranges": {
      "ranking": "D2:G7",
      "goals": "A2:B10",
      "benefits": "A2:E20"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {
      "id": "home",
      "label": "Home",
      "icon": "🏠",
      "enabled": true
    },
    {
      "id": "menu",
      "label": "特典一覧",
      "icon": "🎁",
      "enabled": true,
      "title": "採蜜量一覧"
    },
    {
      "id": "rights",
      "label": "採集者リスト",
      "icon": "👥",
      "enabled": true,
      "title": "獲得一覧"
    },
    {
      "id": "icons",
      "label": "枠内アイコン",
      "icon": "🖼️",
      "enabled": true,
      "title": "各種枠内アイコン"
    },
    {
      "id": "events",
      "label": "イベント",
      "icon": "🥂",
      "enabled": true,
      "title": "開催情報"
    }
  ],
  "benefitTiers": [
    {
      "key": "1k",
      "icon": "🖼️",
      "columnIndex": 0,
      "displayTemplate": "特典: {value}",
      "isMembership": false
    },
    {
      "key": "5k",
      "icon": "🖼️",
      "columnIndex": 1,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "10k",
      "icon": "🎤",
      "columnIndex": 2,
      "displayTemplate": "権利: {value}曲分"
    },
    {
      "key": "15k",
      "icon": "📝",
      "columnIndex": 3,
      "displayTemplate": "権利: {value}曲分",
      "isBoolean": false
    },
    {
      "key": "20k",
      "icon": "⭐",
      "columnIndex": 4,
      "displayTemplate": "権利: {value}曲分"
    },
    {
      "key": "30k",
      "icon": "🎧",
      "columnIndex": 5,
      "displayTemplate": "権利: {value}回分"
    },
    {
      "key": "旬10k",
      "icon": "🖼️",
      "columnIndex": 0,
      "displayTemplate": "獲得済!!",
      "isBoolean": true
    },
    {
      "key": "旬20k",
      "icon": "👑",
      "columnIndex": 7,
      "displayTemplate": "グッズ: {value}個分"
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "採蜜",
    "pointsUnit": "kg",
    "targetsTitle": "Targets",
    "targetLabels": [
      "通年目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": [
        {
          "question": "採集量を増やすとどうなるの?",
          "answer": "より多く主で遊べます"
        },
        {
          "question": "採集量が少ないと楽しめない?",
          "answer": "楽しみ方は皆様それぞれ。\n採蜜は計画的に。"
        },
        {
          "question": "NG行為は?",
          "answer": "他の採集者に迷惑を掛ける行為は御遠慮ください。\n注意しても是正していただけない場合は入場をお断りすることもあります。"
        },
        {
          "question": "※お願い",
          "answer": "いつも応援ありがとうございます🙇‍♂️\n私は皆様と短期的なお付き合いを望んではおりません。\n出来るだけ長く仲良くしていただきたいと思っております。\n何卒ご無理はなさらぬようお願い申し上げます。\n来てくれるだけで、コメントをいただけるだけでとても嬉しいです。\n今後とも宜しくお願い致します。"
        }
      ]
    }
  },
  "menu": {
    "title": "Menu"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "再入場",
    "lastUpdate": "最終更新",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} ",
    "searchPlaceholder": "🔍 名前で検索...",
    "specialRightLabel": "Special権利",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "star",
    "particleDirection": "down",
    "particleColor": "#ffffff",
    "particleSize": 0.75,
    "particleOpacity": 1.5
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "yuzukkuma",
    "branch": "main",
    "token": "rev:MAAF0D7sAT3FGYVFdBgEaIFs6riQQvX9g3TH8SvK35iXMziMvVYfFgCQeyZ_xY5Z1yWetC0i0IMBSTQB11_tap_buhtig"
  },
  "admin": {
    "password": "dangan999",
    "developerKey": "CSadmin"
  }
}
