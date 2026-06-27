const flowersData = [
  {
    id: 'f001',
    name: '月季',
    alias: '月月红、长春花、四季花',
    category: 'flower',
    family: '蔷薇科蔷薇属',
    flowerPeriod: '4-9月',
    origin: '中国',
    image: '',
    description: '月季被称为花中皇后，又称月月红，是常绿、半常绿低矮灌木，四季开花，一般为红色或粉色，偶有白色和黄色，可作为观赏植物，也可作为药用植物。',
    care: {
      water: '见干见湿，春秋季3-5天一次，夏季1-2天一次，冬季减少浇水',
      light: '喜充足阳光，每天至少6小时直射光照',
      temperature: '适宜温度15-26℃，耐寒-15℃',
      soil: '疏松肥沃、排水良好的微酸性壤土',
      fertilizer: '生长期每10天施一次稀薄液肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，花瓣可食用，常用于花茶和糕点'
    },
    flowerLanguage: '幸福、美好、友谊、爱情',
    poem: '花开花落无间断，春来春去不相关。' +
          '牡丹最贵惟春晚，芍药虽繁只夏初。' +
          '唯有此花开不厌，一年长占四时春。',
    poemAuthor: '苏轼·月季',
    medicinal: '花可提取芳香油，具有活血调经、消肿解毒之功效',
    tips: '月季花型多样，有单瓣和重瓣，还有高心卷边等优美花型'
  },
  {
    id: 'f002',
    name: '牡丹',
    alias: '富贵花、洛阳花、百两金',
    category: 'flower',
    family: '毛茛科芍药属',
    flowerPeriod: '4-5月',
    origin: '中国',
    image: '',
    description: '牡丹是中国十大名花之一，素有花中之王的美誉。花色泽艳丽，玉笑珠香，风流潇洒，富丽堂皇，在栽培类型中，主要根据花的颜色，可分成上百个品种。',
    care: {
      water: '不耐水湿，见干见湿，雨季注意排水',
      light: '喜阳光充足，但夏季需适当遮荫',
      temperature: '耐寒，冬季可耐-30℃低温',
      soil: '深厚肥沃、排水良好的中性壤土或砂壤土',
      fertilizer: '春初、花后、入冬前各施一次肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，花瓣可食用，根皮可入药'
    },
    flowerLanguage: '富贵、吉祥、繁荣、幸福',
    poem: '庭前芍药妖无格，池上芙蕖净少情。' +
          '唯有牡丹真国色，花开时节动京城。',
    poemAuthor: '刘禹锡·赏牡丹',
    medicinal: '根皮称丹皮，有清热凉血、活血化瘀之功效',
    tips: '牡丹品种繁多，色泽亦多，以黄、绿、肉红、深红、银红为上品'
  },
  {
    id: 'f003',
    name: '玫瑰',
    alias: '刺玫花、徘徊花、刺客',
    category: 'flower',
    family: '蔷薇科蔷薇属',
    flowerPeriod: '5-9月',
    origin: '中国华北',
    image: '',
    description: '玫瑰是蔷薇科蔷薇属多种植物和培育花卉的通称。直立灌木，茎丛生，有茎刺。玫瑰花语在古希腊神话中，玫瑰集爱与美于一身，既是美神的化身，又溶进了爱神的血液。',
    care: {
      water: '见干见湿，忌积水，夏季早晚各浇一次',
      light: '喜阳光充足，每天至少8小时光照',
      temperature: '适宜温度12-28℃，耐寒-20℃',
      soil: '疏松肥沃、排水良好的壤土或轻壤土',
      fertilizer: '生长期每半月施一次腐熟有机肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，花瓣可食用，可制作玫瑰酱、玫瑰茶'
    },
    flowerLanguage: '爱情、热情、美丽、勇气',
    poem: '杨柳萦桥绿，玫瑰拂地红。' +
          '绣衫金騕袅，花髻玉珑璁。',
    poemAuthor: '温庭筠·舞曲歌辞',
    medicinal: '花蕾入药，有理气解郁、和血调经之功效',
    tips: '不同颜色的玫瑰有不同的花语，红玫瑰代表热恋，粉玫瑰代表初恋'
  },
  {
    id: 'f004',
    name: '荷花',
    alias: '莲花、芙蕖、菡萏、水芙蓉',
    category: 'flower',
    family: '莲科莲属',
    flowerPeriod: '6-9月',
    origin: '中国',
    image: '',
    description: '荷花是莲科莲属多年生水生草本花卉。地下茎长而肥厚，有长节，叶盾圆形。花期6至9月，单生于花梗顶端，花瓣多数，嵌生在花托穴内，有红、粉红、白、紫等色，或有彩纹、镶边。',
    care: {
      water: '水生植物，需保持水面高度，不能缺水',
      light: '喜强光，每天至少8小时直射阳光',
      temperature: '适宜温度20-30℃，不耐寒',
      soil: '肥沃的塘泥或腐殖土',
      fertilizer: '生长期每月施一次磷钾肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，莲子、莲藕、荷叶均可食用'
    },
    flowerLanguage: '纯洁、高雅、吉祥、清廉',
    poem: '毕竟西湖六月中，风光不与四时同。' +
          '接天莲叶无穷碧，映日荷花别样红。',
    poemAuthor: '杨万里·晓出净慈寺送林子方',
    medicinal: '莲子、莲子心、荷叶、莲房均可入药，有清心益肾、健脾止泻之效',
    tips: '荷花出淤泥而不染，濯清涟而不妖，是君子品格的象征'
  },
  {
    id: 'f005',
    name: '菊花',
    alias: '寿客、金英、黄华、秋菊',
    category: 'flower',
    family: '菊科菊属',
    flowerPeriod: '9-11月',
    origin: '中国',
    image: '',
    description: '菊花是菊科菊属的多年生宿根草本植物。菊花是中国十大名花之一，花中四君子之一，也是世界四大切花之一。因菊花具有清寒傲雪的品格，才有陶渊明的采菊东篱下，悠然见南山的名句。',
    care: {
      water: '见干见湿，生长期适当多浇水，花期减少',
      light: '喜阳光充足，也稍耐阴',
      temperature: '耐寒，适宜温度18-22℃',
      soil: '疏松肥沃、排水良好的砂壤土',
      fertilizer: '生长期每10天施一次氮磷肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，可泡茶饮用，有清热明目之效'
    },
    flowerLanguage: '高洁、长寿、隐逸、真情',
    poem: '结庐在人境，而无车马喧。' +
          '问君何能尔？心远地自偏。' +
          '采菊东篱下，悠然见南山。',
    poemAuthor: '陶渊明·饮酒',
    medicinal: '花可入药，有散风清热、平肝明目、清热解毒之功效',
    tips: '菊花品种繁多，可按花期分为春菊、夏菊、秋菊、冬菊'
  },
  {
    id: 'f006',
    name: '梅花',
    alias: '春梅、干枝梅、酸梅',
    category: 'flower',
    family: '蔷薇科李属',
    flowerPeriod: '2-3月',
    origin: '中国南方',
    image: '',
    description: '梅花是蔷薇科李属的落叶乔木，原产中国南方，已有三千多年的栽培历史。梅花是中国十大名花之首，与兰花、竹子、菊花一起列为四君子，与松、竹并称为岁寒三友。',
    care: {
      water: '耐旱怕涝，见干见湿，雨季注意排水',
      light: '喜阳光充足，通风良好',
      temperature: '耐寒，可耐-25℃低温',
      soil: '疏松肥沃、排水良好的微酸性壤土',
      fertilizer: '花前花后各施一次有机肥'
    },
    toxicity: {
      level: 'caution',
      description: '果实可食用，花有微毒，不宜大量食用'
    },
    flowerLanguage: '坚强、高雅、傲骨、迎春',
    poem: '墙角数枝梅，凌寒独自开。' +
          '遥知不是雪，为有暗香来。',
    poemAuthor: '王安石·梅花',
    medicinal: '花蕾入药，有开郁和中、化痰、解毒之功效',
    tips: '梅花以其在严寒中先于百花开放的特性，象征着坚韧不拔的精神'
  },
  {
    id: 'f007',
    name: '兰花',
    alias: '中国兰、春兰、兰草',
    category: 'flower',
    family: '兰科兰属',
    flowerPeriod: '视品种而定',
    origin: '中国',
    image: '',
    description: '兰花是兰科兰属附生或地生草本植物。中国人历来把兰花看做是高洁典雅的象征，并与梅、竹、菊并列，合称四君子。通常以兰章喻诗文之美，以兰交喻友谊之真。',
    care: {
      water: '喜湿润，见干见湿，用雨水或晾晒的自来水',
      light: '喜半阴，忌强光直射',
      temperature: '适宜温度15-25℃，冬季不低于5℃',
      soil: '疏松透气、排水良好的腐殖土',
      fertilizer: '生长期每半月施一次稀薄液肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，花香清新，可做香料'
    },
    flowerLanguage: '高洁、典雅、爱国、坚贞不渝',
    poem: '幽兰生山谷，本自无人识。' +
          '只为馨香重，求者遍山隅。',
    poemAuthor: '陈毅·幽兰',
    medicinal: '全草可入药，有滋阴润肺、清热解毒之功效',
    tips: '兰花品种繁多，常见有春兰、蕙兰、建兰、墨兰、寒兰等'
  },
  {
    id: 'f008',
    name: '桂花',
    alias: '岩桂、木犀、九里香',
    category: 'flower',
    family: '木犀科木犀属',
    flowerPeriod: '9-10月',
    origin: '中国西南部',
    image: '',
    description: '桂花是木犀科木犀属常绿灌木或小乔木。桂花是中国传统十大名花之一，集绿化、美化、香化于一体的观赏与实用兼备的优良园林树种，桂花清可绝尘，浓能远溢，堪称一绝。',
    care: {
      water: '见干见湿，忌积水，夏季多浇水',
      light: '喜阳光充足，也耐半阴',
      temperature: '适宜温度15-28℃，耐寒-13℃',
      soil: '疏松肥沃、排水良好的微酸性砂壤土',
      fertilizer: '生长期每半月施一次磷钾肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，花可食用，可制桂花糕、桂花茶、桂花酒'
    },
    flowerLanguage: '永伴佳人、誉满天下、吸入你的气息',
    poem: '人闲桂花落，夜静春山空。' +
          '月出惊山鸟，时鸣春涧中。',
    poemAuthor: '王维·鸟鸣涧',
    medicinal: '花可入药，有散寒破结、化痰止咳之功效',
    tips: '桂花有金桂、银桂、丹桂、月桂等品种，香气各有特点'
  },
  {
    id: 'f009',
    name: '茉莉花',
    alias: '茉莉、香魂、莫利花',
    category: 'flower',
    family: '木犀科素馨属',
    flowerPeriod: '5-10月',
    origin: '印度、中国南方',
    image: '',
    description: '茉莉花是木犀科素馨属直立或攀援灌木。茉莉的花极香，为著名的花茶原料及重要的香精原料。花、叶药用治目赤肿痛，并有止咳化痰之效。',
    care: {
      water: '喜湿润，夏季早晚各浇水一次',
      light: '喜阳光充足，越晒开花越多越香',
      temperature: '喜温暖，不耐寒，冬季不低于5℃',
      soil: '疏松肥沃、排水良好的酸性砂壤土',
      fertilizer: '生长期每周施一次稀薄液肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，花可食用，可制茶、做糕点'
    },
    flowerLanguage: '忠贞、尊敬、清纯、贞洁',
    poem: '茉莉开时香满枝，钿花狼藉玉参差。' +
          '茗杯初歇香烟烬，此味黄昏我独知。',
    poemAuthor: '江奎·茉莉花',
    medicinal: '花、叶入药，有理气止痛、辟秽开郁之功效',
    tips: '茉莉花香气浓郁，是著名的花茶原料，有窨得茉莉无上味之说'
  },
  {
    id: 'f010',
    name: '向日葵',
    alias: '朝阳花、转日莲、向阳花',
    category: 'flower',
    family: '菊科向日葵属',
    flowerPeriod: '7-9月',
    origin: '北美洲',
    image: '',
    description: '向日葵是菊科向日葵属的一年生草本植物。因花序随太阳转动而得名。原产南美洲，驯化种由西班牙人于1510年从北美带到欧洲，最初为观赏用。19世纪末，又被从俄国引回北美洲。',
    care: {
      water: '耐旱，生长期适当浇水，花期保持土壤湿润',
      light: '喜强光，需充足阳光照射',
      temperature: '喜温暖，适宜温度20-30℃',
      soil: '对土壤要求不高，耐贫瘠',
      fertilizer: '生长期每月施一次复合肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，种子可食用，是常见的零食'
    },
    flowerLanguage: '阳光、信念、光辉、忠诚',
    poem: '更无柳絮因风起，惟有葵花向日倾。' +
          '四月清和雨乍晴，南山当户转分明。',
    poemAuthor: '司马光·客中初夏',
    medicinal: '种子、花盘、茎髓均可入药，有平肝祛风、清湿热之功效',
    tips: '向日葵的花盘会随着太阳从东转到西，是植物向光性的典型代表'
  },
  {
    id: 'f011',
    name: '郁金香',
    alias: '洋荷花、草麝香、郁香',
    category: 'flower',
    family: '百合科郁金香属',
    flowerPeriod: '3-5月',
    origin: '地中海沿岸',
    image: '',
    description: '郁金香是百合科郁金香属的多年生草本植物，具球茎。郁金香是世界著名的球根花卉，还是优良的切花品种，花卉刚劲挺拔，叶色素雅秀丽，荷花似的花朵端庄动人，惹人喜爱。',
    care: {
      water: '见干见湿，生长期保持土壤湿润',
      light: '喜阳光充足，每天至少8小时光照',
      temperature: '喜凉爽，适宜温度15-20℃',
      soil: '疏松肥沃、排水良好的砂壤土',
      fertilizer: '生长期每月施2-3次磷钾肥'
    },
    toxicity: {
      level: 'poisonous',
      description: '球茎有毒，误食会引起呕吐、腹泻等中毒症状'
    },
    flowerLanguage: '爱的表白、荣誉的皇冠、永恒的祝福',
    poem: '玉殿珠官窈窕行，春风花底奏新声。' +
          '谁将百宝流苏结，散作千花簇太平。',
    poemAuthor: '杨维桢·郁金香',
    medicinal: '花可入药，有化湿辟秽之功效',
    tips: '郁金香花色丰富，不同颜色有不同花语，红色代表热烈的爱意'
  },
  {
    id: 'f012',
    name: '樱花',
    alias: '仙樱花、福岛樱、青肤樱',
    category: 'flower',
    family: '蔷薇科樱属',
    flowerPeriod: '3-4月',
    origin: '中国、日本',
    image: '',
    description: '樱花是蔷薇科樱属几种植物的统称。樱花花色幽香艳丽，常用于园林观赏。樱花可分单瓣和复瓣两类，单瓣类能开花结果，复瓣类多半不结果。',
    care: {
      water: '见干见湿，忌积水',
      light: '喜阳光充足，通风良好',
      temperature: '耐寒，适宜温度15-20℃',
      soil: '疏松肥沃、排水良好的砂壤土',
      fertilizer: '每年施肥两次，冬季和花后各一次'
    },
    toxicity: {
      level: 'safe',
      description: '花无毒，可腌制食用，果实可食'
    },
    flowerLanguage: '生命、幸福、纯洁、高尚',
    poem: '小园新种红樱树，闲绕花行便当游。' +
          '何必更随鞍马队，冲泥蹋雨曲江头。',
    poemAuthor: '白居易·酬韩侍郎',
    medicinal: '皮、枝、叶可入药，有止咳、解酒之功效',
    tips: '樱花花期短暂，有樱花七日之说，象征着生命的短暂与美好'
  },
  {
    id: 'f013',
    name: '含羞草',
    alias: '感应草、知羞草、呼喝草',
    category: 'herb',
    family: '豆科含羞草属',
    flowerPeriod: '3-10月',
    origin: '热带美洲',
    image: '',
    description: '含羞草是豆科含羞草属多年生草本或亚灌木。由于叶子会对热和光产生反应，受到外力触碰会立即闭合，所以得名含羞草。形状似绒球，开花后结荚果，果实呈扁圆形。',
    care: {
      water: '喜湿润，夏季每天浇水一次',
      light: '喜阳光充足，也耐半阴',
      temperature: '喜温暖，不耐寒，冬季不低于10℃',
      soil: '疏松肥沃的土壤',
      fertilizer: '生长期每月施一次稀薄液肥'
    },
    toxicity: {
      level: 'poisonous',
      description: '有小毒，含有含羞草碱，长期接触或误食会引起脱发等症状'
    },
    flowerLanguage: '害羞、敏感、礼貌、自卑',
    poem: '笑啼俱不敢，方验作人难。' +
          '倾国徒相看，含羞未肯安。',
    poemAuthor: '古诗集句',
    medicinal: '全草可入药，有清热利尿、化痰止咳、安神止痛之功效',
    tips: '含羞草的叶片受到触碰会迅速闭合，是植物应激性的有趣现象'
  },
  {
    id: 'f014',
    name: '芦荟',
    alias: '卢会、讷会、象胆',
    category: 'succulent',
    family: '百合科芦荟属',
    flowerPeriod: '12-3月',
    origin: '非洲热带干旱地区',
    image: '',
    description: '芦荟是百合科芦荟属多年生常绿肉质草本植物。叶簇生，大而肥厚，呈座状或生于茎顶，叶常披针形或叶短宽，边缘有尖齿状刺。芦荟是集食用、药用、美容、观赏于一身的植物新星。',
    care: {
      water: '耐旱，土壤干透再浇，忌积水',
      light: '喜阳光充足，也耐半阴',
      temperature: '喜温暖，不耐寒，冬季不低于5℃',
      soil: '疏松透气、排水良好的砂壤土',
      fertilizer: '生长期每月施一次稀薄液肥'
    },
    toxicity: {
      level: 'caution',
      description: '部分品种可食用，但芦荟皮有微毒，需去皮食用，孕妇忌食'
    },
    flowerLanguage: '自尊又自卑的爱、青春之源',
    poem: '锦襜褕，绣裆襦。' +
          '强饮啄，哺尔雏。' +
          '陇头卧，陇头飞。' +
          '芦荟生傍野人家，春风吹落野人家。',
    poemAuthor: '古乐府',
    medicinal: '叶内胶质可药用，有泻火、解毒、化瘀、杀虫之功效',
    tips: '库拉索芦荟是最常见的食用品种，有很好的美容养颜功效'
  },
  {
    id: 'f015',
    name: '仙人掌',
    alias: '仙巴掌、霸王树、火焰',
    category: 'succulent',
    family: '仙人掌科仙人掌属',
    flowerPeriod: '6-10月',
    origin: '美洲热带、亚热带沙漠地区',
    image: '',
    description: '仙人掌是仙人掌科仙人掌属植物，原产墨西哥、美国、西印度群岛、百慕大群岛和南美洲北部。仙人掌喜阳光、温暖、耐旱，怕寒冷、怕涝、怕酸性土壤，适合在中性、微碱性土壤生长。',
    care: {
      water: '极耐旱，土壤干透再浇，冬季基本不需浇水',
      light: '喜强光，需充足阳光',
      temperature: '喜温暖，不耐寒，冬季不低于0℃',
      soil: '排水良好的砂质土',
      fertilizer: '生长期每月施一次稀薄液肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，部分品种果实可食用，嫩茎可做菜'
    },
    flowerLanguage: '坚强、刚毅、温暖、忍耐',
    poem: '沙漠茫茫寄此身，尖针刺猬不畏贫。' +
          '烈日炎炎浑不怕，留得青翠报新春。',
    poemAuthor: '现代·仙人掌',
    medicinal: '茎可入药，有行气活血、清热解毒之功效',
    tips: '仙人掌的刺是由叶子退化而成，以减少水分蒸发，适应干旱环境'
  },
  {
    id: 'f016',
    name: '绿萝',
    alias: '黄金葛、黄金藤、魔鬼藤',
    category: 'foliage',
    family: '天南星科麒麟叶属',
    flowerPeriod: '很少开花',
    origin: '所罗门群岛',
    image: '',
    description: '绿萝是天南星科麒麟叶属大型常绿藤本植物。绿萝是阴性植物，喜散射光，较耐阴。它遇水即活，因顽强的生命力，被称为生命之花。蔓延下来的绿色枝叶，非常容易满足。',
    care: {
      water: '喜湿润，盆土干透浇透，夏季多向叶面喷水',
      light: '喜散射光，忌强光直射',
      temperature: '喜温暖，不耐寒，冬季不低于10℃',
      soil: '疏松肥沃、排水良好的腐殖土',
      fertilizer: '生长期每月施2-3次稀薄液肥'
    },
    toxicity: {
      level: 'poisonous',
      description: '汁液有毒，接触可能引起皮肤瘙痒，误食会引起口腔不适'
    },
    flowerLanguage: '守望幸福、坚韧、善良',
    poem: '翠叶翩翩满室春，不与桃李竞芳尘。' +
          '清心一片常相伴，默默无言也动人。',
    poemAuthor: '现代·绿萝',
    medicinal: '可观赏，有净化空气之效，能吸收甲醛等有害气体',
    tips: '绿萝是最好养的室内植物之一，水培土培都可以，新手也能养活'
  },
  {
    id: 'f017',
    name: '薄荷',
    alias: '野薄荷、夜息香、银丹草',
    category: 'herb',
    family: '唇形科薄荷属',
    flowerPeriod: '7-9月',
    origin: '中国、欧洲',
    image: '',
    description: '薄荷是唇形科薄荷属多年生草本植物。薄荷是中华常用中药之一。它是辛凉性发汗解热药，治流行性感冒、头疼、目赤、身热、咽喉、牙床肿痛等症。外用可治神经痛、皮肤瘙痒、皮疹和湿疹等。',
    care: {
      water: '喜湿润，保持土壤湿润，不积水',
      light: '喜阳光充足，也耐半阴',
      temperature: '耐寒，适宜温度20-30℃',
      soil: '疏松肥沃、排水良好的砂壤土',
      fertilizer: '生长期每月施一次氮肥为主的肥料'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，可食用，泡茶、做菜都很常见'
    },
    flowerLanguage: '美德、永恒的爱、愿与你再次相逢',
    poem: '薄荷花开蝶翅翻，风枝露叶弄秋妍。' +
          '自怜不及狸奴点，日日栏边自在眠。',
    poemAuthor: '陆游·题画薄荷',
    medicinal: '全草入药，有疏散风热、清利头目、利咽透疹、疏肝行气之功效',
    tips: '薄荷很容易养，插枝就能活，越剪长得越旺'
  },
  {
    id: 'f018',
    name: '薰衣草',
    alias: '灵香草、香草、黄香草',
    category: 'herb',
    family: '唇形科薰衣草属',
    flowerPeriod: '6-8月',
    origin: '地中海沿岸',
    image: '',
    description: '薰衣草是唇形科薰衣草属多年生草本或小矮灌木。其叶形花色优美典雅，蓝紫色花序颀长秀丽，是庭院中一种新的多年生耐寒花卉，适宜花径丛植或条植，也可盆栽观赏。',
    care: {
      water: '耐旱，见干见湿，忌积水',
      light: '喜阳光充足，每天至少6小时光照',
      temperature: '喜凉爽，适宜温度15-25℃',
      soil: '疏松透气、排水良好的中性或微碱性砂壤土',
      fertilizer: '生长期每月施一次稀薄液肥'
    },
    toxicity: {
      level: 'safe',
      description: '无毒，可制作香料、花茶、精油'
    },
    flowerLanguage: '等待爱情、浪漫、宁静、专一',
    poem: '薰风吹尽紫云飞，香草含情待燕归。' +
          '最是一年芳信好，梦魂常绕故园扉。',
    poemAuthor: '现代·薰衣草',
    medicinal: '花可入药，有镇静催眠、抗菌消炎、解痉镇痛之功效',
    tips: '薰衣草的香气有很好的助眠效果，是制作香包和精油的好材料'
  },
  {
    id: 'f019',
    name: '多肉植物',
    alias: '肉肉、多浆植物',
    category: 'succulent',
    family: '多科多属',
    flowerPeriod: '视品种而定',
    origin: '世界各地干旱地区',
    image: '',
    description: '多肉植物是指植物的根、茎、叶三种营养器官中的叶是肥厚多汁并且具备储藏大量水分功能的植物，也称多浆植物。其至少具有一种肉质组织，这种组织是一种活组织。',
    care: {
      water: '耐旱，干透浇透，宁干勿湿',
      light: '喜阳光充足，部分品种夏季需遮荫',
      temperature: '喜温暖，多数品种不耐寒',
      soil: '疏松透气、排水良好的颗粒土',
      fertilizer: '生长期少量施肥即可'
    },
    toxicity: {
      level: 'caution',
      description: '部分品种汁液有毒，如麒麟掌、龙骨等，接触可能引起皮肤不适'
    },
    flowerLanguage: '坚韧、顽强、一心一意',
    poem: '小巧玲珑肉嘟嘟，千姿百态满盆盂。' +
          '不与繁花争艳丽，自留青翠在庭隅。',
    poemAuthor: '现代·多肉',
    medicinal: '部分品种可药用，如芦荟、仙人掌等',
    tips: '多肉品种繁多，形态各异，是近年来非常流行的观赏植物'
  },
  {
    id: 'f020',
    name: '杜鹃花',
    alias: '映山红、山石榴、山踯躅',
    category: 'flower',
    family: '杜鹃花科杜鹃属',
    flowerPeriod: '4-6月',
    origin: '中国',
    image: '',
    description: '杜鹃花是杜鹃花科杜鹃属常绿或落叶灌木。杜鹃花一般春季开花，每簇花2-6朵，花冠漏斗形，有红、淡红、杏红、雪青、白色等，花色繁茂艳丽。杜鹃花是中国十大名花之一。',
    care: {
      water: '喜湿润，见干见湿，喜酸性水',
      light: '喜散射光，忌强光直射',
      temperature: '喜凉爽，适宜温度12-25℃',
      soil: '疏松肥沃、排水良好的酸性土壤',
      fertilizer: '生长期每半月施一次稀薄液肥'
    },
    toxicity: {
      level: 'poisonous',
      description: '黄色和白色杜鹃花有毒，误食会引起呕吐、呼吸困难等中毒症状'
    },
    flowerLanguage: '奔放、清白、忠诚、思乡',
    poem: '蜀国曾闻子规鸟，宣城还见杜鹃花。' +
          '一叫一回肠一断，三春三月忆三巴。',
    poemAuthor: '李白·宣城见杜鹃花',
    medicinal: '根可入药，有活血、止血、祛风止痛之功效',
    tips: '杜鹃花是中国十大名花之一，品种繁多，色彩丰富'
  }
];

