import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        serviceType: 'general',
        urgency: 'normal',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // إجراء عملية إرسال النموذج هنا
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({
            name: '',
            phone: '',
            email: '',
            serviceType: 'general',
            urgency: 'normal',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Header Hero */}
            <div className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
                <span className="bg-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/20 inline-block mb-4">
                    تواصل معنا
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">نحن هنا لمساعدتك دائماً</h1>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                    هل لديك استفسار، طوارئ سباكة، أو ترغب في طلب عرض سعر؟ فريقنا جاهز للرد عليك في أي وقت.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                            📞
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">الهاتف / الطوارئ</h3>
                            <p className="text-gray-600 text-sm font-mono dir-ltr text-right">+213 555 123 456</p>
                            <p className="text-gray-600 text-sm font-mono dir-ltr text-right">+213 234 567 890</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                            ✉️
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h3>
                            <p className="text-gray-600 text-sm">contact@plumbing-service.dz</p>
                            <p className="text-gray-600 text-sm">support@plumbing-service.dz</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                            📍
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">المقر الرئيسي</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                بئر مراد رايس، الجزائر العاصمة
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                            ⏰
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-1">أوقات العمل</h3>
                            <p className="text-gray-600 text-sm">الأحد - الخميس: 08:00 - 18:00</p>
                            <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 bg-red-50 text-red-600 rounded-md">
                                الطوارئ: 24/7
                            </span>
                        </div>
                    </div>
                </div>

                {/* Form & Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Form Section */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">أرسل لنا رسالة</h2>
                        <p className="text-gray-600 text-sm mb-6">
                            قم بملء النموذج أدناه وسنرد عليك في أقرب وقت ممكن.
                        </p>

                        {isSubmitted && (
                            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm flex items-center gap-3">
                                <span>✅</span>
                                <span>تم إرسال رسالتك بنجاح! سيتواصل معك أحد ممثلينا قريباً.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="مثال: محمد عبد الله" 
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        required 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="05 / 06 / 07 XX XX XX XX" 
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com" 
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة المطلوب</label>
                                    <select 
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700"
                                    >
                                        <option value="general">استفسار عام</option>
                                        <option value="leak">كشف تسريبات</option>
                                        <option value="installation">تأسيس وتركيبات</option>
                                        <option value="heater">صيانة سخانات</option>
                                        <option value="emergency">طلب طوارئ عاجل</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">درجة الأهمية</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="urgency" 
                                            value="normal" 
                                            checked={formData.urgency === 'normal'}
                                            onChange={handleChange}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        عادية
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="urgency" 
                                            value="urgent" 
                                            checked={formData.urgency === 'urgent'}
                                            onChange={handleChange}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        مستعجلة (خلال اليوم)
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-red-600 font-medium cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="urgency" 
                                            value="emergency" 
                                            checked={formData.urgency === 'emergency'}
                                            onChange={handleChange}
                                            className="text-red-600 focus:ring-red-500"
                                        />
                                        طوارئ فورية 🚨
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">تفاصيل الطلب أو المشكلة *</label>
                                <textarea 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="اكتب هنا التفاصيل أو العنوان بدقة..." 
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-[0.98] transition-all duration-200"
                            >
                                إرسال الطلب الآن
                            </button>
                        </form>
                    </div>

                    {/* Map & Social Side */}
                    <div className="lg:col-span-5 space-y-6" dir="rtl">
                        {/* Map Container */}
                        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm overflow-hidden">
                            <h3 className="font-bold text-gray-800 p-2 text-lg">موقعنا على الخريطة</h3>
                            <a 
                                href="https://maps.google.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="relative block w-full h-70 bg-gray-100 rounded-2xl overflow-hidden group border border-gray-100"
                            >
                                {/* صورة خريطة دقيقة وشبه واقعية للمدينة */}
                                <img 
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                                    alt="خريطة الموقع" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                                
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-gray-100 text-center flex items-center gap-2">
                                    <span className="text-xl">📍</span>
                                    <div>
                                        <p className="text-xs font-bold text-gray-800">مقر الشركة الرئيسي</p>
                                        <p className="text-[11px] text-blue-600 font-medium">انقر لفتح الاتجاهات عبر Google Maps</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Direct Social Links */}
                        <div className="bg-linear-to-r-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
                            <h3 className="font-bold text-gray-800 mb-2 text-lg">تابعنا على منصات التواصل الاجتماعي</h3>
                            <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                تسرنا متابعتك للحصول على نصائح دورية للحفاظ على سباكة منزلك وأحدث عروضنا.
                            </p>
                            <div className="flex gap-3">
                                <a href="#" className="w-11 h-11 bg-white text-blue-600 rounded-xl shadow-sm flex items-center justify-center font-bold text-sm hover:bg-blue-600 hover:text-white transition-all active:scale-95">
                                    FB
                                </a>
                                <a href="#" className="w-11 h-11 bg-white text-emerald-600 rounded-xl shadow-sm flex items-center justify-center font-bold text-sm hover:bg-emerald-600 hover:text-white transition-all active:scale-95">
                                    WA
                                </a>
                                <a href="#" className="w-11 h-11 bg-white text-pink-600 rounded-xl shadow-sm flex items-center justify-center font-bold text-sm hover:bg-pink-600 hover:text-white transition-all active:scale-95">
                                    IG
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}