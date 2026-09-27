import { useState } from 'react';
import { Link } from 'react-router';

export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFaq, setActiveFaq] = useState(null);

    const categories = [
        { id: 'all', label: 'جميع الخدمات' },
        { id: 'repair', label: 'الإصلاح والتسريبات' },
        { id: 'installation', label: 'التركيب والتأسيس' },
        { id: 'emergency', label: 'الطوارئ' },
    ];

    const services = [
        {
            id: 1,
            category: 'repair',
            title: 'كشف وإصلاح تسريبات المياه',
            description: 'استخدام أجهزة الفحص الصوتية الحرارية الحديثة لتحديد مكان التسريب بدقة وبدون أي تكسير.',
            price: 'بداية من 3000 د.ج',
            icon: '🔍',
            features: ['فحص إلكتروني دقيق', 'بدون إحداث كسر للجدران', 'ضمان إصلاح شامل']
        },
        {
            id: 2,
            category: 'installation',
            title: 'تأسيس شبكات السباكة للمباني',
            description: 'تركيب وتمديد أنابيب المياه والصرف الصحي للمنازل والفلل والمحلات التجارية.',
            price: 'حسب مساحة المشروع',
            icon: '🏗️',
            features: ['مخطط تنفيذ متكامل', 'مواد عالية التشييد والجودة', 'اختبار ضغط الأنابيب']
        },
        {
            id: 3,
            category: 'installation',
            title: 'تركيب وصيانة السخانات',
            description: 'تركيب كافة أنواع سخانات المياه (غاز / كهرباء) مع فحص صمامات الأمان والضغط.',
            price: 'بداية من 2500 د.ج',
            icon: '🔥',
            features: ['تركيب آمن ومعتمد', 'صيانة صمام الأمان', 'فحص توصيلات الغاز والكهرباء']
        },
        {
            id: 4,
            category: 'repair',
            title: 'تسليك مجاري الصرف الصحي',
            description: 'حل مشكلات الانسداد المستعصية في الأحواض وشبكات الصرف باستخدام الضغط العالي.',
            price: 'بداية من 2000 د.ج',
            icon: '🌊',
            features: ['تنظيف شامل للأنابيب', 'استخدام معدات الضغط', 'إزالة الشوائب والأجسام الصلبة']
        },
        {
            id: 5,
            category: 'installation',
            title: 'تركيب الأدوات الصحية والخلاطات',
            description: 'تركيب وتجديد خلاطات المياه، الأحواض، الدش، والديكورات الصحية للحمامات والمطابخ.',
            price: 'بداية من 1500 د.ج',
            icon: '🚿',
            features: ['تشطيب دقيق ورائع', 'إحكام العزل ضد التسريب', 'ضبط تدفق المياه']
        },
        {
            id: 6,
            category: 'emergency',
            title: 'خدمة التدخل السريع (طوارئ 24/7)',
            description: 'فريق جاهز للانطلاق فوراً للتعامل مع انفجار الأنابيب أو أعطال المياه المفاجئة.',
            price: 'حسب نوع العطل',
            icon: '🚨',
            features: ['وصول خلال وقت قياسي', 'فريق طوارئ مجهز', 'حلول سريعة ومؤقتة/دائمة']
        }
    ];

    const faqs = [
        {
            q: "كيف يتم تحديد تكلفة الخدمة؟",
            a: "تعتمد التكلفة على نوع المشكلة وتكلفة قطع الغيار المطلوبة. نوفر معاينة مجانية وتقييم شامل قبل البدء في العمل."
        },
        {
            q: "هل توفرون ضماناً على الأقسام والأعمال؟",
            a: "نعم، نقدم ضماناً مكتوباً يتراوح بين 6 أشهر إلى سنة كاملة على كافة أعمال الصيانة والتأسيس."
        },
        {
            q: "كم يستغرق وصول الفني في حالات الطوارئ؟",
            a: "يصل فريق الطوارئ في غضون 30 إلى 45 دقيقة من لحظة تأكيد الطلب."
        }
    ];

    const filteredServices = services.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              service.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Header Hero */}
            <div className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
                <span className="bg-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/20 inline-block mb-4">
                    خدماتنا الشاملة
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">حلول سباكة احترافية ومتكاملة</h1>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                    اختر من بين مجموعة واسعة من خدمات الصيانة والتركيب التي يُنفذها خبراء معتمدون.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mt-8">
                    <input 
                        type="text" 
                        placeholder="ابحث عن خدمة (مثل: تسريب، سخان، تسليك)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-7xl mx-auto px-6 pt-10">
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                                selectedCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-md scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map(service => (
                            <div 
                                key={service.id} 
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 rounded-2xl flex items-center justify-center text-3xl">
                                            {service.icon}
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                                            {service.price}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features list */}
                                    <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                                        {service.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center text-xs text-gray-500 gap-2">
                                                <span className="text-blue-500 font-bold">✓</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to = '/contact'
                                    className="w-full text-center py-2.5 bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 font-medium text-sm rounded-xl border border-gray-200 hover:border-blue-600 transition-all duration-200"
                                >
                                    طلب الخدمة الآن
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                        <p className="text-gray-500 text-lg">لم نجد أي خدمة تطابق بحثك الحالي.</p>
                    </div>
                )}
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-6 mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">الأسئلة الشائعة</h2>
                    <p className="text-gray-600 mt-2 text-sm">إليك إجابات حول أكثر التساؤلات تكراراً من قبل العملاء.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                className="w-full text-right p-5 font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span>{faq.q}</span>
                                <span className="text-blue-600 text-xl font-semibold">
                                    {activeFaq === idx ? '−' : '+'}
                                </span>
                            </button>
                            {activeFaq === idx && (
                                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 bg-blue-50/20">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="max-w-7xl mx-auto px-6 mt-20">
                <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">هل تحتاج إلى استشارة أو خدمة مخصصة؟</h3>
                        <p className="text-blue-100 text-sm md:text-base">تواصل مع فريقنا المباشر لمعاينة الموقع وتقديم عرض سعر مجاني.</p>
                    </div>
                    <Link 
                        to='/contact'
                        className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-md"
                    >
                        اتصل بنا الآن
                    </Link>
                </div>
            </div>
        </div>
    );
}