// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "ゆずにぃ宝箱",
    "sidebarTitle": "　color sing",
    "footerText": "あああ",
    "footerSubText": "あああ",
    "footerNote": "あああ",
    "pageTitle": "サイト名を設定 - 特典管理",
    "loadingEmoji": "🍯",
    "loadingText": "Loading...",
    "showHeader": true,
    "showTitle": true,
    "titleGradient": false,
    "titleGradientDirection": "to-r",
    "titleGlow": false
  },
  "colors": {
    "deepBlue": "#100808",
    "oceanTeal": "#241010",
    "lightBlue": "#e0ac3e",
    "amber": "#f3903f",
    "accent": "#c83040",
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
    "primaryText": "",
    "accentText": "",
    "rank1Card": "",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "",
    "footerText": "",
    "contentText": "",
    "titleColor": "",
    "subText": "",
    "popupOverlayColor": "",
    "popupOverlayOpacity": 0,
    "glassBgColor": "#703838",
    "glassBgOpacity": 0
  },
  "fonts": {
    "display": "'Dancing Script', cursive",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
    "body": "'M PLUS Rounded 1c', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=M%20PLUS%20Rounded%201c:wght@400;500;700&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "https://drive.google.com/file/d/1Nl0wjFLHTfc8tobdiBJ64fWJ8y7aBTFe/view?usp=drivesdk",
    "headerMobile": "https://drive.google.com/file/d/18K5QkXb9KywxZWk8UH7HkwuEc0VM4rV-/view?usp=drivesdk",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1-HbWK_-RuNYTt5jHklwrM-LQMzSOttBa2Vb51L0C_GQ",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "ranges": {
      "ranking": "D2:G5",
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
      "icon": "🎼",
      "enabled": true,
      "title": "特典一覧"
    },
    {
      "id": "rights",
      "label": "特典権利者",
      "icon": "👥",
      "enabled": true,
      "title": "ボトルキープ一覧"
    },
    {
      "id": "icons",
      "label": "枠内アイコン",
      "icon": "🖼️",
      "enabled": true,
      "title": "枠内アイコン"
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
      "icon": "🎵",
      "columnIndex": 1,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "10k",
      "icon": "🎮",
      "columnIndex": 2,
      "displayTemplate": "権利: {value}曲分"
    },
    {
      "key": "15k",
      "icon": "💬",
      "columnIndex": 3,
      "displayTemplate": "権利: {value}曲分",
      "isBoolean": false
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "pointsUnit": "k",
    "targetsTitle": "Targets",
    "targetLabels": [
      "今旬の目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": []
    }
  },
  "menu": {
    "title": "Menu"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "更新",
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
    "particles": "none",
    "particleDirection": "up",
    "particleColor": "",
    "particleSize": 0.5,
    "particleOpacity": 1
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
