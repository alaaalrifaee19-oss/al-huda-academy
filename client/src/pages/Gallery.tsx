import Navbar, { WHATSAPP_LINK } from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Images, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const galleryImages = [
  ["/al-huda-academy/images/image1.jpg", "تدريب الحساب الذهني بالعداد"],
  ["/al-huda-academy/images/image2.jpg", "تعلم هادئ ومركّز"],
  ["/al-huda-academy/images/image3.jpg", "فرحة الأطفال بالإنجاز"],
  ["/al-huda-academy/images/image4.jpg", "تجربة جماعية تفاعلية"],
  ["/al-huda-academy/images/image5.jpg", "تطبيقات عملية على السوروبان"],
  ["/al-huda-academy/images/image6.jpg", "التعلم بالحركة والمشاركة"],
  ["/al-huda-academy/images/image7.jpg", "تدريب فردي على الحساب"],
  ["/al-huda-academy/images/image8.jpg", "متابعة خطوة بخطوة"],
  ["/al-huda-academy/images/image9.jpg", "تركيز وممارسة"],
  ["/al-huda-academy/images/image10.jpg", "إنجازات أطفالنا"],
  ["/al-huda-academy/images/image11.jpg", "نشاطات تعليمية ممتعة"],
  ["/al-huda-academy/images/image12.jpg", "تدريب عملي"],
  ["/al-huda-academy/images/image13.jpg", "تمارين ذهنية متدرجة"],
  ["/al-huda-academy/images/image14.jpg", "تنمية المهارات الحسابية"],
  ["/al-huda-academy/images/image15.jpg", "لحظات تكريم"],
  ["/al-huda-academy/images/image16.jpg", "تعلم مستمر"],
  ["/al-huda-academy/images/image17.jpg", "تثبيت جداول الضرب"],
  ["/al-huda-academy/images/image18.jpg", "تطبيقات المدربين"],
  ["/al-huda-academy/images/image19.jpg", "مكعب روبيك والتفكير المكاني"],
  ["/al-huda-academy/images/image20.jpg", "التعلم الرقمي"],
  ["/al-huda-academy/images/image21.jpg", "مشروعات الذكاء الاصطناعي"],
  ["/al-huda-academy/images/image22.jpg", "تعلم عبر الإنترنت"],
  ["/al-huda-academy/images/image23.jpg", "بيئة منزلية داعمة"],
  ["/al-huda-academy/images/image24.jpg", "حصص تفاعلية"],
  ["/al-huda-academy/images/image25.jpg", "تدريب الحساب"],
  ["/al-huda-academy/images/image26.jpg", "شهادات إنجاز الأطفال"],
  ["/al-huda-academy/images/image27.jpg", "تطبيقات المدربات"],
  ["/al-huda-academy/images/image28.jpg", "التعلم بالتجربة"],
  ["/al-huda-academy/images/image29.jpg", "تدريب مكعب روبيك"],
  ["/al-huda-academy/images/image30.jpg", "أدوات التعلم الرقمي"],
  ["/al-huda-academy/images/image31.jpg", "جداول الضرب بطريقة عملية"],
  ["/al-huda-academy/images/image32.jpg", "مشاهدة الدرس وتطبيقه"],
  ["/al-huda-academy/images/image33.jpg", "تدريب الذكاء الاصطناعي"],
  ["/al-huda-academy/images/image34.jpg", "الحساب الذهني في المنزل"],
  ["/al-huda-academy/images/image35.jpg", "تمارين رقمية"],
  ["/al-huda-academy/images/image36.jpg", "تعلم مستقل بإشراف"],
  ["/al-huda-academy/images/image37.jpg", "التعلم في كل مكان"],
  ["/al-huda-academy/images/image38.jpg", "فرحة المشاركة"],
  ["/al-huda-academy/images/image39.jpg", "ألعاب التفكير"],
  ["/al-huda-academy/images/image40.jpg", "تحديات ذهنية"],
  ["/al-huda-academy/images/image41.jpg", "أنشطة جماعية للأطفال"],
  ["/al-huda-academy/images/image42.jpg", "التعلم بالتركيز"],
  ["/al-huda-academy/images/image43.jpg", "تدريب ممتع في الطبيعة"],
  ["/al-huda-academy/images/image44.jpg", "الخيال وحل المشكلات"],
  ["/al-huda-academy/images/image45.jpg", "تعلم اللغات"],
  ["/al-huda-academy/images/image46.jpg", "تدريب على المهارات"],
  ["/al-huda-academy/images/image47.jpg", "عرض أعمال الأطفال"],
  ["/al-huda-academy/images/image48.jpg", "فريق الأطفال"],
  ["/al-huda-academy/images/image49.jpg", "إنجازات ومشروعات"],
  ["/al-huda-academy/images/image50.jpg", "لحظة تعلم جماعي"],
  ["/al-huda-academy/images/image51.jpg", "تطبيقات سودوكو"],
  ["/al-huda-academy/images/image52.jpg", "سودوكو وتنمية المنطق"],
  ["/al-huda-academy/images/image53.jpg", "تحديات التفكير المنطقي"],
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <section className="bg-gradient-to-b from-blue-50/70 to-background dark:from-slate-900 py-14 border-b border-border text-center">
        <div className="container max-w-3xl space-y-4">
          <Badge className="bg-orange-100 text-accent border-none font-bold text-xs">من داخل أكاديمية الهدى</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary">معرض صور الأكاديمية</h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">لقطات من حصصنا وأنشطتنا ومشروعات الأطفال والمدربات؛ لأن التعلم الحقيقي يظهر في لحظة تجربة ومشاركة وإنجاز.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2"><MessageCircle className="w-4 h-4" />استفسري عن البرامج عبر الواتساب</Button></a>
        </div>
      </section>
      <section className="py-12 flex-1">
        <div className="container">
          <div className="flex items-center justify-between gap-3 mb-8"><div className="flex items-center gap-3"><div className="w-11 h-11 rounded-2xl bg-blue-100 text-primary flex items-center justify-center"><Images className="w-5 h-5" /></div><div><h2 className="text-xl sm:text-2xl font-black text-primary">لحظات من رحلتنا التعليمية</h2><p className="text-xs text-muted-foreground">صور مختارة من الملف المرفق</p></div></div><span className="text-xs text-muted-foreground">{galleryImages.length} صورة</span></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map(([src, alt], index) => (
              <figure key={src} className={`group overflow-hidden rounded-2xl bg-white dark:bg-card border border-border shadow-sm hover:shadow-xl transition-all ${index % 9 === 0 ? "md:row-span-2" : ""}`}>
                <div className="aspect-square overflow-hidden"><img src={src} alt={alt} title="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              </figure>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-primary text-white p-8 text-center space-y-4"><h2 className="text-2xl font-black">هل تريدين أن يكون طفلك جزءاً من هذه الرحلة؟</h2><p className="text-blue-100 text-sm">تواصلي معنا لنرشح لك المسار المناسب لعمر طفلك واحتياجه.</p><div className="flex flex-wrap justify-center gap-3"><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2"><MessageCircle className="w-4 h-4" />تواصل عبر الواتساب</Button></a><Link href="/courses"><Button variant="outline" className="border-white/50 text-white hover:bg-white/10 font-bold gap-2">تصفح الدورات<ArrowLeft className="w-4 h-4" /></Button></Link></div></div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
