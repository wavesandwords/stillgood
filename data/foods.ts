export interface FoodItem {
  name: string
  keywords: string[]
  expirationDays: number       // 开封后保质天数，0=不易变质
  storage: string              // 存储条件
  tips: string                // 温馨提示
  category: string            // 分类
}

export const foodDatabase: FoodItem[] = [
  // 调味酱料
  {
    name: '番茄酱 (Ketchup)',
    keywords: ['番茄酱', 'ketchup', '番茄沙司', 'catsup'],
    expirationDays: 180,
    storage: '冷藏',
    tips: '倒取时避免用沾过生食的餐具，会加速变质。',
    category: '调味酱料',
  },
  {
    name: '芥末酱 (Mustard)',
    keywords: ['芥末酱', 'mustard', '芥末'],
    expirationDays: 365,
    storage: '冷藏',
    tips: '芥末酱含醋，天然防腐，开封后一年左右。',
    category: '调味酱料',
  },
  {
    name: '沙拉酱 / 蛋黄酱 (Mayonnaise)',
    keywords: ['沙拉酱', 'mayonnaise', '蛋黄酱', '美乃兹', '美奶滋'],
    expirationDays: 60,
    storage: '冷藏',
    tips: '室温放置勿超过1小时，含生蛋黄的版本更易变质。',
    category: '调味酱料',
  },
  {
    name: '花生酱 (Peanut Butter)',
    keywords: ['花生酱', 'peanut butter', 'pb'],
    expirationDays: 180,
    storage: '常温（开封后冷藏更佳）',
    tips: '天然花生酱（无防腐剂）建议冷藏，油脂分离属正常现象，搅拌后可食用。',
    category: '调味酱料',
  },
  {
    name: '烧烤酱 (Barbecue Sauce)',
    keywords: ['烧烤酱', 'bbq sauce', '烤肉酱'],
    expirationDays: 120,
    storage: '冷藏',
    tips: '含糖量高，开封后易发霉，冷藏可延长保鲜期。',
    category: '调味酱料',
  },
  {
    name: '辣酱 (Hot Sauce)',
    keywords: ['辣酱', 'hot sauce', 'tabasco', 'sriracha', '辣椒酱'],
    expirationDays: 730,
    storage: '常温',
    tips: '高盐高酸，极难变质，但风味会随时间减弱。',
    category: '调味酱料',
  },
  {
    name: '橄榄油',
    keywords: ['橄榄油', 'olive oil'],
    expirationDays: 0,
    storage: '阴凉避光（勿冷藏）',
    tips: '特级初榨橄榄油开封后风味流失比变质更快，冷藏会凝固但可恢复。',
    category: '调味酱料',
  },
  {
    name: '酱油',
    keywords: ['酱油', 'soy sauce'],
    expirationDays: 0,
    storage: '常温避光',
    tips: '高盐天然防腐，但开封后风味约2年内最佳。',
    category: '调味酱料',
  },

  // 乳制品
  {
    name: '牛奶',
    keywords: ['牛奶', 'milk', '鲜奶'],
    expirationDays: 7,
    storage: '冷藏 4°C 以下',
    tips: '开封后尽量在7天内喝完，不要返回倒回原包装。',
    category: '乳制品',
  },
  {
    name: '酸奶',
    keywords: ['酸奶', 'yogurt'],
    expirationDays: 14,
    storage: '冷藏',
    tips: '勺子沾水再取用可延长保鲜期，发霉或有异味即丢弃。',
    category: '乳制品',
  },
  {
    name: '黄油',
    keywords: ['黄油', 'butter'],
    expirationDays: 90,
    storage: '冷藏（密封）',
    tips: ' salted butter 比无盐黄油保质期更长。',
    category: '乳制品',
  },
  {
    name: '芝士 / 奶酪',
    keywords: ['芝士', '奶酪', 'cheese', '起司'],
    expirationDays: 21,
    storage: '冷藏，密封保存',
    tips: '硬质芝士发霉可削去表面继续食用，软质奶酪发霉即丢弃。',
    category: '乳制品',
  },
  {
    name: '鲜奶油 (Fresh Cream)',
    keywords: ['鲜奶油', 'cream', '淡奶油', 'whipping cream'],
    expirationDays: 5,
    storage: '冷藏',
    tips: '开封后应尽快使用，顶部结皮属正常现象。',
    category: '乳制品',
  },

  // 饮料
  {
    name: '碳酸饮料',
    keywords: ['可乐', '碳酸饮料', 'soda', 'cola'],
    expirationDays: 0,
    storage: '常温',
    tips: '开封后冷藏可保存数月，但气泡会逐渐消失。',
    category: '饮料',
  },
  {
    name: '果汁',
    keywords: ['果汁', 'juice'],
    expirationDays: 7,
    storage: '冷藏',
    tips: '开封后必须冷藏，橙汁变质最快，通常48小时内需喝完。',
    category: '饮料',
  },
  {
    name: '植物奶 (燕麦奶/杏仁奶)',
    keywords: ['植物奶', 'oat milk', 'almond milk', '燕麦奶', '杏仁奶'],
    expirationDays: 10,
    storage: '冷藏',
    tips: '开封后必须冷藏，未开封可室温保存。',
    category: '饮料',
  },

  // 肉类与海鲜
  {
    name: '生鸡肉',
    keywords: ['生鸡肉', 'chicken', '鸡胸', '鸡腿'],
    expirationDays: 2,
    storage: '冷藏（最冷区），建议冷冻保存',
    tips: '新鲜鸡肉冷藏勿超过2天，长期保存须冷冻。',
    category: '肉类',
  },
  {
    name: '生牛肉',
    keywords: ['生牛肉', 'beef', '牛肉'],
    expirationDays: 3,
    storage: '冷藏',
    tips: '绞牛肉保质期比整块肉更短。',
    category: '肉类',
  },
  {
    name: '培根 / 腊肉',
    keywords: ['培根', 'bacon', '腊肉'],
    expirationDays: 7,
    storage: '冷藏',
    tips: '开封后真空保存可延长至2周。',
    category: '肉类',
  },
  {
    name: '烟熏三文鱼',
    keywords: ['三文鱼', 'salmon', '烟熏三文鱼', 'smoked salmon'],
    expirationDays: 5,
    storage: '冷藏',
    tips: '真空包装未开封可保存2周，开封后5天内食用。',
    category: '海鲜',
  },

  // 烘焙与零食
  {
    name: '面包',
    keywords: ['面包', 'bread'],
    expirationDays: 5,
    storage: '常温密封，阴凉处',
    tips: '冷藏反而加速变硬，应用纸袋包裹。发霉出现绿/白点立即丢弃。',
    category: '烘焙',
  },
  {
    name: '饼干',
    keywords: ['饼干', 'cookies', 'crackers'],
    expirationDays: 0,
    storage: '常温密封',
    tips: '油脂氧化是主要变质原因，加入一片面包可吸收潮气保持脆度。',
    category: '零食',
  },
  {
    name: '坚果',
    keywords: ['坚果', 'nuts', '杏仁', '核桃', '花生'],
    expirationDays: 180,
    storage: '冷藏或冷冻（防油脂氧化）',
    tips: '坚果油脂易氧化，冷藏可延长3倍保质期，有哈喇味即丢弃。',
    category: '零食',
  },
  {
    name: '薯片',
    keywords: ['薯片', 'chips', 'crisps'],
    expirationDays: 0,
    storage: '常温密封',
    tips: '保质期内口感最佳，受潮后可在烤箱低火烘5分钟恢复脆度。',
    category: '零食',
  },

  // 日用品（厨房）
  {
    name: '洗洁精',
    keywords: ['洗洁精', 'dish soap', '洗碗液'],
    expirationDays: 0,
    storage: '常温',
    tips: '过期后清洁效力下降，但一般不会危害健康。',
    category: '日用品',
  },
  {
    name: '植物油（炒菜油）',
    keywords: ['植物油', 'cooking oil', '菜籽油', '大豆油', '葵花籽油'],
    expirationDays: 0,
    storage: '阴凉避光',
    tips: '油脂氧化酸败是主要变质原因，开封后约6个月内用完最佳。',
    category: '调味酱料',
  },

  // 速食与加工食品
  {
    name: '即食麦片',
    keywords: ['麦片', 'cereal', '玉米片'],
    expirationDays: 0,
    storage: '常温密封',
    tips: '保质期内口感最佳，受潮后质地变软但通常仍可食用。',
    category: '速食',
  },
  {
    name: '方便面',
    keywords: ['方便面', 'instant noodles', '泡面'],
    expirationDays: 0,
    storage: '常温',
    tips: '调料包含盐量极高，延长保质期但营养价值低。',
    category: '速食',
  },
  {
    name: '罐头食品（开封后）',
    keywords: ['罐头', 'canned food', '金枪鱼罐头', '番茄罐头'],
    expirationDays: 3,
    storage: '冷藏',
    tips: '开封后即使冷藏也最多保存3-4天，勿留金属罐中保存。',
    category: '速食',
  },
  {
    name: '蜂蜜',
    keywords: ['蜂蜜', 'honey'],
    expirationDays: 0,
    storage: '常温密封',
    tips: '真正的蜂蜜几乎不会变质，但低温会结晶属正常现象，温水浸泡可恢复。',
    category: '调味酱料',
  },
]

export function searchFoods(query: string): FoodItem[] {
  if (!query.trim()) return []
  const lower = query.toLowerCase()
  return foodDatabase.filter(
    (f) =>
      f.name.toLowerCase().includes(lower) ||
      f.keywords.some((k) => k.toLowerCase().includes(lower))
  )
}
