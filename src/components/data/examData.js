export const examCategories = {
  banking: {
    name: 'Banking',
    fullName: 'Banking Exam Preparation Hub',
    description: 'Master all major banking examinations with our comprehensive test series, previous year papers, and expert-designed practice materials.',
    icon: 'banking',
    totalTests: 635,
    activeUsers: '108K+',
    successRate: '95%',
    gradient: {
      from: 'blue-600',
      to: 'purple-600'
    },
    tagline: 'Banking Exams',
    exams: [
      {
        id: 'sbi',
        name: 'SBI',
        fullName: 'State Bank of India',
        description: 'Comprehensive preparation for SBI PO, Clerk, and SO positions with latest pattern tests.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
        totalTests: 150,
        activeUsers: '25K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['PO', 'Clerk', 'SO'],
        features: ['Latest Pattern', 'Previous Years', 'Chapter-wise', 'Sectional Tests']
      },
      {
        id: 'ibps',
        name: 'IBPS',
        fullName: 'Institute of Banking Personnel Selection',
        description: 'Complete IBPS preparation covering PO, Clerk, RRB, and SO with AI-powered analytics.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        totalTests: 200,
        activeUsers: '40K+',
        difficulty: 'Hard',
        upcoming: false,
        tags: ['PO', 'Clerk', 'RRB', 'SO'],
        features: ['All Cadres', 'Prelims & Mains', 'Interview Prep', 'Regional Focus']
      },
      {
        id: 'rbi',
        name: 'RBI',
        fullName: 'Reserve Bank of India',
        description: 'Premium RBI preparation for Grade A, Grade B, and Assistant positions.',
        image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400',
        totalTests: 80,
        activeUsers: '12K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['Grade A', 'Grade B', 'Assistant'],
        features: ['Economic Focus', 'High-level Questions', 'Interview Prep', 'Current Affairs']
      },
      {
        id: 'nabard',
        name: 'NABARD',
        fullName: 'National Bank for Agriculture and Rural Development',
        description: 'Specialized NABARD preparation focusing on agriculture and rural development.',
        image: 'https://images.unsplash.com/photo-1574323754255-32b6a3e64b68?w=400',
        totalTests: 60,
        activeUsers: '8K+',
        difficulty: 'Medium',
        upcoming: false,
        tags: ['Grade A', 'Grade B', 'Assistant'],
        features: ['Agriculture Focus', 'Rural Development', 'Cooperative Banking', 'Policy Updates']
      },
      {
        id: 'sidbi',
        name: 'SIDBI',
        fullName: 'Small Industries Development Bank of India',
        description: 'SIDBI exam preparation with focus on small scale industries and development banking.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        totalTests: 45,
        activeUsers: '5K+',
        difficulty: 'Medium',
        upcoming: false,
        tags: ['Officer', 'Assistant', 'Manager'],
        features: ['Industrial Focus', 'Development Banking', 'MSME Knowledge', 'Financial Analysis']
      },
      {
        id: 'rrb',
        name: 'RRB',
        fullName: 'Regional Rural Banks',
        description: 'Regional Rural Bank preparation covering Officer Scale I, II, III and Office Assistant.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400',
        totalTests: 100,
        activeUsers: '18K+',
        difficulty: 'Medium',
        upcoming: true,
        tags: ['Officer Scale I', 'Officer Scale II', 'Officer Scale III', 'Assistant'],
        features: ['Regional Focus', 'Rural Banking', 'Hindi & English', 'Computer Knowledge']
      }
    ]
  },
  ssc: {
    name: 'SSC',
    fullName: 'SSC Exam Preparation Hub',
    description: 'Comprehensive preparation for all Staff Selection Commission exams with detailed practice tests and expert guidance.',
    icon: 'ssc',
    totalTests: 450,
    activeUsers: '85K+',
    successRate: '92%',
    gradient: {
      from: 'green-600',
      to: 'teal-600'
    },
    tagline: 'SSC Exams',
    exams: [
      {
        id: 'ssc-cgl',
        name: 'SSC CGL',
        fullName: 'Combined Graduate Level Examination',
        description: 'Complete preparation for SSC CGL with tier-wise practice tests and previous year questions.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        totalTests: 120,
        activeUsers: '30K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['Tier I', 'Tier II', 'Tier III'],
        features: ['All Tiers Covered', 'Previous Years', 'Mock Tests', 'Detailed Solutions']
      },
      {
        id: 'ssc-chsl',
        name: 'SSC CHSL',
        fullName: 'Combined Higher Secondary Level',
        description: 'CHSL preparation covering all subjects with practice tests and study materials.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
        totalTests: 90,
        activeUsers: '20K+',
        difficulty: 'Medium',
        upcoming: false,
        tags: ['DEO', 'LDC', 'PA/SA'],
        features: ['Typing Tests', 'Skill Test', 'Descriptive Papers', 'Current Affairs']
      },
      {
        id: 'ssc-mts',
        name: 'SSC MTS',
        fullName: 'Multi Tasking Staff',
        description: 'MTS exam preparation with basic level questions and comprehensive practice.',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
        totalTests: 60,
        activeUsers: '15K+',
        difficulty: 'Easy',
        upcoming: true,
        tags: ['Paper I', 'Paper II'],
        features: ['Basic Level', 'Hindi & English', 'Reasoning', 'Numerical Aptitude']
      },
      {
        id: 'ssc-je',
        name: 'SSC JE',
        fullName: 'Junior Engineer',
        description: 'Technical preparation for Junior Engineer posts in various departments.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
        totalTests: 80,
        activeUsers: '12K+',
        difficulty: 'Hard',
        upcoming: false,
        tags: ['Civil', 'Mechanical', 'Electrical'],
        features: ['Technical Focus', 'Branch-wise Tests', 'Previous Years', 'Detailed Explanations']
      }
    ]
  },
  railway: {
    name: 'Railway',
    fullName: 'Railway Exam Preparation Hub',
    description: 'Complete preparation for Indian Railway recruitment exams with updated syllabus and practice materials.',
    icon: 'railway',
    totalTests: 380,
    activeUsers: '65K+',
    successRate: '89%',
    gradient: {
      from: 'purple-600',
      to: 'pink-600'
    },
    tagline: 'Railway Exams',
    exams: [
      {
        id: 'rrb-ntpc',
        name: 'RRB NTPC',
        fullName: 'Non-Technical Popular Categories',
        description: 'NTPC exam preparation covering all stages with comprehensive study material.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400',
        totalTests: 100,
        activeUsers: '25K+',
        difficulty: 'Medium',
        upcoming: true,
        tags: ['CBT 1', 'CBT 2', 'Typing Test'],
        features: ['Stage-wise Prep', 'Current Affairs', 'Railway Awareness', 'Previous Years']
      },
      {
        id: 'rrb-group-d',
        name: 'RRB Group D',
        fullName: 'Railway Group D',
        description: 'Group D preparation with basic level questions and physical efficiency tests.',
        image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400',
        totalTests: 80,
        activeUsers: '20K+',
        difficulty: 'Easy',
        upcoming: false,
        tags: ['Track Maintainer', 'Helper', 'Porter'],
        features: ['Basic Level', 'Physical Test Prep', 'Trade Specific', 'Hindi & English']
      },
      {
        id: 'rrb-je',
        name: 'RRB JE',
        fullName: 'Railway Junior Engineer',
        description: 'Technical preparation for Railway Junior Engineer positions.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400',
        totalTests: 70,
        activeUsers: '15K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['Civil', 'Mechanical', 'Electrical'],
        features: ['Technical Focus', 'Drawing Tests', 'Branch-wise', 'Interview Prep']
      },
      {
        id: 'rrb-alp',
        name: 'RRB ALP',
        fullName: 'Assistant Loco Pilot',
        description: 'ALP preparation with technical knowledge and practical aptitude tests.',
        image: 'https://images.unsplash.com/photo-1742049-c3ef4f43b2b0?w=400',
        totalTests: 60,
        activeUsers: '12K+',
        difficulty: 'Medium',
        upcoming: false,
        tags: ['CBT 1', 'CBT 2', 'CBAT'],
        features: ['Technical Aptitude', 'Computer Based Test', 'Psycho Aptitude', 'Trade Tests']
      }
    ]
  },
  state: {
    name: 'State',
    fullName: 'State PSC Exam Preparation Hub',
    description: 'Comprehensive preparation for State Public Service Commission exams, Police, Teacher, and other state government recruitments.',
    icon: 'state',
    totalTests: 280,
    activeUsers: '45K+',
    successRate: '87%',
    gradient: {
      from: 'orange-600',
      to: 'red-600'
    },
    tagline: 'State PSC Exams',
    exams: [
      {
        id: 'upsc-psc',
        name: 'UPSC PSC',
        fullName: 'Uttar Pradesh Public Service Commission',
        description: 'Complete UPPSC preparation for PCS, RO/ARO, and other state services.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
        totalTests: 80,
        activeUsers: '15K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['PCS', 'RO/ARO', 'Assistant Registrar'],
        features: ['Prelims & Mains', 'Interview Prep', 'Current Affairs', 'State Specific']
      },
      {
        id: 'bpsc',
        name: 'BPSC',
        fullName: 'Bihar Public Service Commission',
        description: 'BPSC exam preparation covering all subjects with Bihar-specific content.',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
        totalTests: 60,
        activeUsers: '12K+',
        difficulty: 'Medium',
        upcoming: false,
        tags: ['CCE', 'APO', 'DSP'],
        features: ['Hindi Medium', 'Local Issues', 'Previous Years', 'Mock Interviews']
      },
      {
        id: 'mpsc',
        name: 'MPSC',
        fullName: 'Maharashtra Public Service Commission',
        description: 'Maharashtra PSC preparation with Marathi and English medium support.',
        image: 'https://images.unsplash.com/photo-1554224154-26032fbed8bd?w=400',
        totalTests: 70,
        activeUsers: '18K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['State Service', 'PSI', 'STI'],
        features: ['Marathi Support', 'State Focus', 'Current Events', 'Personality Test']
      },
      {
        id: 'state-police',
        name: 'State Police',
        fullName: 'State Police Constable & SI',
        description: 'State police recruitment preparation with physical and written test coverage.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
        totalTests: 70,
        activeUsers: '20K+',
        difficulty: 'Medium',
        upcoming: false,
        tags: ['Constable', 'SI', 'Head Constable'],
        features: ['Physical Test Prep', 'Law & Order', 'State Laws', 'Interview Tips']
      }
    ]
  },
  teaching: {
    name: 'Teaching',
    fullName: 'Teaching Exam Preparation Hub',
    description: 'Complete preparation for teaching recruitment exams including CTET, TET, KVS, NVS and other educational service exams.',
    icon: 'teaching',
    totalTests: 220,
    activeUsers: '35K+',
    successRate: '91%',
    gradient: {
      from: 'pink-600',
      to: 'rose-600'
    },
    tagline: 'Teaching Exams',
    exams: [
      {
        id: 'ctet',
        name: 'CTET',
        fullName: 'Central Teacher Eligibility Test',
        description: 'CTET preparation for Paper 1 and Paper 2 with child development and pedagogy focus.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        totalTests: 60,
        activeUsers: '15K+',
        difficulty: 'Medium',
        upcoming: true,
        tags: ['Paper I', 'Paper II', 'Child Development'],
        features: ['Age-wise Prep', 'Pedagogy Focus', 'Mock Tests', 'Previous Years']
      },
      {
        id: 'kvs',
        name: 'KVS',
        fullName: 'Kendriya Vidyalaya Sangathan',
        description: 'KVS teacher recruitment preparation for PGT, TGT, and PRT positions.',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
        totalTests: 50,
        activeUsers: '10K+',
        difficulty: 'Hard',
        upcoming: false,
        tags: ['PGT', 'TGT', 'PRT'],
        features: ['Subject-wise Tests', 'Interview Prep', 'Demo Teaching', 'Current Affairs']
      },
      {
        id: 'nvs',
        name: 'NVS',
        fullName: 'Navodaya Vidyalaya Samiti',
        description: 'NVS recruitment preparation for teaching and non-teaching positions.',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
        totalTests: 40,
        activeUsers: '8K+',
        difficulty: 'Medium',
        upcoming: true,
        tags: ['Teaching', 'Non-Teaching', 'Principal'],
        features: ['Rural Focus', 'Value Education', 'Leadership Skills', 'Group Discussion']
      },
      {
        id: 'dsssb',
        name: 'DSSSB',
        fullName: 'Delhi Subordinate Services Selection Board',
        description: 'DSSSB teacher recruitment for Delhi government schools - TGT, PGT, PRT.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        totalTests: 70,
        activeUsers: '12K+',
        difficulty: 'Hard',
        upcoming: false,
        tags: ['TGT', 'PGT', 'PRT'],
        features: ['Delhi Specific', 'Subject Mastery', 'Teaching Methods', 'Computer Skills']
      }
    ]
  },
  defence: {
    name: 'Defence',
    fullName: 'Defence Services Exam Preparation Hub',
    description: 'Complete preparation for defence services including NDA, CDS, AFCAT, Navy and other military recruitment exams.',
    icon: 'defence',
    totalTests: 180,
    activeUsers: '28K+',
    successRate: '85%',
    gradient: {
      from: 'red-600',
      to: 'orange-600'
    },
    tagline: 'Defence Exams',
    exams: [
      {
        id: 'nda',
        name: 'NDA',
        fullName: 'National Defence Academy',
        description: 'NDA preparation for Army, Navy, and Air Force with mathematics and GAT focus.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
        totalTests: 50,
        activeUsers: '12K+',
        difficulty: 'Hard',
        upcoming: true,
        tags: ['Army', 'Navy', 'Air Force'],
        features: ['Mathematics Focus', 'GAT Preparation', 'SSB Interview', 'Physical Fitness']
      },
      {
        id: 'cds',
        name: 'CDS',
        fullName: 'Combined Defence Services',
        description: 'CDS exam preparation for IMA, INA, AFA with comprehensive study material.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400',
        totalTests: 45,
        activeUsers: '10K+',
        difficulty: 'Hard',
        upcoming: false,
        tags: ['IMA', 'INA', 'AFA'],
        features: ['Officer Training', 'Leadership Skills', 'Current Affairs', 'English Focus']
      },
      {
        id: 'afcat',
        name: 'AFCAT',
        fullName: 'Air Force Common Admission Test',
        description: 'AFCAT preparation for Flying Branch, Technical, and Ground Duty officers.',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400',
        totalTests: 35,
        activeUsers: '8K+',
        difficulty: 'Medium',
        upcoming: true,
        tags: ['Flying Branch', 'Technical', 'Ground Duty'],
        features: ['Aviation Knowledge', 'Technical Aptitude', 'Reasoning Skills', 'Group Tasks']
      },
      {
        id: 'navy-mr',
        name: 'Navy MR',
        fullName: 'Indian Navy Matric Recruit',
        description: 'Navy MR preparation for sailor recruitment with trade-specific training.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        totalTests: 50,
        activeUsers: '8K+',
        difficulty: 'Easy',
        upcoming: false,
        tags: ['Sailor', 'Cook', 'Steward'],
        features: ['Trade Specific', 'Physical Standards', 'Medical Tests', 'Swimming Tests']
      }
    ]
  }
};
