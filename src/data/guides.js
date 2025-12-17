// Browse categories
export const BROWSE_MODES = {
  AGE: 'age',
  TOPIC: 'topic',
  SEASONAL: 'seasonal',
};

// Age groups
export const AGE_GROUPS = [
  { id: '0-3m', label: '0-3 months', shortLabel: '0-3m' },
  { id: '3-6m', label: '3-6 months', shortLabel: '3-6m' },
  { id: '6-12m', label: '6-12 months', shortLabel: '6-12m' },
  { id: '12-18m', label: '12-18 months', shortLabel: '12-18m' },
  { id: '18-24m', label: '18-24 months', shortLabel: '18-24m' },
  { id: '2-3y', label: '2-3 years', shortLabel: '2-3y' },
  { id: '3-4y', label: '3-4 years', shortLabel: '3-4y' },
  { id: '4-5y', label: '4-5 years', shortLabel: '4-5y' },
];

// Topics
export const TOPICS = [
  { id: 'bedtime-battles', label: 'Bedtime battles', icon: '🌙' },
  { id: 'early-waking', label: 'Early waking', icon: '🌅' },
  { id: 'nap-transitions', label: 'Nap transitions', icon: '😴' },
  { id: 'night-wakings', label: 'Night wakings', icon: '🌃' },
  { id: 'sleep-regressions', label: 'Sleep regressions', icon: '📉' },
];

// Seasonal/Situational
export const SEASONAL = [
  { id: 'travel', label: 'Travel sleep', icon: '✈️' },
  { id: 'daylight-saving', label: 'Daylight saving transitions', icon: '🕐' },
  { id: 'holidays', label: 'Holiday disruptions', icon: '🎄' },
  { id: 'new-sibling', label: 'New sibling', icon: '👶' },
];

