export type Lang = "en" | "vi";
export const release = {
  "version": "1.0.0-open.2",
  "build": 66,
  "bytes": 267688710,
  "minimumAndroid": "7.0",
  "minimumApi": 24,
  "packageId": "com.nah.abyssadventure.beta",
  "date": "2026-10-22",
  "commit": "6e35a4221a27916aae0599a9cd00645f3d48ee20",
  "sha256": "6aafc09b594883db9b5ea09f10b757d5a08d527cab81963870a891eab38e66ee",
  "filename": "Abyss-Adventure-Open-Beta-v1.0-Install-Fix.apk",
  "tag": "open-beta-v1.0-android-install-fix1",
  "repository": "https://github.com/haohao2766-sudo/ABYSS-ADVENTURE",
  "source": "https://github.com/haohao2766-sudo/ABYSS-ADVENTURE/tree/6e35a4221a27916aae0599a9cd00645f3d48ee20/releases/open-beta-v1.0"
} as const;
export const releaseUrl = `${release.repository}/releases/tag/${release.tag}`;
export const downloadUrl = `${release.repository}/releases/download/${release.tag}/${release.filename}`;
export const creatorStory: {quote: string | null; origin: string | null; started: string | null; milestones: string | null; links: {label: string; url: string}[]} = {quote:null,origin:null,started:null,milestones:null,links:[]};
export const creatorPlaceholders = ["CREATOR QUOTE REQUIRED","FIRST DEVELOPMENT DATE REQUIRED","ORIGINAL PROTOTYPE IMAGE REQUIRED","APPROVED CREATOR LINKS REQUIRED"];
export const copy = {
  "en": {
    "skip": "Skip to content",
    "mainNavigation": "Main navigation",
    "switchToVietnamese": "Switch to Tiếng Việt",
    "switchToEnglish": "Switch to English",
    "world": "The world",
    "creator": "The creator",
    "play": "Get Open Beta",
    "soundOn": "Sound on",
    "soundOff": "Sound off",
    "soundError": "Sound could not start. Tap to try again.",
    "heroLine": "Build your party. Brave the descent.",
    "heroSub": "A dark-fantasy RPG by Phi Nguyễn. Battle, explore, craft and evolve through ten world maps.",
    "descend": "Scroll to descend",
    "worldTitle": "There is always\nsomething deeper.",
    "worldIntro": "From the first forest path to the Soul-Devouring Abyss. Follow the places that make the descent.",
    "chooseLocation": "Choose a location",
    "location": "World location",
    "worlds": [
      {
        "name": "Ashwood Forest",
        "image": "map-01",
        "detail": "Begin in Ashwood Forest. Learn combat and build your first party.",
        "index": "01"
      },
      {
        "name": "Graymist Hills",
        "image": "map-02",
        "detail": "Continue into the mist-covered hills and their Field Boss.",
        "index": "02"
      },
      {
        "name": "Wild Marsh",
        "image": "map-03",
        "detail": "A marshland stage in the ten-map progression.",
        "index": "03"
      },
      {
        "name": "Forgotten Cemetery",
        "image": "map-04",
        "detail": "Prepare for another Field Boss among the cemetery ruins.",
        "index": "04"
      },
      {
        "name": "Lament Mine",
        "image": "map-05",
        "detail": "The journey descends into the mine. Revisit your equipment and party.",
        "index": "05"
      },
      {
        "name": "Hanging Village",
        "image": "map-06",
        "detail": "The sixth world map, beyond the mine.",
        "index": "06"
      },
      {
        "name": "Blood Monastery",
        "image": "map-07",
        "detail": "Continue the descent through the monastery.",
        "index": "07"
      },
      {
        "name": "Cursed Citadel",
        "image": "map-08",
        "detail": "A citadel in the later world progression.",
        "index": "08"
      },
      {
        "name": "Bone Valley",
        "image": "map-09",
        "detail": "The ninth map. Bring the build you have developed.",
        "index": "09"
      },
      {
        "name": "Soul-Devouring Abyss",
        "image": "map-10",
        "detail": "The tenth map, at the far end of the current world progression.",
        "index": "10"
      }
    ],
    "originalArt": "Original approved game artwork · website presentation",
    "creatorTitle": "The people behind\nthe descent.",
    "creatorLine": "Original game concept & creative direction by Phi Nguyễn.",
    "creatorIntro": "Phi Nguyễn created the original game concept and directs its creative world. Henry Parker developed this official website and collaborates on development.",
    "buildQuote": "A game doesn’t appear at once. It grows system by system.",
    "buildNote": "From canonical source data to the current playable world. A visual explanation, not a historical prototype comparison.",
    "sourceLabel": "Canonical class paths",
    "excerpt": "excerpt",
    "gameLabel": "Current Open Beta · browser capture",
    "milestoneTitle": "The recent development trail",
    "milestones": [
      {
        "date": "06 OCT 2026",
        "title": "The daily rhythm",
        "body": "Daily reward integration joins the existing progression."
      },
      {
        "date": "07 OCT 2026",
        "title": "A world with a voice",
        "body": "Looping ambience and combat cues become part of the game."
      },
      {
        "date": "07 OCT 2026",
        "title": "Two languages. One identity.",
        "body": "English and Vietnamese interface coverage, with fantasy names preserved."
      }
    ],
    "creatorNotes": "The story still to be told",
    "creatorMissing": "Phi’s personal account belongs here. His first idea, first prototype and own words have not yet been supplied.",
    "creatorMissingLabels": [
      "Creator quote — awaiting Phi",
      "First development date — awaiting Phi",
      "Original prototype image — awaiting Phi",
      "Creator links — awaiting approval"
    ],
    "classesTitle": "Who will you\nbring below?",
    "classesIntro": "Choose a starting class, then discover the paths it can become. Your party and equipment give each choice its context.",
    "chooseClass": "Choose a class path",
    "skill": "Signature skill",
    "classes": [
      {
        "name": "Guardian",
        "base": "Warrior",
        "image": "beta-guardian",
        "path": "Warrior → Knight → Paladin → Guardian",
        "skill": "Unyielding Fortress",
        "detail": "A shield-bearing class built around protection and reduced incoming damage."
      },
      {
        "name": "Necromancer",
        "base": "Mage",
        "image": "beta-necromancer",
        "path": "Mage → Wizard → Summoner → Necromancer",
        "skill": "Necromantic Summon",
        "detail": "A summoning path that brings a separate unit into the fight."
      },
      {
        "name": "Assassin",
        "base": "Rogue",
        "image": "beta-assassin",
        "path": "Rogue → Assassin",
        "skill": "Shadow Strike",
        "detail": "A focused strike against a single enemy."
      }
    ],
    "gearTitle": "What you carry\nchanges the journey.",
    "gearIntro": "Materials become equipment. Equipment becomes part of your build. Examine a few of the first pieces you can craft.",
    "chooseGear": "Inspect equipment",
    "category": "Category",
    "property": "Base property",
    "rarity": "Rarity varies when crafted",
    "gear": [
      {
        "name": "Ashfall Bronze Sword",
        "image": "sword",
        "category": "Weapon · Warrior",
        "property": "ATK +9"
      },
      {
        "name": "Ashspirit Bronze Staff",
        "image": "staff",
        "category": "Weapon · Mage",
        "property": "MATK +11"
      },
      {
        "name": "Ashveil Bronze Bow",
        "image": "bow",
        "category": "Weapon · Rogue",
        "property": "ATK +9 · Crit +3"
      }
    ],
    "systemsTitle": "One world.\nConnected decisions.",
    "systemsIntro": "Explore the systems that connect your next battle to your next build. Website demonstrations only; play and rewards happen in the game.",
    "chooseSystem": "Explore game systems",
    "systems": [
      {
        "name": "Combat",
        "title": "Every encounter is a build decision.",
        "body": "Choose a party, enter a field encounter and use its available skills. Victory rewards feed the next preparation.",
        "image": "beta-combat",
        "kind": "capture"
      },
      {
        "name": "Field Bosses",
        "title": "Prepare for the map’s checkpoint.",
        "body": "Meet the map’s unlock conditions before challenging its Field Boss. Read the encounter and prepare your party.",
        "image": "chainlord",
        "kind": "art"
      },
      {
        "name": "Raids",
        "title": "A different kind of expedition.",
        "body": "Unlocked Raids have their own entry requirements and encounters. Blackwake Descent features The Drowned Regent.",
        "image": "regent",
        "kind": "art"
      },
      {
        "name": "Party",
        "title": "Choose who stands together.",
        "body": "Develop companions with different roles. Review their classes, skills and equipment before an encounter.",
        "image": "beta-party",
        "kind": "capture"
      },
      {
        "name": "Inventory",
        "title": "Know what you brought back.",
        "body": "Inspect equipment and materials in your inventory. The resources you keep become inputs for crafting and upgrades.",
        "image": "beta-inventory",
        "kind": "capture"
      },
      {
        "name": "Equipment",
        "title": "Build around the character.",
        "body": "Compare an item’s stats, effects and class restrictions before equipping it. Legal equipment choices shape a build.",
        "image": "sword",
        "kind": "art"
      },
      {
        "name": "Explore",
        "title": "Bring materials back.",
        "body": "Send available companions on territory expeditions. Claim completed trips and use their materials in your progression.",
        "image": "explore",
        "kind": "art"
      },
      {
        "name": "Craft",
        "title": "At the Runebound Crucible.",
        "body": "Check the recipe or formula, its ingredients and cost. Craft affordable equipment that suits your party.",
        "image": "crucible",
        "kind": "art"
      },
      {
        "name": "Upgrade",
        "title": "Return to the Ember Forge.",
        "body": "Select equipment and review the displayed cost and enhancement chance before committing your materials and Gold.",
        "image": "ember-forge",
        "kind": "art"
      },
      {
        "name": "Evolution",
        "title": "Choose the next class.",
        "body": "When a character is eligible, inspect the available evolution branches and required materials before choosing.",
        "image": "awakening",
        "kind": "art"
      },
      {
        "name": "Summon",
        "title": "Through the Crimson Gate.",
        "body": "Use a Summon Ticket to summon a companion. Review your roster and its capacity as your party grows.",
        "image": "beta-summon",
        "kind": "capture"
      },
      {
        "name": "Daily / Weekly Quests",
        "title": "Let your journey fulfil the contracts.",
        "body": "Review the rotating Daily and Weekly objectives. Completed objectives unlock milestones; claim available rewards in the game.",
        "image": "beta-quest",
        "kind": "capture"
      }
    ],
    "galleryTitle": "Inside the Open Beta.",
    "galleryIntro": "Authentic fresh-save browser captures of the verified APK’s web payload. No injected resources or altered interface. These are not physical Android device captures.",
    "inventory": "Inventory",
    "raid": "Raid combat",
    "screenAlt": "Actual interface from the current Open Beta APK web payload",
    "finalTitle": "How deep\nwill you go?",
    "preview": "Android Open Beta",
    "previewNote": "Open Beta · no QA Test Tools. This update fixes Android installation packaging; gameplay is unchanged. Install, launch and reinstall checks passed on an API 30 emulator. Physical-phone compatibility and full game balance remain unverified.",
    "download": "Download for Android",
    "releaseNotes": "Release notes",
    "android": "Android",
    "requirement": "Android 7.0 or later",
    "technical": "Version, package & checksum",
    "version": "Version",
    "built": "Build",
    "checksum": "SHA-256",
    "commitLabel": "Commit",
    "ios": "Abyss Adventure for iOS",
    "soon": "Coming soon",
    "iosNote": "The descent continues. A public iOS build is not available yet.",
    "projectCreditLead": "Abyss Adventure — ",
    "projectCreditJoin": " × ",
    "websiteCreditLead": "Website by ",
    "websiteCreditName": "Henry Parker (Nguyen Manh Tuan Hưng)",
    "phiProfileLabel": "Phi Nguyễn on GitHub",
    "henryProfileLabel": "Henry Parker on GitHub",
    "websiteProfileLabel": "Henry Parker (Nguyen Manh Tuan Hưng) on GitHub",
    "openGithubProfile": "Open GitHub profile",
    "source": "Game source",
    "back": "Back to the surface",
    "mute": "Ambience is optional. Sound is off until you choose it."
  },
  "vi": {
    "skip": "Đến nội dung chính",
    "mainNavigation": "Điều hướng chính",
    "switchToVietnamese": "Chuyển sang Tiếng Việt",
    "switchToEnglish": "Chuyển sang tiếng Anh",
    "world": "Thế giới",
    "creator": "Tác giả",
    "play": "Tải Open Beta",
    "soundOn": "Đang bật âm thanh",
    "soundOff": "Bật âm thanh",
    "soundError": "Chưa thể phát âm thanh. Chạm để thử lại.",
    "heroLine": "Xây dựng đội hình. Tiến vào vực sâu.",
    "heroSub": "Game nhập vai dark fantasy của Phi Nguyễn. Chiến đấu, khám phá, chế tạo và tiến hóa qua mười bản đồ.",
    "descend": "Cuộn để đi sâu hơn",
    "worldTitle": "Luôn có điều gì đó\nở sâu hơn.",
    "worldIntro": "Từ lối mòn đầu tiên đến Soul-Devouring Abyss. Đi qua những vùng đất tạo nên hành trình xuống vực.",
    "chooseLocation": "Chọn địa điểm",
    "location": "Địa điểm trên bản đồ",
    "worlds": [
      {
        "name": "Ashwood Forest",
        "image": "map-01",
        "detail": "Bắt đầu tại Ashwood Forest. Làm quen chiến đấu và xây dựng đội hình đầu tiên.",
        "index": "01"
      },
      {
        "name": "Graymist Hills",
        "image": "map-02",
        "detail": "Tiếp tục qua vùng đồi sương mù và Field Boss của bản đồ.",
        "index": "02"
      },
      {
        "name": "Wild Marsh",
        "image": "map-03",
        "detail": "Chặng đầm lầy trong hành trình mười bản đồ.",
        "index": "03"
      },
      {
        "name": "Forgotten Cemetery",
        "image": "map-04",
        "detail": "Chuẩn bị đối mặt Field Boss giữa những tàn tích nghĩa địa.",
        "index": "04"
      },
      {
        "name": "Lament Mine",
        "image": "map-05",
        "detail": "Hành trình đi xuống hầm mỏ. Xem lại trang bị và đội hình.",
        "index": "05"
      },
      {
        "name": "Hanging Village",
        "image": "map-06",
        "detail": "Bản đồ thế giới thứ sáu, sau hầm mỏ.",
        "index": "06"
      },
      {
        "name": "Blood Monastery",
        "image": "map-07",
        "detail": "Tiếp tục hành trình qua tu viện.",
        "index": "07"
      },
      {
        "name": "Cursed Citadel",
        "image": "map-08",
        "detail": "Thành trì trong các chặng sau của thế giới.",
        "index": "08"
      },
      {
        "name": "Bone Valley",
        "image": "map-09",
        "detail": "Bản đồ thứ chín. Mang theo lối xây dựng nhân vật bạn đã phát triển.",
        "index": "09"
      },
      {
        "name": "Soul-Devouring Abyss",
        "image": "map-10",
        "detail": "Bản đồ thứ mười, chặng sâu nhất trong thế giới hiện tại.",
        "index": "10"
      }
    ],
    "originalArt": "Hình ảnh gốc đã duyệt trong game · trình bày trên website",
    "creatorTitle": "Những người phía sau\nhành trình.",
    "creatorLine": "Ý tưởng game gốc & định hướng sáng tạo: Phi Nguyễn.",
    "creatorIntro": "Phi Nguyễn tạo ra ý tưởng game gốc và định hướng thế giới sáng tạo. Henry Parker phát triển website chính thức và cộng tác phát triển.",
    "buildQuote": "Một game không xuất hiện trong chớp mắt. Nó lớn lên qua từng hệ thống.",
    "buildNote": "Từ dữ liệu gốc đến thế giới đang chơi được. Đây là minh họa quá trình xây dựng, không phải so sánh với nguyên mẫu lịch sử.",
    "sourceLabel": "Nhánh lớp nhân vật trong dữ liệu gốc",
    "excerpt": "trích đoạn",
    "gameLabel": "Open Beta hiện tại · ảnh chụp trên trình duyệt",
    "milestoneTitle": "Những dấu mốc phát triển gần đây",
    "milestones": [
      {
        "date": "06.10.2026",
        "title": "Nhịp điệu hằng ngày",
        "body": "Tích hợp phần thưởng hằng ngày vào tiến trình hiện có."
      },
      {
        "date": "07.10.2026",
        "title": "Thế giới có âm thanh",
        "body": "Âm thanh nền lặp và hiệu ứng chiến đấu trở thành một phần của game."
      },
      {
        "date": "07.10.2026",
        "title": "Hai ngôn ngữ. Một bản sắc.",
        "body": "Hoàn thiện giao diện tiếng Anh và tiếng Việt, giữ nguyên tên riêng kỳ ảo."
      }
    ],
    "creatorNotes": "Câu chuyện còn chờ được kể",
    "creatorMissing": "Chỗ này dành cho lời kể của Phi. Ý tưởng đầu tiên, nguyên mẫu đầu tiên và chia sẻ của tác giả vẫn chưa được cung cấp.",
    "creatorMissingLabels": [
      "Trích dẫn của tác giả — chờ Phi",
      "Ngày bắt đầu phát triển — chờ Phi",
      "Hình nguyên mẫu gốc — chờ Phi",
      "Liên kết của tác giả — chờ duyệt"
    ],
    "classesTitle": "Bạn sẽ đưa ai\nxuống vực?",
    "classesIntro": "Chọn lớp khởi đầu, rồi khám phá các nhánh tiến hóa. Đội hình và trang bị tạo nên vai trò cho từng lựa chọn.",
    "chooseClass": "Chọn nhánh lớp nhân vật",
    "skill": "Kỹ năng đặc trưng",
    "classes": [
      {
        "name": "Guardian",
        "base": "Warrior",
        "image": "beta-guardian",
        "path": "Warrior → Knight → Paladin → Guardian",
        "skill": "Unyielding Fortress",
        "detail": "Lớp nhân vật mang khiên, tập trung bảo vệ và giảm sát thương nhận vào."
      },
      {
        "name": "Necromancer",
        "base": "Mage",
        "image": "beta-necromancer",
        "path": "Mage → Wizard → Summoner → Necromancer",
        "skill": "Necromantic Summon",
        "detail": "Nhánh triệu hồi đưa một đơn vị riêng vào trận chiến."
      },
      {
        "name": "Assassin",
        "base": "Rogue",
        "image": "beta-assassin",
        "path": "Rogue → Assassin",
        "skill": "Shadow Strike",
        "detail": "Một đòn đánh tập trung vào một kẻ địch."
      }
    ],
    "gearTitle": "Hành trang định hình\nhành trình.",
    "gearIntro": "Nguyên liệu trở thành trang bị. Trang bị góp phần tạo nên lối xây dựng nhân vật. Khám phá vài món có thể chế tạo từ đầu game.",
    "chooseGear": "Xem trang bị",
    "category": "Phân loại",
    "property": "Thuộc tính cơ bản",
    "rarity": "Độ hiếm thay đổi khi chế tạo",
    "gear": [
      {
        "name": "Ashfall Bronze Sword",
        "image": "sword",
        "category": "Vũ khí · Warrior",
        "property": "ATK +9"
      },
      {
        "name": "Ashspirit Bronze Staff",
        "image": "staff",
        "category": "Vũ khí · Mage",
        "property": "MATK +11"
      },
      {
        "name": "Ashveil Bronze Bow",
        "image": "bow",
        "category": "Vũ khí · Rogue",
        "property": "ATK +9 · Crit +3"
      }
    ],
    "systemsTitle": "Một thế giới.\nNhững lựa chọn gắn kết.",
    "systemsIntro": "Khám phá các hệ thống kết nối trận chiến với cách xây dựng nhân vật. Website chỉ giới thiệu; việc chơi và nhận thưởng diễn ra trong game.",
    "chooseSystem": "Khám phá các hệ thống",
    "systems": [
      {
        "name": "Chiến đấu",
        "title": "Mỗi trận chiến là một lựa chọn.",
        "body": "Chọn đội hình, bước vào trận chiến và sử dụng kỹ năng sẵn có. Phần thưởng chiến thắng giúp chuẩn bị cho chặng tiếp theo.",
        "image": "beta-combat",
        "kind": "capture"
      },
      {
        "name": "Field Boss",
        "title": "Chuẩn bị cho thử thách của bản đồ.",
        "body": "Hoàn thành điều kiện mở khóa trước khi thách đấu Field Boss. Tìm hiểu trận đấu và chuẩn bị đội hình.",
        "image": "chainlord",
        "kind": "art"
      },
      {
        "name": "Raid",
        "title": "Một hành trình thử thách khác.",
        "body": "Raid đã mở có điều kiện vào và các trận đấu riêng. Blackwake Descent có The Drowned Regent.",
        "image": "regent",
        "kind": "art"
      },
      {
        "name": "Đội hình",
        "title": "Chọn những người sát cánh.",
        "body": "Phát triển đồng hành với các vai trò khác nhau. Xem lớp, kỹ năng và trang bị trước mỗi trận.",
        "image": "beta-party",
        "kind": "capture"
      },
      {
        "name": "Túi đồ",
        "title": "Xem những gì bạn mang về.",
        "body": "Kiểm tra trang bị và nguyên liệu trong túi. Tài nguyên được giữ lại dùng cho chế tạo và nâng cấp.",
        "image": "beta-inventory",
        "kind": "capture"
      },
      {
        "name": "Trang bị",
        "title": "Xây dựng theo nhân vật.",
        "body": "So sánh chỉ số, hiệu ứng và giới hạn lớp trước khi trang bị. Lựa chọn phù hợp góp phần định hình nhân vật.",
        "image": "sword",
        "kind": "art"
      },
      {
        "name": "Khám phá",
        "title": "Mang nguyên liệu trở về.",
        "body": "Cử đồng hành sẵn sàng đi thám hiểm lãnh địa. Nhận thưởng khi hoàn thành và dùng nguyên liệu để phát triển.",
        "image": "explore",
        "kind": "art"
      },
      {
        "name": "Chế tạo",
        "title": "Tại Runebound Crucible.",
        "body": "Kiểm tra công thức, nguyên liệu và chi phí. Chế tạo trang bị phù hợp với đội hình khi đủ điều kiện.",
        "image": "crucible",
        "kind": "art"
      },
      {
        "name": "Nâng cấp",
        "title": "Trở lại Ember Forge.",
        "body": "Chọn trang bị, xem chi phí và xác suất nâng cấp hiển thị trước khi dùng nguyên liệu và Gold.",
        "image": "ember-forge",
        "kind": "art"
      },
      {
        "name": "Tiến hóa",
        "title": "Chọn lớp tiếp theo.",
        "body": "Khi nhân vật đủ điều kiện, xem các nhánh tiến hóa và nguyên liệu cần thiết trước khi lựa chọn.",
        "image": "awakening",
        "kind": "art"
      },
      {
        "name": "Triệu hồi",
        "title": "Qua Crimson Gate.",
        "body": "Dùng Summon Ticket để triệu hồi đồng hành. Chú ý danh sách nhân vật và sức chứa khi đội hình mở rộng.",
        "image": "beta-summon",
        "kind": "capture"
      },
      {
        "name": "Nhiệm vụ Ngày / Tuần",
        "title": "Hoàn thành giao ước qua hành trình.",
        "body": "Xem mục tiêu nhiệm vụ Ngày và Tuần. Mục tiêu hoàn thành mở các mốc; nhận phần thưởng sẵn có trong game.",
        "image": "beta-quest",
        "kind": "capture"
      }
    ],
    "galleryTitle": "Bên trong Open Beta.",
    "galleryIntro": "Ảnh chụp trên trình duyệt từ dữ liệu web của APK đã xác minh, dùng save mới. Không thêm tài nguyên hay sửa giao diện. Đây không phải ảnh chụp trên điện thoại Android thực.",
    "inventory": "Túi đồ",
    "raid": "Chiến đấu Raid",
    "screenAlt": "Giao diện thực từ dữ liệu web của APK Open Beta hiện tại",
    "finalTitle": "Bạn sẽ đi\nsâu đến đâu?",
    "preview": "Open Beta Android",
    "previewNote": "Open Beta · không có Công cụ kiểm thử QA. Bản này sửa cách đóng gói cài đặt Android, giữ nguyên gameplay. Đã qua kiểm tra cài đặt, mở và cài lại trên trình giả lập API 30. Chưa xác minh khả năng tương thích điện thoại thực và cân bằng toàn bộ game.",
    "download": "Tải xuống cho Android",
    "releaseNotes": "Ghi chú bản phát hành",
    "android": "Android",
    "requirement": "Android 7.0 trở lên",
    "technical": "Phiên bản, gói cài đặt và mã kiểm tra",
    "version": "Phiên bản",
    "built": "Bản dựng",
    "checksum": "SHA-256",
    "commitLabel": "Mã commit",
    "ios": "Abyss Adventure cho iOS",
    "soon": "Sắp ra mắt",
    "iosNote": "Hành trình vẫn tiếp tục. Hiện chưa có bản iOS công khai.",
    "projectCreditLead": "Abyss Adventure — ",
    "projectCreditJoin": " × ",
    "websiteCreditLead": "Website được thực hiện bởi ",
    "websiteCreditName": "Henry Parker (Nguyen Manh Tuan Hưng)",
    "phiProfileLabel": "Phi Nguyễn trên GitHub",
    "henryProfileLabel": "Henry Parker trên GitHub",
    "websiteProfileLabel": "Henry Parker (Nguyen Manh Tuan Hưng) trên GitHub",
    "openGithubProfile": "Mở hồ sơ GitHub",
    "source": "Mã nguồn game",
    "back": "Trở về mặt đất",
    "mute": "Âm thanh nền là tùy chọn. Chỉ phát khi bạn chủ động bật."
  }
} as const;