const poemsData = [
  {
    id: 'p001',
    flower: '梅花',
    content: '墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。',
    author: '王安石',
    title: '梅花'
  },
  {
    id: 'p002',
    flower: '兰花',
    content: '幽兰生前庭，含熏待清风。清风脱然至，见别萧艾中。',
    author: '陶渊明',
    title: '饮酒·幽兰生前庭'
  },
  {
    id: 'p003',
    flower: '荷花',
    content: '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。',
    author: '杨万里',
    title: '晓出净慈寺送林子方'
  },
  {
    id: 'p004',
    flower: '菊花',
    content: '待到秋来九月八，我花开后百花杀。冲天香阵透长安，满城尽带黄金甲。',
    author: '黄巢',
    title: '不第后赋菊'
  },
  {
    id: 'p005',
    flower: '牡丹',
    content: '庭前芍药妖无格，池上芙蕖净少情。唯有牡丹真国色，花开时节动京城。',
    author: '刘禹锡',
    title: '赏牡丹'
  },
  {
    id: 'p006',
    flower: '桂花',
    content: '人闲桂花落，夜静春山空。月出惊山鸟，时鸣春涧中。',
    author: '王维',
    title: '鸟鸣涧'
  },
  {
    id: 'p007',
    flower: '桃花',
    content: '去年今日此门中，人面桃花相映红。人面不知何处去，桃花依旧笑春风。',
    author: '崔护',
    title: '题都城南庄'
  },
  {
    id: 'p008',
    flower: '梨花',
    content: '忽如一夜春风来，千树万树梨花开。散入珠帘湿罗幕，狐裘不暖锦衾薄。',
    author: '岑参',
    title: '白雪歌送武判官归京'
  }
];

const flowerCategories = [
  { id: 'all', name: '全部', icon: '🌸' },
  { id: 'flower', name: '观赏花卉', icon: '🌺' },
  { id: 'succulent', name: '多肉植物', icon: '🌵' },
  { id: 'herb', name: '草本植物', icon: '🌿' },
  { id: 'foliage', name: '观叶植物', icon: '🍀' }
];

const mockFlowers = {
  getAll() {
    return flowersData;
  },

  getById(id) {
    return flowersData.find(f => f.id === id);
  },

  getByName(name) {
    return flowersData.find(f => f.name === name || f.alias.includes(name));
  },

  search(keyword) {
    return flowersData.filter(f => 
      f.name.includes(keyword) || 
      f.alias.includes(keyword) ||
      f.description.includes(keyword)
    );
  },

  getByCategory(category) {
    if (!category || category === 'all') {
      return flowersData;
    }
    return flowersData.filter(f => f.category === category);
  },

  getCategories() {
    return flowerCategories;
  },

  getPoems() {
    return poemsData;
  },

  getRandomPoem() {
    return poemsData[Math.floor(Math.random() * poemsData.length)];
  },

  getRandomFlowers(count = 5) {
    const shuffled = [...flowersData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
};

module.exports = mockFlowers;