// Sample guides data
export const GUIDES = [
  // === BY AGE: 0-3 months ===
  {
    id: 'newborn-sleep-foundations',
    title: 'Newborn Sleep Foundations',
    description: 'Everything you need to know about sleep in the first 3 months',
    category: 'age',
    categoryId: '0-3m',
    chapters: 6,
    duration: 25,
    chapterList: [
      { id: 1, title: 'Understanding newborn sleep', duration: 4 },
      { id: 2, title: 'Safe sleep basics', duration: 5 },
      { id: 3, title: 'Day vs night confusion', duration: 4 },
      { id: 4, title: 'Feeding and sleep connection', duration: 4 },
      { id: 5, title: 'Creating a sleep-friendly environment', duration: 4 },
      { id: 6, title: 'Realistic expectations', duration: 4 },
    ],
  },
  {
    id: 'soothing-techniques',
    title: 'Soothing Techniques for Newborns',
    description: 'Gentle ways to help your newborn settle and sleep',
    category: 'age',
    categoryId: '0-3m',
    chapters: 5,
    duration: 18,
    chapterList: [
      { id: 1, title: 'The 5 S\'s method', duration: 4 },
      { id: 2, title: 'Swaddling basics', duration: 3 },
      { id: 3, title: 'White noise and shushing', duration: 3 },
      { id: 4, title: 'Motion and holding', duration: 4 },
      { id: 5, title: 'When nothing works', duration: 4 },
    ],
  },

  // === BY AGE: 3-6 months ===
  {
    id: 'sleep-training-intro',
    title: 'Introduction to Sleep Training',
    description: 'Gentle methods to help your baby learn independent sleep',
    category: 'age',
    categoryId: '3-6m',
    chapters: 7,
    duration: 30,
    chapterList: [
      { id: 1, title: 'Is your baby ready?', duration: 4 },
      { id: 2, title: 'Sleep training methods overview', duration: 5 },
      { id: 3, title: 'The pick up/put down method', duration: 5 },
      { id: 4, title: 'Chair method explained', duration: 4 },
      { id: 5, title: 'Ferber method basics', duration: 4 },
      { id: 6, title: 'Creating your plan', duration: 4 },
      { id: 7, title: 'Troubleshooting common issues', duration: 4 },
    ],
  },
  {
    id: '4-month-regression',
    title: 'Surviving the 4-Month Regression',
    description: 'Why it happens and how to get through it',
    category: 'age',
    categoryId: '3-6m',
    chapters: 5,
    duration: 20,
    chapterList: [
      { id: 1, title: 'What is the 4-month regression?', duration: 4 },
      { id: 2, title: 'Signs your baby is going through it', duration: 3 },
      { id: 3, title: 'Survival strategies', duration: 5 },
      { id: 4, title: 'Sleep associations to watch for', duration: 4 },
      { id: 5, title: 'Coming out the other side', duration: 4 },
    ],
  },

  // === BY AGE: 6-12 months ===
  {
    id: 'dropping-night-feeds',
    title: 'Dropping Night Feeds',
    description: 'When and how to wean off nighttime feedings',
    category: 'age',
    categoryId: '6-12m',
    chapters: 5,
    duration: 22,
    chapterList: [
      { id: 1, title: 'Signs baby is ready', duration: 4 },
      { id: 2, title: 'Gradual reduction method', duration: 5 },
      { id: 3, title: 'Cold turkey approach', duration: 4 },
      { id: 4, title: 'Increasing daytime calories', duration: 5 },
      { id: 5, title: 'Handling setbacks', duration: 4 },
    ],
  },
  {
    id: 'two-to-one-nap',
    title: 'The 2-to-1 Nap Transition',
    description: 'Moving from two naps to one nap smoothly',
    category: 'age',
    categoryId: '6-12m',
    chapters: 4,
    duration: 16,
    chapterList: [
      { id: 1, title: 'Signs of readiness', duration: 4 },
      { id: 2, title: 'The transition schedule', duration: 4 },
      { id: 3, title: 'Managing the tired phase', duration: 4 },
      { id: 4, title: 'When to adjust bedtime', duration: 4 },
    ],
  },

  // === BY AGE: 12-18 months ===
  {
    id: 'toddler-sleep-basics',
    title: 'Toddler Sleep Basics',
    description: 'Navigating sleep with your newly mobile toddler',
    category: 'age',
    categoryId: '12-18m',
    chapters: 6,
    duration: 24,
    chapterList: [
      { id: 1, title: 'Sleep needs at this age', duration: 4 },
      { id: 2, title: 'Ideal schedules', duration: 4 },
      { id: 3, title: 'Separation anxiety and sleep', duration: 4 },
      { id: 4, title: 'Keeping toddlers in cribs', duration: 4 },
      { id: 5, title: 'Dealing with testing behaviors', duration: 4 },
      { id: 6, title: 'Sleep environment updates', duration: 4 },
    ],
  },

  // === BY AGE: 18-24 months ===
  {
    id: '18-month-regression',
    title: 'The 18-Month Sleep Regression',
    description: 'Understanding and surviving this challenging phase',
    category: 'age',
    categoryId: '18-24m',
    chapters: 5,
    duration: 18,
    chapterList: [
      { id: 1, title: 'Why 18 months is tough', duration: 3 },
      { id: 2, title: 'Language explosion impact', duration: 4 },
      { id: 3, title: 'Teething and molars', duration: 3 },
      { id: 4, title: 'Maintaining boundaries', duration: 4 },
      { id: 5, title: 'When to seek help', duration: 4 },
    ],
  },

  // === BY AGE: 2-3 years ===
  {
    id: 'crib-to-bed',
    title: 'Crib to Bed Transition',
    description: 'Making the move to a big kid bed successfully',
    category: 'age',
    categoryId: '2-3y',
    chapters: 6,
    duration: 22,
    chapterList: [
      { id: 1, title: 'When to make the switch', duration: 3 },
      { id: 2, title: 'Preparing your child', duration: 4 },
      { id: 3, title: 'Setting up the room safely', duration: 4 },
      { id: 4, title: 'The first few nights', duration: 4 },
      { id: 5, title: 'Handling curtain calls', duration: 4 },
      { id: 6, title: 'Staying consistent', duration: 3 },
    ],
  },
  {
    id: 'dropping-naps',
    title: 'When Naps End',
    description: 'Transitioning away from daytime sleep',
    category: 'age',
    categoryId: '2-3y',
    chapters: 4,
    duration: 15,
    chapterList: [
      { id: 1, title: 'Signs naps are ending', duration: 4 },
      { id: 2, title: 'Quiet time alternatives', duration: 4 },
      { id: 3, title: 'Adjusting bedtime', duration: 3 },
      { id: 4, title: 'Managing the overtired phase', duration: 4 },
    ],
  },

  // === BY AGE: 3-4 years ===
  {
    id: 'preschooler-bedtime',
    title: 'Preschooler Bedtime Mastery',
    description: 'Creating peaceful bedtimes with your 3-4 year old',
    category: 'age',
    categoryId: '3-4y',
    chapters: 5,
    duration: 20,
    chapterList: [
      { id: 1, title: 'Understanding preschool sleep needs', duration: 4 },
      { id: 2, title: 'Building an effective routine', duration: 4 },
      { id: 3, title: 'Managing stall tactics', duration: 4 },
      { id: 4, title: 'Nighttime fears and nightmares', duration: 4 },
      { id: 5, title: 'Reward systems that work', duration: 4 },
    ],
  },

  // === BY AGE: 4-5 years ===
  {
    id: 'school-ready-sleep',
    title: 'School-Ready Sleep Habits',
    description: 'Preparing sleep schedules for kindergarten',
    category: 'age',
    categoryId: '4-5y',
    chapters: 4,
    duration: 16,
    chapterList: [
      { id: 1, title: 'Sleep needs for school success', duration: 4 },
      { id: 2, title: 'Adjusting to early wake times', duration: 4 },
      { id: 3, title: 'Weekend vs weekday schedules', duration: 4 },
      { id: 4, title: 'Building independence', duration: 4 },
    ],
  },

  // === BY TOPIC: Bedtime battles ===
  {
    id: 'ending-bedtime-battles',
    title: 'Ending Bedtime Battles',
    description: 'Strategies to make bedtime peaceful again',
    category: 'topic',
    categoryId: 'bedtime-battles',
    chapters: 6,
    duration: 25,
    chapterList: [
      { id: 1, title: 'Understanding why battles happen', duration: 4 },
      { id: 2, title: 'The ideal bedtime routine', duration: 4 },
      { id: 3, title: 'Setting clear boundaries', duration: 5 },
      { id: 4, title: 'Positive reinforcement techniques', duration: 4 },
      { id: 5, title: 'Handling meltdowns', duration: 4 },
      { id: 6, title: 'Consistency is key', duration: 4 },
    ],
  },

  // === BY TOPIC: Early waking ===
  {
    id: 'early-morning-wakings',
    title: 'Solving Early Morning Wakings',
    description: 'Help your child sleep past 5am',
    category: 'topic',
    categoryId: 'early-waking',
    chapters: 5,
    duration: 20,
    chapterList: [
      { id: 1, title: 'Common causes of early waking', duration: 4 },
      { id: 2, title: 'Environmental fixes', duration: 4 },
      { id: 3, title: 'Schedule adjustments', duration: 4 },
      { id: 4, title: 'OK-to-wake clocks', duration: 4 },
      { id: 5, title: 'When early waking is normal', duration: 4 },
    ],
  },

  // === BY TOPIC: Nap transitions ===
  {
    id: 'nap-transition-guide',
    title: 'Complete Nap Transition Guide',
    description: 'Navigate every nap transition from 4 to 1 to none',
    category: 'topic',
    categoryId: 'nap-transitions',
    chapters: 6,
    duration: 26,
    chapterList: [
      { id: 1, title: '4 to 3 nap transition', duration: 4 },
      { id: 2, title: '3 to 2 nap transition', duration: 4 },
      { id: 3, title: '2 to 1 nap transition', duration: 5 },
      { id: 4, title: 'Dropping the final nap', duration: 5 },
      { id: 5, title: 'Signs vs false alarms', duration: 4 },
      { id: 6, title: 'Schedule adjustments during transitions', duration: 4 },
    ],
  },

  // === BY TOPIC: Night wakings ===
  {
    id: 'night-waking-solutions',
    title: 'Night Waking Solutions',
    description: 'Get everyone sleeping through the night',
    category: 'topic',
    categoryId: 'night-wakings',
    chapters: 6,
    duration: 24,
    chapterList: [
      { id: 1, title: 'Why babies wake at night', duration: 4 },
      { id: 2, title: 'Hunger vs habit wakings', duration: 4 },
      { id: 3, title: 'Breaking sleep associations', duration: 4 },
      { id: 4, title: 'Responding to wakings', duration: 4 },
      { id: 5, title: 'Gradual night weaning', duration: 4 },
      { id: 6, title: 'When wakings are medical', duration: 4 },
    ],
  },

  // === BY TOPIC: Sleep regressions ===
  {
    id: 'sleep-regression-survival',
    title: 'Sleep Regression Survival Guide',
    description: 'Get through every regression with your sanity intact',
    category: 'topic',
    categoryId: 'sleep-regressions',
    chapters: 7,
    duration: 28,
    chapterList: [
      { id: 1, title: 'What causes regressions', duration: 4 },
      { id: 2, title: 'The 4-month regression', duration: 4 },
      { id: 3, title: 'The 8-10 month regression', duration: 4 },
      { id: 4, title: 'The 12-month regression', duration: 4 },
      { id: 5, title: 'The 18-month regression', duration: 4 },
      { id: 6, title: 'The 2-year regression', duration: 4 },
      { id: 7, title: 'General survival strategies', duration: 4 },
    ],
  },

  // === SEASONAL: Travel ===
  {
    id: 'travel-sleep-guide',
    title: 'Travel Sleep Guide',
    description: 'Maintain good sleep habits on the go',
    category: 'seasonal',
    categoryId: 'travel',
    chapters: 6,
    duration: 24,
    chapterList: [
      { id: 1, title: 'Preparing for travel', duration: 4 },
      { id: 2, title: 'Sleep on planes and in cars', duration: 4 },
      { id: 3, title: 'Setting up sleep spaces away from home', duration: 4 },
      { id: 4, title: 'Managing time zone changes', duration: 4 },
      { id: 5, title: 'Sticking to routines (mostly)', duration: 4 },
      { id: 6, title: 'Getting back on track after travel', duration: 4 },
    ],
  },

  // === SEASONAL: Daylight saving ===
  {
    id: 'daylight-saving-guide',
    title: 'Daylight Saving Time Transitions',
    description: 'Adjust your child\'s schedule smoothly',
    category: 'seasonal',
    categoryId: 'daylight-saving',
    chapters: 4,
    duration: 15,
    chapterList: [
      { id: 1, title: 'Spring forward strategy', duration: 4 },
      { id: 2, title: 'Fall back strategy', duration: 4 },
      { id: 3, title: 'Gradual vs cold turkey approach', duration: 3 },
      { id: 4, title: 'Recovery timeline expectations', duration: 4 },
    ],
  },

  // === SEASONAL: Holidays ===
  {
    id: 'holiday-sleep-survival',
    title: 'Holiday Sleep Survival',
    description: 'Navigate parties, visitors, and excitement',
    category: 'seasonal',
    categoryId: 'holidays',
    chapters: 5,
    duration: 18,
    chapterList: [
      { id: 1, title: 'Managing overstimulation', duration: 4 },
      { id: 2, title: 'Flexible schedules that work', duration: 4 },
      { id: 3, title: 'Sleep with visitors around', duration: 3 },
      { id: 4, title: 'Saying no to late nights', duration: 3 },
      { id: 5, title: 'Post-holiday recovery', duration: 4 },
    ],
  },

  // === SEASONAL: New sibling ===
  {
    id: 'new-sibling-sleep',
    title: 'Sleep with a New Sibling',
    description: 'Help your older child adjust when baby arrives',
    category: 'seasonal',
    categoryId: 'new-sibling',
    chapters: 5,
    duration: 20,
    chapterList: [
      { id: 1, title: 'Preparing before baby arrives', duration: 4 },
      { id: 2, title: 'Managing regression', duration: 4 },
      { id: 3, title: 'Room sharing decisions', duration: 4 },
      { id: 4, title: 'Balancing two bedtimes', duration: 4 },
      { id: 5, title: 'Finding your new normal', duration: 4 },
    ],
  },
];

// Helper functions
export function getGuidesByCategory(category, categoryId) {
  return GUIDES.filter(g => g.category === category && g.categoryId === categoryId);
}

export function getGuideById(id) {
  return GUIDES.find(g => g.id === id);
}

export function getCategoryLabel(category, categoryId) {
  if (category === 'age') {
    return AGE_GROUPS.find(a => a.id === categoryId)?.label || categoryId;
  }
  if (category === 'topic') {
    return TOPICS.find(t => t.id === categoryId)?.label || categoryId;
  }
  if (category === 'seasonal') {
    return SEASONAL.find(s => s.id === categoryId)?.label || categoryId;
  }
  return categoryId;
}
