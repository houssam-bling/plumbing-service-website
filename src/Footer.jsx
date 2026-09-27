import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                
                {/* العمود 1: حول الشركة */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img 
                            className="h-10 w-auto bg-white rounded-md p-1" 
                            src="https://placehold.co/150x50/2563eb/ffffff?text=Logo" 
                            alt="Logo" 
                        />
                        <span className="text-xl font-bold text-white">خدمات السباكة</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        نحن نقدم أسرع وأفضل خدمات السباكة والصيانة المنزلية بأعلى معايير الجودة والاحترافية.
                    </p>
                </div>

                {/* العمود 2: روابط سريعة */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-800 pb-2 inline-block">روابط سريعة</h3>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link to="/" className="hover:text-blue-400 transition-colors">الصفحة الرئيسية</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-blue-400 transition-colors">خدماتنا</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-400 transition-colors">اتصل بنا</Link>
                        </li>
                    </ul>
                </div>

                {/* العمود 3: معلومات الاتصال */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-800 pb-2 inline-block">تواصل معنا</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <span>📍</span> الجزائر العاصمة، بئر مراد رايس
                        </li>
                        <li className="flex items-center gap-2">
                            <span>📞</span> <span className="dir-ltr">+213 555 123 456</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>✉️</span> contact@plomberie-alger.dz
                        </li>
                        <li className="flex items-center gap-2">
                            <span>⏰</span> خدمة الطوارئ 24/7
                        </li>
                    </ul>
                </div>


            </div>

            {/* حقوق النشر */}
            <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ خدمات السباكة.</p>
            </div>
        </footer>
    );
}