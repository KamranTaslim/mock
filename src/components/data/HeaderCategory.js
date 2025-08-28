// // Note: Image imports will need to be added when you have the actual image files
// // import sbiLogo from "../assets/Navbar img/sbi.png";
// // import ibpoLogo from "../assets/Navbar img/ibpo.png";

// const categories = {
//   bank: {
//     icon: '🏦',
//     name: 'Bank',
//     exams: [
//       { icon: '🔴', name: 'SBI Clerk' }, // Replace with imageSrc: sbiLogo when you have the image
//       { icon: '🔴', name: 'SBI PO' },    // Replace with imageSrc: sbiLogo when you have the image
//       { icon: '🔴', name: 'IBPS PO' },   // Replace with imageSrc: ibpoLogo when you have the image
//       { icon: '🔴', name: 'IBPS Clerk' } // Replace with imageSrc: ibpoLogo when you have the image
//     ]
//   },
//   ssc: {
//     icon: '📝',
//     name: 'SSC',
//     exams: [
//       { icon: '🔴', name: 'SSC MTS' },
//       { icon: '🔴', name: 'SSC CHSL' },
//       { icon: '🔴', name: 'SSC GD' }
//     ]
//   },
//   railway: {
//     icon: '🚂',
//     name: 'Railway',
//     exams: [
//       { icon: '🔴', name: 'RRB ALP' },
//       { icon: '🔴', name: 'RPF SI' },
//       { icon: '🔴', name: 'RPF Constable' }
//     ]
//   },
//   state: { 
//     icon: '🏛️', 
//     name: 'State',
//     exams: [] 
//   },
//   other: { 
//     icon: '📋', 
//     name: 'Other',
//     exams: [] 
//   },
//   teaching: { 
//     icon: '👨‍🏫', 
//     name: 'Teaching',
//     exams: [] 
//   },
//   insurance: { 
//     icon: '🔒', 
//     name: 'Insurance',
//     exams: [] 
//   },
//   medical: { 
//     icon: '⚕️', 
//     name: 'Medical',
//     exams: [] 
//   },
//   engineering: { 
//     icon: '⚙️', 
//     name: 'Engineering',
//     exams: [] 
//   },
//   defence: { 
//     icon: '🛡️', 
//     name: 'Defence',
//     exams: [] 
//   },
//   gate: { 
//     icon: '🚪', 
//     name: 'GATE',
//     exams: [] 
//   }
// };

// export default categories;

const categories = {
  bank: {
    name: "Banking",
    icon: "🏦",
    exams: [
      { name: "SBI PO", icon: "📊", imageSrc: null },
      { name: "IBPS PO", icon: "💼", imageSrc: null },
      { name: "RBI Grade B", icon: "🏛️", imageSrc: null },
      { name: "NABARD", icon: "🌾", imageSrc: null },
      { name: "Bank SO", icon: "⚙️", imageSrc: null },
      { name: "SBI Clerk", icon: "📋", imageSrc: null }
    ]
  },
  ssc: {
    name: "SSC",
    icon: "📋",
    exams: [
      { name: "SSC CGL", icon: "🎯", imageSrc: null },
      { name: "SSC CHSL", icon: "📝", imageSrc: null },
      { name: "SSC MTS", icon: "🔧", imageSrc: null },
      { name: "SSC CPO", icon: "👮", imageSrc: null },
      { name: "SSC JE", icon: "⚙️", imageSrc: null },
      { name: "SSC GD", icon: "🛡️", imageSrc: null }
    ]
  },
  railway: {
    name: "Railway",
    icon: "🚆",
    exams: [
      { name: "RRB NTPC", icon: "🎫", imageSrc: null },
      { name: "RRB JE", icon: "⚙️", imageSrc: null },
      { name: "RRB Group D", icon: "🔨", imageSrc: null },
      { name: "RRB ALP", icon: "🚂", imageSrc: null },
      { name: "RRB RPF", icon: "🚔", imageSrc: null },
      { name: "DFCCIL", icon: "🛤️", imageSrc: null }
    ]
  },
  state: {
    name: "State Govt",
    icon: "🏛️",
    exams: [
      { name: "UP PCS", icon: "📊", imageSrc: null },
      { name: "MPPSC", icon: "🎯", imageSrc: null },
      { name: "BPSC", icon: "📝", imageSrc: null },
      { name: "RPSC", icon: "🏰", imageSrc: null },
      { name: "UPPSC", icon: "📋", imageSrc: null },
      { name: "HPSC", icon: "🏔️", imageSrc: null }
    ]
  },
  teaching: {
    name: "Teaching",
    icon: "👨‍🏫",
    exams: [
      { name: "CTET", icon: "📚", imageSrc: null },
      { name: "DSSSB", icon: "🎓", imageSrc: null },
      { name: "KVS", icon: "🏫", imageSrc: null },
      { name: "NVS", icon: "📖", imageSrc: null },
      { name: "UP TET", icon: "✏️", imageSrc: null },
      { name: "REET", icon: "👩‍🏫", imageSrc: null }
    ]
  },
  defence: {
    name: "Defence",
    icon: "🛡️",
    exams: [
      { name: "NDA", icon: "⚔️", imageSrc: null },
      { name: "CDS", icon: "🎖️", imageSrc: null },
      { name: "AFCAT", icon: "✈️", imageSrc: null },
      { name: "Indian Navy", icon: "⚓", imageSrc: null },
      { name: "Indian Army", icon: "🪖", imageSrc: null },
      { name: "BSF", icon: "🛡️", imageSrc: null }
    ]
  }
};
export default categories;