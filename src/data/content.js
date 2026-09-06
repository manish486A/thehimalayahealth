export const WHATSAPP_NUMBER = "9779869838254";

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const problemItems = [
  {
    icon: "⚠️",
    title: 'The "borderline" trap',
    text: 'A fasting glucose of 5.9 mmol/L gets filed as "watch and wait." That number is 3–10 years from type 2 diabetes — with a reversible window that\'s closing.',
  },
  {
    icon: "⏱️",
    title: "Episodic, not continuous",
    text: "A 10-minute annual check-up cannot manage the daily variables — diet, sleep, stress, movement — that actually drive your metabolic trajectory.",
  },
  {
    icon: "💊",
    title: "Prescription over lifestyle",
    text: "Over 70% of NCD prescriptions in Nepal cover conditions directly addressable through structured lifestyle intervention. Almost none of those patients receive it.",
  },
  {
    icon: "🔀",
    title: "No integrated team",
    text: "Your GP, dietician, and trainer have never spoken to each other. Your health plan exists in three silos — if it exists at all.",
  },
];

export const services = [
  {
    id: 1,
    variant: "dark",
    tag: "Primary program",
    title: ["Preventive Lifestyle", "Intervention Hub"],
    desc: "For individuals without a diagnosis who want to reverse early metabolic warning signs, optimize performance, and proactively protect their health before disease takes hold.",
    list: [
      "Doctor, dietician & health coach — all three, assigned to you",
      "Baseline metabolic lab panel + clinical interpretation",
      "Hyper-personalized South Asian nutrition protocol",
      "Gym & physical activity programming",
      "Habit architecture & behavior coaching",
      "Monthly clinical review calls",
      "Real-time progress tracking dashboard",
    ],
    num: "01",
  },
  {
    id: 2,
    variant: "light",
    tag: "Secondary program",
    title: ["Telemedicine", "Treatment Portal"],
    desc: "For individuals with established diagnoses — diabetes, hypertension, PCOS, dyslipidemia — who need specialized remote clinical management paired with aggressive lifestyle medicine.",
    list: [
      "Physician-led chronic disease management",
      "Medication oversight & optimization",
      "Integrated lifestyle medicine co-intervention",
      "Complication screening & prevention protocols",
      "Specialist referral coordination",
      "Fortnightly clinical check-ins",
      "Disease reversal where clinically possible",
    ],
    num: "02",
  },
];

export const steps = [
  {
    num: 1,
    title: "Take the free audit",
    text: "A 3-minute Metabolic Health Audit generates your personalized risk score based on your lifestyle, labs, and family history. Instant results.",
  },
  {
    num: 2,
    title: "Book your discovery call",
    text: "A free 15-minute video consultation with one of our physicians via WhatsApp. A clinical conversation, not a sales pitch. We recommend the right program for you.",
  },
  {
    num: 3,
    title: "Begin your program",
    text: "Meet your three-person care team. Complete your baseline labs. Receive your integrated care plan — nutrition, movement, habits, and clinical targets.",
  },
];

export const team = [
  {
    photo: "/team/physician.png",
    name: "Your Physician",
    role: "Longevity & Preventive Medicine",
    bio: "Physician with specialized training in lifestyle and metabolic medicine. Clinical lead for your care plan, lab interpretation, and medical oversight.",
  },
  {
    photo: "/team/dietician.png",
    name: "Your Dietician",
    role: "Clinical Nutrition & Metabolic Diet",
    bio: "Registered dietician specializing in metabolic disease reversal and South Asian nutrition. Your plan is a living document, not a pamphlet.",
  },
  {
    photo: "/team/healthcoach.png",
    name: "Your Health Coach",
    role: "Behavior Change & Habit Architecture",
    bio: "Certified health and behavior change coach managing habits, exercise programming, sleep and stress protocols. Your highest-touchpoint team member.",
  },
];

export const quizQuestions = [
  {
    q: "What is your main health concern?",
    opts: [
      "Diabetes",
      "Prediabetes/ PCOS /High Blood sugar",
      "High blood pressure",
      "Weight / Cholesterol / Metabolic health",
    ],
  },
  {
    q: "What is your main health goal?",
    opts: [
      "Control my blood sugar",
      "Control my blood pressure",
      "Lose weight / belly fat",
      "Improve my overall health",
    ],
  },
  {
    q: "Do you have a family history of any of these?",
    opts: [
      "Diabetes",
      "High blood pressure",
      "Heart disease / Stroke",
      "None that I know of",
    ],
  },
  {
    q: "Have you experienced or been diagnosed with any complications related to diabetes, BP, or metabolic health?",
    opts: [
      "Kidney problems",
      "Eye/vision problems",
      "Heart disease / stroke",
      "None that I know of",
    ],
  },
  {
    q: "Are you currently taking medication for any of these?",
    opts: ["Diabetes", "Blood pressure", "Cholesterol", "None"],
  },
];

export const testimonials = [
  {
    text: 'I\u2019d been told my blood sugar was "borderline" for two years. In four months with Healthynix, my HbA1c went from 6.1 to 5.4.',
    badgeNum: "HbA1c 6.1 → 5.4",
    badgeLbl: "4 months",
    name: "Client A — Kathmandu, 44",
  },
  {
    text: "As a business owner I thought I had no time. The online model meant I could do everything from my office. Triglycerides dropped 40% in 90 days.",
    badgeNum: "Triglycerides ↓ 40%",
    badgeLbl: "90 days",
    name: "Client B — Pokhara, 38",
  },
  {
    text: "I came for weight loss and left with a complete understanding of my metabolism. Lost 11kg and the energy I hadn\u2019t felt in a decade.",
    badgeNum: "11kg fat loss",
    badgeLbl: "sustained",
    name: "Client C — Diaspora, 35",
  },
];

export const faqs = [
  {
    q: "Is this suitable if I have no diagnosis yet?",
    a: "Yes — the Intervention Hub is specifically for people without an established diagnosis. Early warning signs, performance optimization, or simply wanting to get ahead of disease — this is the right program.",
  },
  {
    q: "How does the online model work?",
    a: "Everything is delivered remotely — video consultations, WhatsApp messaging with your care team, personalized nutrition plans, progress tracking, and lab coordination. Phone or laptop, wherever you are.",
  },
  {
    q: "How is this different from seeing my GP?",
    a: "Your GP sees you when something is wrong, for 10 minutes. Our program is continuous, preventive, and lifestyle-first — a physician, dietician, and health coach working together over months, not minutes.",
  },
  {
    q: "Do I need lab tests?",
    a: "Yes — a baseline metabolic panel is part of the program. We coordinate with partner diagnostic labs near you and provide a referral letter. Lab costs are separate from the program fee.",
  },
  {
    q: "Can I join from outside Nepal?",
    a: "Yes. We serve the Nepali diaspora worldwide. The care program is fully remote and globally accessible. Lab coordination may require additional steps depending on your country.",
  },
];
export const products = [
  {
    id: "p1",
    name: "Smart Ring",
    photo: "/products/smartring.jpg",
    price: "NPR 9,999",
    description:
      "A sleek smart ring for continuous health and fitness tracking. Heart Rate & HRV. SpO2 & Skin Temperature. Sleep & Recovery. Stress & Readiness. Steps, Calories & Activity. Water & Sweat Resistant. Android App. Continuous tracking. Smarter health insights.",
  },
];
export const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/the.himalayahealth" },
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61554745337151",
  },
  { label: "TikTok", url: "https://www.tiktok.com/@drmaniishyadav" },
];
