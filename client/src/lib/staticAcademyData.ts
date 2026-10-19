export type StaticCourse = {
  id: number;
  title: string;
  slug: string;
  badgeText: string;
  shortDescription: string;
  imageUrl: string;
  ageGroup: string;
  rating: string;
  level: string;
};

const image = (name: string) => `/al-huda-academy/images/${name}`;

export const STATIC_COURSES: StaticCourse[] = [
  { id: 1, title: "دورة القرآن واللغة العربية", slug: "kids-quran-arabic", badgeText: "مسار الأطفال", shortDescription: "تأسيس الطفل في القراءة العربية وتلاوة القرآن وفهم المفردات بأسلوب تفاعلي متدرج.", imageUrl: image("quran-arabic-kids-course_26a38cfb.jpg"), ageGroup: "الأطفال من 5 إلى 12 سنة", rating: "5.0", level: "مبتدئ" },
  { id: 2, title: "دورة اللغة الإنجليزية للأطفال", slug: "kids-english", badgeText: "مسار الأطفال", shortDescription: "لغة إنجليزية عملية من خلال القصص والحوار والألعاب الصوتية المناسبة لعمر الطفل.", imageUrl: image("english-kids-photo26.jpg"), ageGroup: "الأطفال من 5 إلى 14 سنة", rating: "5.0", level: "مبتدئ" },
  { id: 3, title: "دورة الحساب الذهني", slug: "kids-mental-math", badgeText: "الأكثر طلباً", shortDescription: "تدريب ممتع على السوروبان والتخيل الذهني وسرعة الاستجابة الحسابية.", imageUrl: image("image7.jpg"), ageGroup: "الأطفال من 5 إلى 14 سنة", rating: "5.0", level: "جميع المستويات" },
  { id: 4, title: "دورة السودوكو للأطفال", slug: "kids-sudoku", badgeText: "تفكير منطقي", shortDescription: "ألغاز سودوكو متدرجة لتنمية الاستدلال والتركيز والصبر.", imageUrl: image("image52.jpg"), ageGroup: "الأطفال من 7 إلى 15 سنة", rating: "5.0", level: "مبتدئ" },
  { id: 5, title: "دورة جداول الضرب", slug: "kids-multiplication", badgeText: "مهارة أساسية", shortDescription: "طريقة ذكية ومرنة لفهم جداول الضرب وتثبيتها بعيداً عن الحفظ الجاف.", imageUrl: image("image17.jpg"), ageGroup: "الأطفال من 6 إلى 13 سنة", rating: "5.0", level: "مبتدئ" },
  { id: 6, title: "دورة مكعب روبيك", slug: "kids-rubik-cube", badgeText: "تعلم باللعب", shortDescription: "تدريب عملي على حل مكعب روبيك وتنمية التصور المكاني وتسلسل الخطوات.", imageUrl: image("image19.jpg"), ageGroup: "الأطفال من 7 إلى 16 سنة", rating: "5.0", level: "متوسط" },
  { id: 7, title: "دورة الذكاء الاصطناعي للأطفال", slug: "kids-ai", badgeText: "مستقبل الطفل", shortDescription: "مدخل آمن ومبسط إلى التفكير الحاسوبي والذكاء الاصطناعي.", imageUrl: image("ai-courses_522f9710.jpg"), ageGroup: "الأطفال من 8 إلى 16 سنة", rating: "5.0", level: "مبتدئ" },
  { id: 8, title: "دورة مدرب الحساب الذهني", slug: "trainer-mental-math", badgeText: "مسار المدربين", shortDescription: "تأهيل عملي لتعليم الحساب الذهني للأطفال وبناء جلسات تعليمية فعالة.", imageUrl: image("image18.jpg"), ageGroup: "المعلمات والأمهات والمدربات", rating: "5.0", level: "جميع المستويات" },
  { id: 9, title: "دورة مدرب السودوكو", slug: "trainer-sudoku", badgeText: "مسار المدربين", shortDescription: "منهجية تدريب الأطفال على السودوكو وبناء أنشطة التفكير المنطقي.", imageUrl: image("image27.jpg"), ageGroup: "المعلمات والمدربات", rating: "5.0", level: "جميع المستويات" },
  { id: 10, title: "دورة مدرب مكعب روبيك", slug: "trainer-rubik-cube", badgeText: "مسار المدربين", shortDescription: "تأهيل المدرب لتعليم مكعب روبيك عبر منهج واضح وآمن وممتع.", imageUrl: image("image29.jpg"), ageGroup: "المعلمات والمدربات", rating: "5.0", level: "متوسط" },
  { id: 11, title: "دورة مدرب جداول الضرب", slug: "trainer-multiplication", badgeText: "مسار المدربين", shortDescription: "أدوات تربوية لتدريس جداول الضرب بالفهم والاسترجاع المتباعد.", imageUrl: image("image31.jpg"), ageGroup: "المعلمات والأمهات والمدربات", rating: "5.0", level: "جميع المستويات" },
  { id: 12, title: "دورة مدرب الذكاء الاصطناعي", slug: "trainer-ai", badgeText: "مسار المدربين", shortDescription: "تأهيل المدرب لتقديم الذكاء الاصطناعي للأطفال بمحتوى تربوي آمن ومسؤول.", imageUrl: image("ai-courses_522f9710.jpg"), ageGroup: "المعلمات والمدربات", rating: "5.0", level: "متقدم" },
];

