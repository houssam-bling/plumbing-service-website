import { Link } from 'react-router';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center max-w-md">
                <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">الصفحة غير موجودة</h2>
                <p className="text-gray-600 mb-8">
                    عذراً، الصفحة اللي راك تحوس عليها ماكانتش ولا تنقلت.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg active:scale-95 transition-all"
                >
                    العودة للرئيسية
                </Link>
            </div>
        </div>
    );
}