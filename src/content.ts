export type Lang = "en" | "vi";
export const release = {
  version: "1.2.1",
  build: 57,
  bytes: 138786779,
  minimumAndroid: "7.0",
  date: "2026-10-07",
  commit: "d0bcd5a07f11482c97591deda95357090efb358e",
  sha256: "916108e500cf96e436efad29bb31a96c1164faa4f490fc7cdf4aad5f6cb47933",
  filename: "Abyss-Adventure-1.2.1-57-project1-d0bcd5a-PhiTest.apk",
  tag: "android-preview-1.2.1-57-d0bcd5a",
  repository: "https://github.com/abyss-adventure/abyss-adventure.github.io",
  source:
    "https://github.com/haohao2766-sudo/ABYSS-ADVENTURE/tree/d0bcd5a07f11482c97591deda95357090efb358e",
};
export const releaseUrl = `${release.repository}/releases/tag/${release.tag}`;
export const downloadUrl = `${release.repository}/releases/download/${release.tag}/${release.filename}`;
export const creatorStory: {
  quote: string | null;
  origin: string | null;
  started: string | null;
  milestones: string | null;
  links: { label: string; url: string }[];
} = { quote: null, origin: null, started: null, milestones: null, links: [] };
export const creatorPlaceholders = [
  "CREATOR QUOTE REQUIRED",
  "FIRST DEVELOPMENT DATE REQUIRED",
  "ORIGINAL PROTOTYPE IMAGE REQUIRED",
  "APPROVED CREATOR LINKS REQUIRED",
];
export const copy = {
  en: {
    skip: "Skip to content",
    mainNavigation: "Main navigation",
    switchToVietnamese: "Switch to Tiếng Việt",
    switchToEnglish: "Switch to English",
    world: "The world",
    creator: "The creator",
    play: "Get the preview",
    soundOn: "Sound on",
    soundOff: "Sound off",
    soundError: "Sound could not start. Tap to try again.",
    heroLine: "A world built one layer at a time.",
    heroSub:
      "Abyss Adventure — a project by Phi Nguyễn and Henry Parker. Original game concept and creative direction by Phi Nguyễn.",
    descend: "Scroll to descend",
    worldTitle: "There is always\nsomething deeper.",
    worldIntro:
      "From the first forest path to the Soul-Devouring Abyss. Follow the places that make the descent.",
    chooseLocation: "Choose a location",
    location: "World location",
    worlds: [
      {
        name: "Ashwood Forest",
        image: "forest",
        detail:
          "The first world map. The descent begins among roots and stone.",
        index: "01",
      },
      {
        name: "Lament Mine",
        image: "mine",
        detail:
          "The fifth world map. Worn passages carry the journey underground.",
        index: "05",
      },
      {
        name: "Soul-Devouring Abyss",
        image: "abyss",
        detail:
          "The tenth world map. At the far end of the current world progression.",
        index: "10",
      },
    ],
    originalArt: "Original game artwork · promotional composition",
    creatorTitle: "Behind the Abyss.",
    creatorLine: "Original game concept & creative direction by Phi Nguyễn.",
    creatorIntro:
      "A world is more than its landscape. It is every small system that makes the next decision possible.",
    buildQuote: "A game doesn’t appear at once. It grows system by system.",
    buildNote:
      "From canonical source data to the current playable world. A visual explanation, not a historical prototype comparison.",
    sourceLabel: "Canonical class paths",
    excerpt: "excerpt",
    gameLabel: "Actual Android preview capture",
    milestoneTitle: "The recent development trail",
    milestones: [
      {
        date: "06 OCT 2026",
        title: "The daily rhythm",
        body: "Daily reward integration joins the existing progression.",
      },
      {
        date: "07 OCT 2026",
        title: "A world with a voice",
        body: "Looping ambience and combat cues become part of the game.",
      },
      {
        date: "07 OCT 2026",
        title: "Two languages. One identity.",
        body: "English and Vietnamese interface coverage, with fantasy names preserved.",
      },
    ],
    creatorNotes: "The story still to be told",
    creatorMissing:
      "Phi’s personal account belongs here. His first idea, first prototype and own words have not yet been supplied.",
    creatorMissingLabels: [
      "Creator quote — awaiting Phi",
      "First development date — awaiting Phi",
      "Original prototype image — awaiting Phi",
      "Creator links — awaiting approval",
    ],
    classesTitle: "Who will you\nbring below?",
    classesIntro:
      "Three beginnings. Different paths through the same darkness.",
    chooseClass: "Choose a class path",
    skill: "Signature skill",
    classes: [
      {
        name: "Guardian",
        base: "Warrior",
        image: "guardian",
        path: "Warrior → Knight → Paladin → Guardian",
        skill: "Unyielding Fortress",
        detail:
          "A shield-bearing class built around protection and reduced incoming damage.",
      },
      {
        name: "Necromancer",
        base: "Mage",
        image: "necromancer",
        path: "Mage → Wizard → Summoner → Necromancer",
        skill: "Necromantic Summon",
        detail: "A summoning path that brings a separate unit into the fight.",
      },
      {
        name: "Assassin",
        base: "Rogue",
        image: "assassin",
        path: "Rogue → Assassin",
        skill: "Shadow Strike",
        detail: "A focused strike against a single enemy.",
      },
    ],
    gearTitle: "What you carry\nchanges the journey.",
    gearIntro:
      "Materials become equipment. Equipment becomes part of your build. Examine a few of the first pieces you can craft.",
    chooseGear: "Inspect equipment",
    category: "Category",
    property: "Base property",
    rarity: "Rarity varies when crafted",
    gear: [
      {
        name: "Ashfall Bronze Sword",
        image: "sword",
        category: "Weapon · Warrior",
        property: "ATK +9",
      },
      {
        name: "Ashspirit Bronze Staff",
        image: "staff",
        category: "Weapon · Mage",
        property: "MATK +11",
      },
      {
        name: "Ashveil Bronze Bow",
        image: "bow",
        category: "Weapon · Rogue",
        property: "ATK +9 · Crit +3",
      },
    ],
    systemsTitle: "One world.\nConnected decisions.",
    systemsIntro:
      "Choose a system to see where it fits. These are the current game’s systems, not a promise of future features.",
    chooseSystem: "Explore game systems",
    systems: [
      {
        name: "Explore",
        title: "Bring something back.",
        body: "Send companions into territories to gather materials.",
        image: "explore",
        kind: "art",
      },
      {
        name: "Craft",
        title: "Give materials a purpose.",
        body: "Choose a recipe and turn your materials into equipment.",
        image: "forge",
        kind: "art",
      },
      {
        name: "Party",
        title: "Choose who stands together.",
        body: "Arrange your characters and their equipment before the next encounter.",
        image: "guardian",
        kind: "art",
      },
      {
        name: "Field",
        title: "Meet the world in combat.",
        body: "Fight through the current world maps and their enemies.",
        image: "game-world",
        kind: "capture",
      },
      {
        name: "Raid",
        title: "Face what waits below.",
        body: "Enter Blackwake Descent and confront The Drowned Regent.",
        image: "game-raid",
        kind: "capture",
      },
    ],
    galleryTitle: "This is the game.",
    galleryIntro:
      "Unretouched interface captures from the Android test build. Test controls may be visible.",
    inventory: "Inventory",
    raid: "Raid combat",
    screenAlt: "Actual Abyss Adventure Android preview screen",
    finalTitle: "How deep\nwill you go?",
    preview: "Android Preview Build",
    previewNote:
      "A test candidate, with test tools included. Not a stable public release.",
    download: "Download for Android",
    releaseNotes: "Release notes",
    android: "Android",
    requirement: "Android 7.0 or later",
    technical: "Build details & checksum",
    version: "Version",
    built: "Build",
    checksum: "SHA-256",
    commitLabel: "Commit",
    ios: "Abyss Adventure for iOS",
    soon: "Coming soon",
    iosNote: "The descent continues. A public iOS build is not available yet.",
    projectCreditLead: "Abyss Adventure · ",
    projectCreditJoin: " × ",
    websiteCreditLead: "Website by ",
    websiteCreditName: "Henry Parker (Nguyen Manh Tuan Hưng)",
    phiProfileLabel: "Phi Nguyễn on GitHub",
    henryProfileLabel: "Henry Parker on GitHub",
    websiteProfileLabel: "Henry Parker (Nguyen Manh Tuan Hưng) on GitHub",
    openGithubProfile: "Open GitHub profile",
    source: "Game source",
    back: "Back to the surface",
    mute: "Ambience is optional. Sound is off until you choose it.",
  },
  vi: {
    skip: "Đến nội dung chính",
    mainNavigation: "Điều hướng chính",
    switchToVietnamese: "Chuyển sang Tiếng Việt",
    switchToEnglish: "Chuyển sang tiếng Anh",
    world: "Thế giới",
    creator: "Tác giả",
    play: "Tải bản thử nghiệm",
    soundOn: "Đang bật âm thanh",
    soundOff: "Bật âm thanh",
    soundError: "Chưa thể phát âm thanh. Chạm để thử lại.",
    heroLine: "Một thế giới được dựng nên qua từng lớp.",
    heroSub:
      "Abyss Adventure — dự án của Phi Nguyễn và Henry Parker. Ý tưởng game gốc và định hướng sáng tạo: Phi Nguyễn.",
    descend: "Cuộn để đi sâu hơn",
    worldTitle: "Luôn có điều gì đó\nở sâu hơn.",
    worldIntro:
      "Từ lối mòn đầu tiên đến Soul-Devouring Abyss. Đi qua những vùng đất tạo nên hành trình xuống vực.",
    chooseLocation: "Chọn địa điểm",
    location: "Địa điểm trên bản đồ",
    worlds: [
      {
        name: "Ashwood Forest",
        image: "forest",
        detail:
          "Bản đồ thế giới đầu tiên. Hành trình bắt đầu giữa rễ cây và đá.",
        index: "01",
      },
      {
        name: "Lament Mine",
        image: "mine",
        detail:
          "Bản đồ thế giới thứ năm. Những lối đi cũ dẫn hành trình xuống lòng đất.",
        index: "05",
      },
      {
        name: "Soul-Devouring Abyss",
        image: "abyss",
        detail:
          "Bản đồ thế giới thứ mười. Chặng sâu nhất của tiến trình thế giới hiện tại.",
        index: "10",
      },
    ],
    originalArt: "Hình ảnh gốc trong game · bố cục quảng bá",
    creatorTitle: "Phía sau Abyss.",
    creatorLine: "Ý tưởng game gốc & định hướng sáng tạo: Phi Nguyễn.",
    creatorIntro:
      "Một thế giới không chỉ có cảnh quan. Nó còn là từng hệ thống nhỏ mở ra lựa chọn tiếp theo.",
    buildQuote:
      "Một game không xuất hiện trong chớp mắt. Nó lớn lên qua từng hệ thống.",
    buildNote:
      "Từ dữ liệu gốc đến thế giới đang chơi được. Đây là minh họa quá trình xây dựng, không phải so sánh với nguyên mẫu lịch sử.",
    sourceLabel: "Nhánh lớp nhân vật trong dữ liệu gốc",
    excerpt: "trích đoạn",
    gameLabel: "Ảnh chụp bản thử nghiệm Android thực tế",
    milestoneTitle: "Những dấu mốc phát triển gần đây",
    milestones: [
      {
        date: "06.10.2026",
        title: "Nhịp điệu hằng ngày",
        body: "Tích hợp phần thưởng hằng ngày vào tiến trình hiện có.",
      },
      {
        date: "07.10.2026",
        title: "Thế giới có âm thanh",
        body: "Âm thanh nền lặp và hiệu ứng chiến đấu trở thành một phần của game.",
      },
      {
        date: "07.10.2026",
        title: "Hai ngôn ngữ. Một bản sắc.",
        body: "Hoàn thiện giao diện tiếng Anh và tiếng Việt, giữ nguyên tên riêng kỳ ảo.",
      },
    ],
    creatorNotes: "Câu chuyện còn chờ được kể",
    creatorMissing:
      "Chỗ này dành cho lời kể của Phi. Ý tưởng đầu tiên, nguyên mẫu đầu tiên và chia sẻ của tác giả vẫn chưa được cung cấp.",
    creatorMissingLabels: [
      "Trích dẫn của tác giả — chờ Phi",
      "Ngày bắt đầu phát triển — chờ Phi",
      "Hình nguyên mẫu gốc — chờ Phi",
      "Liên kết của tác giả — chờ duyệt",
    ],
    classesTitle: "Bạn sẽ đưa ai\nxuống vực?",
    classesIntro: "Ba khởi đầu. Những con đường khác nhau trong cùng bóng tối.",
    chooseClass: "Chọn nhánh lớp nhân vật",
    skill: "Kỹ năng đặc trưng",
    classes: [
      {
        name: "Guardian",
        base: "Warrior",
        image: "guardian",
        path: "Warrior → Knight → Paladin → Guardian",
        skill: "Unyielding Fortress",
        detail:
          "Lớp nhân vật mang khiên, tập trung bảo vệ và giảm sát thương nhận vào.",
      },
      {
        name: "Necromancer",
        base: "Mage",
        image: "necromancer",
        path: "Mage → Wizard → Summoner → Necromancer",
        skill: "Necromantic Summon",
        detail: "Nhánh triệu hồi đưa một đơn vị riêng vào trận chiến.",
      },
      {
        name: "Assassin",
        base: "Rogue",
        image: "assassin",
        path: "Rogue → Assassin",
        skill: "Shadow Strike",
        detail: "Một đòn đánh tập trung vào một kẻ địch.",
      },
    ],
    gearTitle: "Hành trang định hình\nhành trình.",
    gearIntro:
      "Nguyên liệu trở thành trang bị. Trang bị góp phần tạo nên lối xây dựng nhân vật. Khám phá vài món có thể chế tạo từ đầu game.",
    chooseGear: "Xem trang bị",
    category: "Phân loại",
    property: "Thuộc tính cơ bản",
    rarity: "Độ hiếm thay đổi khi chế tạo",
    gear: [
      {
        name: "Ashfall Bronze Sword",
        image: "sword",
        category: "Vũ khí · Warrior",
        property: "ATK +9",
      },
      {
        name: "Ashspirit Bronze Staff",
        image: "staff",
        category: "Vũ khí · Mage",
        property: "MATK +11",
      },
      {
        name: "Ashveil Bronze Bow",
        image: "bow",
        category: "Vũ khí · Rogue",
        property: "ATK +9 · Crit +3",
      },
    ],
    systemsTitle: "Một thế giới.\nNhững lựa chọn gắn kết.",
    systemsIntro:
      "Chọn một hệ thống để hiểu vai trò của nó. Đây là các hệ thống hiện tại, không phải lời hứa về tính năng tương lai.",
    chooseSystem: "Khám phá các hệ thống",
    systems: [
      {
        name: "Khám phá",
        title: "Mang điều gì đó trở về.",
        body: "Cử đồng hành đến các lãnh địa để thu thập nguyên liệu.",
        image: "explore",
        kind: "art",
      },
      {
        name: "Chế tạo",
        title: "Trao mục đích cho nguyên liệu.",
        body: "Chọn công thức và biến nguyên liệu thành trang bị.",
        image: "forge",
        kind: "art",
      },
      {
        name: "Đội hình",
        title: "Chọn những người sát cánh.",
        body: "Sắp xếp nhân vật và trang bị trước trận chiến tiếp theo.",
        image: "guardian",
        kind: "art",
      },
      {
        name: "Chiến trường",
        title: "Đối mặt thế giới qua chiến đấu.",
        body: "Chiến đấu trên các bản đồ thế giới hiện tại và đối đầu kẻ địch.",
        image: "game-world",
        kind: "capture",
      },
      {
        name: "Raid",
        title: "Đối mặt thứ chờ bên dưới.",
        body: "Tiến vào Blackwake Descent và đối đầu The Drowned Regent.",
        image: "game-raid",
        kind: "capture",
      },
    ],
    galleryTitle: "Đây là game.",
    galleryIntro:
      "Ảnh giao diện không chỉnh sửa từ bản thử nghiệm Android. Công cụ thử nghiệm có thể xuất hiện trong ảnh.",
    inventory: "Túi đồ",
    raid: "Chiến đấu Raid",
    screenAlt:
      "Màn hình thực tế của bản thử nghiệm Abyss Adventure trên Android",
    finalTitle: "Bạn sẽ đi\nsâu đến đâu?",
    preview: "Bản thử nghiệm Android",
    previewNote:
      "Bản đang thử nghiệm, có kèm công cụ kiểm thử. Chưa phải bản phát hành ổn định.",
    download: "Tải cho Android",
    releaseNotes: "Ghi chú bản phát hành",
    android: "Android",
    requirement: "Android 7.0 trở lên",
    technical: "Thông tin bản dựng và mã kiểm tra",
    version: "Phiên bản",
    built: "Bản dựng",
    checksum: "SHA-256",
    commitLabel: "Mã commit",
    ios: "Abyss Adventure cho iOS",
    soon: "Sắp ra mắt",
    iosNote: "Hành trình vẫn tiếp tục. Hiện chưa có bản iOS công khai.",
    projectCreditLead: "Abyss Adventure · ",
    projectCreditJoin: " × ",
    websiteCreditLead: "Website được thực hiện bởi ",
    websiteCreditName: "Henry Parker (Nguyen Manh Tuan Hưng)",
    phiProfileLabel: "Phi Nguyễn trên GitHub",
    henryProfileLabel: "Henry Parker trên GitHub",
    websiteProfileLabel: "Henry Parker (Nguyen Manh Tuan Hưng) trên GitHub",
    openGithubProfile: "Mở hồ sơ GitHub",
    source: "Mã nguồn game",
    back: "Trở về mặt đất",
    mute: "Âm thanh nền là tùy chọn. Chỉ phát khi bạn chủ động bật.",
  },
} as const;
