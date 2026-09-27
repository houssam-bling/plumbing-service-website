import { Link } from "react-router";

export default function HomePage() {
    const reviews = [
        {
            name: "كريم. ب",
            role: "باب الزوار",
            comment: "خدمة فائقة السرعة، تم كشف تسريب صعب بدون أي هدم أو تخريب في الجدران. أنصح بالتعامل معهم بشدة!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
        },
        {
            name: "أمينة. ل",
            role: "حيدرة",
            comment: "فريق محترف ومواعيد دقيقة جداً. قاموا بتأسيس سباكة الحمام بالكامل بأعلى جودة وضمان.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
        },
        {
            name: "سفيان. م",
            role: "بئر خادم",
            comment: "اتصلنا بهم في وقت طوارئ متأخر وكانوا متواجدين خلال أقل من نصف ساعة. احترافية عالية وأخلاق نبيلة.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
        },
        {
            name: "رياض. ح",
            role: "الحراش",
            comment: "نتعامل معهم دائماً في مشاريع التشطيبات الداخلية، التزام تام بالمعايير والأسعار مناسبة جداً.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
        }
    ];
    // تكرار القائمة للوصول لتأثير اللوب المستمر السلس
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[85vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <img 
                    className="absolute inset-0 w-full h-full object-cover opacity-40" 
                    src="https://plombier.com/assets/img/conseils/conseils-plombier.jpg" 
                    alt="خدمات السباكة" 
                />
                <div className="relative z-20 text-center max-w-2xl px-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        خدمات سباكة احترافية وسريعة
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        نقدم لك أفضل الحلول لأعمال السباكة والصيانة المنزلية بأعلى جودة وعلى أيدي خبراء متخصصين.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to ='/contact'
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg active:scale-95 transition-all duration-200"
                        >
                            احجز خدمتك الآن
                        </Link>
                        <a 
                            href="#services" 
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all duration-200"
                        >
                            تعرف على خدماتنا
                        </a>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div id="about" className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img 
                            className="rounded-2xl shadow-xl w-full h-100 object-cover" 
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800" 
                            alt="من نحن - خدمات السباكة" 
                        />
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg hidden sm:block">
                            <p className="text-3xl font-extrabold">+10</p>
                            <p className="text-sm">سنوات من الخبرة والتميز</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">من نحن</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6 leading-snug">
                            نحن شريكك الموثوق لكافة أعمال السباكة والصيانة
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            تأسست شركتنا لتقديم خدمات سباكة عالية المستوى تعتمد على الأمان، الدقة، والسرعة. نحن ندرك أهمية وجود نظام سباكة يعمل بكفاءة ودون مشاكل في منزلك أو منشأتك، ولهذا يحرص فريقنا المكون من أفضل الفنيين على تقديم حلول مستدامة وبأحدث التقنيات.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                <span className="text-gray-700 font-medium">فنيون معتمدون وذوو خبرة</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                <span className="text-gray-700 font-medium">أحدث معدات الكشف والفحص</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                <span className="text-gray-700 font-medium">استجابة سريعة على مدار 24/7</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</span>
                                <span className="text-gray-700 font-medium">ضمان شامل على كافة الأعمال</span>
                            </div>
                        </div>

                        <div className="flex gap-8 border-t border-gray-100 pt-6">
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800">+1200</h4>
                                <p className="text-gray-500 text-sm">عميل سعيد</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800">+2500</h4>
                                <p className="text-gray-500 text-sm">مشروع ومهمة منجزة</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        ما هي خدماتنا؟
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        نوفر مجموعة متكاملة من حلول السباكة والصيانة لضمان أمان وراحة منزلك أو منشأتك.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            🛠️
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">اصلاح التسريبات</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            كشف وإصلاح تسريبات المياه والأنابيب بدقة عالية وبدون إحداث أضرار بالجدران أو الأرضيات.
                        </p>
                        <Link to = '/services' className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
                            اقرأ المزيد &rarr;
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            🚿
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">تأسيس وصيانة الحمامات</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            تركيب الخلاطات، الأحواض، الدش، وأنظمة الصرف للمطابخ والحمامات بأحدث المعايير.
                        </p>
                        <Link to = '/services' className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
                            اقرأ المزيد &rarr;
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            🔥
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">تركيب وحماية السخانات</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            تركيب وصيانة سخانات المياه الكهربائية والغاز وضمان عملها بكفاءة وأمان تام.
                        </p>
                        <Link to = '/services' className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
                            اقرأ المزيد &rarr;
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                            🚨
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">خدمات الطوارئ 24/7</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            استجابة سريعة لحالات انسداد المجاري والمشاكل المفاجئة على مدار الساعة.
                        </p>
                        <Link to = '/services' className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
                            اقرأ المزيد &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            {/* Testimonials Loop Section */}
            <div className="py-16 bg-white border-t border-gray-100 overflow-hidden">
                <div className="text-center mb-10 px-6">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">آراء العملاء</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">ماذا يقول عنا عملاؤنا؟</h2>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Infinite Carousel Container */}
                    <div className="animate-marquee gap-6">
                        {duplicatedReviews.map((item, index) => (
                            <div 
                                key={index} 
                                className="w-[320px] sm:w-95 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm shrink-0"
                            >
                                <div className="flex items-center gap-1 text-amber-400 mb-3">
                                    {"★".repeat(item.rating)}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    "{item.comment}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" 
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                                        <p className="text-xs text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            فريق العمل الخبير
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            يمتلك فريقنا خبرة واسعة في حل أكثر مشكلات السباكة تعقيداً بأعلى معايير الدقة والسرعة.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center p-6 border border-gray-100">
                            <img 
                                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-blue-50" 
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256" 
                                alt="أحمد علي" 
                            />
                            <h3 className="text-xl font-bold text-gray-800">أحمد علي</h3>
                            <p className="text-blue-600 text-sm font-medium mb-3">رئيس الفنيين</p>
                            <p className="text-gray-500 text-sm">خبرة أكثر من 10 سنوات في صيانة وتأسيس شبكات المياه والتسريبات.</p>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center p-6 border border-gray-100">
                            <img 
                                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-blue-50" 
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=256" 
                                alt="محمد كريم" 
                            />
                            <h3 className="text-xl font-bold text-gray-800">محمد كريم</h3>
                            <p className="text-blue-600 text-sm font-medium mb-3">خبير تركيبات وسخانات</p>
                            <p className="text-gray-500 text-sm">متخصص في تركيب السخانات وأنظمة الضغط وصيانة الأدوات الصحية.</p>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center p-6 border border-gray-100">
                            <img 
                                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 border-blue-50" 
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256" 
                                alt="سارة مراد" 
                            />
                            <h3 className="text-xl font-bold text-gray-800">سارة مراد</h3>
                            <p className="text-blue-600 text-sm font-medium mb-3">مسؤولة خدمة العملاء والطوارئ</p>
                            <p className="text-gray-500 text-sm">تنسيق المواعيد والاستجابة السريعة لبلاغات الطوارئ على مدار 24 ساعة.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}