export type StaticInstructor = {
  id: number;
  name: string;
  slug: string;
  title: string;
  bio: string;
  detailedBio: string;
  qualifications: string;
  credentials: string;
  location: string;
  avatarUrl: string;
  rating: string;
  reviewCount: number;
  studentsTrained: number;
  trainersGraduated: number;
};

export const STATIC_INSTRUCTORS: StaticInstructor[] = [
  { id: 1, name: "أ. هدى عابدين", slug: "huda-abdeen", title: "مؤسسة الأكاديمية ومدربة دولية معتمدة في الحساب الذهني", bio: "بكالوريوس فيزياء وأساليب تدريسها. مدربة أطفال ومدربين معتمدة دولياً، متخصصة في تطوير القدرات العقلية للأطفال من خلال أساليب مبتكرة.", detailedBio: "دربت أكثر من 50 مدربة وأكثر من 200 طفل في العديد من الدول العربية والأوروبية، وخرجت مدربات أطفال قادرات على تدريب الأطفال بلغات متعددة.", qualifications: "بكالوريوس فيزياء وطرق تدريسها | مدربة مدربات معتمدة دولياً | أكثر من 12 عاماً خبرة تعليمية", credentials: "اعتماد دولي من مؤسسة علمني العالمية | شهادات تميز في التعليم الإبداعي والذكاء الحسابي", location: "الشرق الأوسط وأوروبا (أونلاين)", avatarUrl: image("huda-abdeen-portrait_095fea91.jpg"), rating: "5.0", reviewCount: 68, studentsTrained: 250, trainersGraduated: 55 },
  { id: 2, name: "أ. آلاء الرفاعي", slug: "alaa-alrefai", title: "مدربة برمجة وذكاء اصطناعي للأطفال واليافعين", bio: "مدربة وتربوية شغوفة بتبسيط البرمجة والذكاء الاصطناعي للأطفال واليافعين، وتقديم المعرفة التقنية بطريقة آمنة وممتعة.", detailedBio: "تتخصص في تصميم أنشطة تعليمية تساعد الطفل على التفكير الخوارزمي وصياغة الأسئلة والتحقق من المعلومات وتحويل التقنية إلى مساحة للإبداع.", qualifications: "تخصص في التعليم الرقمي والذكاء الاصطناعي للأطفال | خبرة في تصميم الحقائب التدريبية والتعلم الافتراضي", credentials: "مدربة في البرمجة والذكاء الاصطناعي للأطفال | خبرة في تدريب المعلمات وبناء المشاريع التعليمية", location: "أونلاين", avatarUrl: image("image33.jpg"), rating: "4.9", reviewCount: 42, studentsTrained: 180, trainersGraduated: 35 },
  { id: 3, name: "أ. سحر الحردان", slug: "sahar-alhardan", title: "مدربة حساب ذهني باللغة الألمانية", bio: "مدربة متخصصة في تقديم برامج تنمية الذاكرة والحساب الذهني السريع للأطفال الناطقين بالألمانية والعرب المقيمين بأوروبا.", detailedBio: "متخصصة في تقديم برامج تنمية الذاكرة والحساب الذهني السريع للأطفال الناطقين بالألمانية والعرب المقيمين بأوروبا لتعزيز التفوق المدرسي.", qualifications: "بكالوريوس علوم (فيزياء) | شهادة تدريس متقدمة بألمانيا | خبرة 10 سنوات في المدارس والمعاهد الأوروبية", credentials: "اعتماد تدريب الحساب الذهني التفاعلي بالألمانية | تدريب مكثف لأطفال المهجر", location: "ألمانيا", avatarUrl: image("image18.jpg"), rating: "4.9", reviewCount: 38, studentsTrained: 120, trainersGraduated: 15 },
];
