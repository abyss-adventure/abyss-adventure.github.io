import reference from '../public/game-reference.json';
export const classPaths = reference.classPaths;
export const guide = {
  en: {
    title: 'Your first steps\ninto the Abyss.',
    intro: 'A journey of preparation, discovery and return. Choose a step to see how each system connects to the next.',
    navigation: 'How to play', next: 'Next step', start: 'Back to the beginning',
    base: 'Starting class', advanced: 'Advanced spotlight', paths: 'Explore every evolution path',
    evolutionNote: 'These are the current class paths, not a choice made on this website. Evolution eligibility and material requirements are shown in the game.',
    galleryLabels: ['Field combat', 'Daily / Weekly Quests', 'Inventory'],
    previousMap: 'Previous map', nextMap: 'Next map', package: 'Android package',
    demo: 'Website guide · no gameplay or rewards',
    steps: [
      { title: 'Choose your characters', body: 'Begin with your first companion. Warrior, Mage and Rogue lead into distinct class families. Summon expands your roster when you have a ticket and capacity.', tip: 'Read a character’s skill and role before deciding how to develop them.', image: 'beta-warrior' },
      { title: 'Enter the world', body: 'Start in Ashwood Forest. Normal encounters earn progression resources, while each map has its own conditions for reaching the next challenge.', tip: 'A locked gate tells you what is still required. Preparing is part of the journey.', image: 'map-01' },
      { title: 'Build a party', body: 'Select available companions for the encounter. Their different classes, equipment and skills determine what the party can handle together.', tip: 'Review the team before entering; a new companion is an option, not an automatic upgrade.', image: 'beta-party' },
      { title: 'Explore for materials', body: 'Visit Explore and select a territory. Send available companions, then return to claim completed expeditions and collect their materials.', tip: 'Check recipe ingredients so the materials you gather support your next craft.', image: 'explore' },
      { title: 'Craft, equip, upgrade', body: 'Use known recipes and collected materials at the Runebound Crucible. Equip items a character can use. At the Ember Forge, review enhancement costs and the displayed chance.', tip: 'Crafting, equipping and upgrading are separate decisions. Inspect the item before spending.', image: 'crucible' },
      { title: 'Evolve when eligible', body: 'Open a character’s evolution view to inspect available branches and requirements. A new class changes the character’s skills and role in the party.', tip: 'Choose a path that complements your party. The website’s class showcase is a guide, not an evolution action.', image: 'awakening' },
      { title: 'Follow the contracts', body: 'Daily and Weekly Quests give objectives tied to existing activities. Complete objectives, review the milestone track and claim available rewards.', tip: 'Check the in-game reset countdown and claim what you have earned.', image: 'beta-quest' },
      { title: 'Challenge bosses and Raids', body: 'Field Bosses test the preparation for each map. Raids have their own unlocks and encounters. Review entry requirements and learn the encounter before committing.', tip: 'Return to your build, equipment and class choices when an encounter exposes a weakness.', image: 'regent' },
    ],
    baseClasses: [
      { name: 'Warrior', base: 'Warrior', image: 'beta-warrior', path: 'Warrior → Fighter or Knight', skill: 'Heavy Strike', detail: 'A physical attacker. Its evolution branches explore direct damage, counterattacks, shields and frontline protection.' },
      { name: 'Mage', base: 'Mage', image: 'beta-mage', path: 'Mage → Wizard or Cleric', skill: 'Arcane Burst', detail: 'Begins with a multi-target magic skill. Its branches lead toward offensive magic and summons, or healing and protection.' },
      { name: 'Rogue', base: 'Rogue', image: 'beta-rogue', path: 'Rogue → Assassin or Sniper', skill: 'Twin Strike', detail: 'A physical attacker with a two-hit signature skill. Follow close-strike branches or develop ranged options through Sniper.' },
    ],
  },
  vi: {
    title: 'Những bước đầu\nvào Abyss.',
    intro: 'Hành trình của chuẩn bị, khám phá và trở về. Chọn từng bước để hiểu cách các hệ thống kết nối với nhau.',
    navigation: 'Cách chơi', next: 'Bước tiếp theo', start: 'Trở về bước đầu',
    base: 'Lớp khởi đầu', advanced: 'Lớp tiến hóa tiêu biểu', paths: 'Xem tất cả nhánh tiến hóa',
    evolutionNote: 'Đây là các nhánh lớp hiện tại, không phải thao tác lựa chọn trên website. Điều kiện tiến hóa và nguyên liệu được hiển thị trong game.',
    galleryLabels: ['Chiến đấu thường', 'Nhiệm vụ Ngày / Tuần', 'Túi đồ'],
    previousMap: 'Bản đồ trước', nextMap: 'Bản đồ tiếp theo', package: 'Gói Android',
    demo: 'Hướng dẫn trên website · không chơi hay nhận thưởng',
    steps: [
      { title: 'Chọn nhân vật', body: 'Bắt đầu với đồng hành đầu tiên. Warrior, Mage và Rogue dẫn đến các hệ lớp riêng. Triệu hồi mở rộng danh sách khi bạn có vé và còn sức chứa.', tip: 'Đọc kỹ năng và vai trò của nhân vật trước khi chọn hướng phát triển.', image: 'beta-warrior' },
      { title: 'Bước vào thế giới', body: 'Bắt đầu tại Ashwood Forest. Trận chiến thường mang về tài nguyên phát triển; mỗi bản đồ có điều kiện riêng để mở thử thách tiếp theo.', tip: 'Cổng đang khóa cho biết bạn còn cần gì. Chuẩn bị là một phần hành trình.', image: 'map-01' },
      { title: 'Xây dựng đội hình', body: 'Chọn đồng hành sẵn sàng cho trận đấu. Sự kết hợp giữa lớp, trang bị và kỹ năng quyết định khả năng của cả đội.', tip: 'Xem lại đội trước khi vào trận; đồng hành mới là một lựa chọn, không tự động mạnh hơn.', image: 'beta-party' },
      { title: 'Khám phá lấy nguyên liệu', body: 'Vào Explore và chọn lãnh địa. Cử đồng hành sẵn sàng tham gia, sau đó quay lại nhận nguyên liệu khi chuyến đi hoàn thành.', tip: 'Kiểm tra nguyên liệu trong công thức để mỗi chuyến đi hỗ trợ món đồ bạn cần.', image: 'explore' },
      { title: 'Chế tạo, trang bị, nâng cấp', body: 'Dùng công thức đã biết và nguyên liệu tại Runebound Crucible. Trang bị món đồ mà nhân vật được phép sử dụng. Tại Ember Forge, xem chi phí và xác suất nâng cấp hiển thị.', tip: 'Chế tạo, trang bị và nâng cấp là các lựa chọn riêng. Kiểm tra món đồ trước khi chi tài nguyên.', image: 'crucible' },
      { title: 'Tiến hóa khi đủ điều kiện', body: 'Mở phần tiến hóa của nhân vật để xem nhánh và yêu cầu. Lớp mới thay đổi kỹ năng và vai trò của nhân vật trong đội.', tip: 'Chọn nhánh bổ trợ đội hình. Phần giới thiệu lớp trên website chỉ hướng dẫn, không thực hiện tiến hóa.', image: 'awakening' },
      { title: 'Theo dõi giao ước', body: 'Nhiệm vụ Ngày và Tuần đưa ra mục tiêu gắn với hoạt động hiện có. Hoàn thành mục tiêu, theo dõi các mốc và nhận thưởng khi đủ điều kiện.', tip: 'Xem thời gian đặt lại trong game và nhận phần thưởng bạn đã đạt được.', image: 'beta-quest' },
      { title: 'Thách đấu Boss và Raid', body: 'Field Boss thử thách sự chuẩn bị cho từng bản đồ. Raid có điều kiện mở và trận đấu riêng. Xem yêu cầu vào và tìm hiểu trận đấu trước khi tham gia.', tip: 'Xem lại cách xây dựng nhân vật, trang bị và lớp khi trận đấu cho thấy điểm yếu.', image: 'regent' },
    ],
    baseClasses: [
      { name: 'Warrior', base: 'Warrior', image: 'beta-warrior', path: 'Warrior → Fighter / Knight', skill: 'Heavy Strike', detail: 'Nhân vật tấn công vật lý. Các nhánh tiến hóa phát triển sát thương trực tiếp, phản công, khiên và bảo vệ tuyến trước.' },
      { name: 'Mage', base: 'Mage', image: 'beta-mage', path: 'Mage → Wizard / Cleric', skill: 'Arcane Burst', detail: 'Khởi đầu với kỹ năng phép đánh nhiều mục tiêu. Các nhánh hướng tới phép tấn công, triệu hồi hoặc hồi phục và bảo vệ.' },
      { name: 'Rogue', base: 'Rogue', image: 'beta-rogue', path: 'Rogue → Assassin / Sniper', skill: 'Twin Strike', detail: 'Nhân vật tấn công vật lý với kỹ năng đặc trưng đánh hai lần. Phát triển các nhánh cận chiến hoặc lựa chọn tầm xa qua Sniper.' },
    ],
  },
} as const;
