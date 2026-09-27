import { Link, NavLink } from 'react-router'

export default function NavBar() {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-bold transition-colors"
            : "text-gray-700 hover:text-blue-600 transition-colors";

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 bg-white/95 backdrop-blur-md shadow-md">
            <Link to="/" className="flex items-center gap-2">
                <img
                    className="h-12 md:h-14 w-auto object-contain"
                    src="https://placehold.co/150x50/2563eb/ffffff?text=Logo"
                    alt="شعار خدمات السباكة"
                />
                <span className="hidden sm:block text-lg font-bold text-gray-800">
                    خدمات السباكة
                </span>
            </Link>

            <div className="flex items-center gap-4 md:gap-8 font-medium text-sm md:text-base">
                <NavLink to="/" className={linkClass}>الرئيسية</NavLink>
                <NavLink to="/services" className={linkClass}>خدماتنا</NavLink>
                <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg shadow hover:bg-blue-700 active:scale-95 transition-all duration-200"
                >
                    اتصل بنا
                </Link>
            </div>
        </nav>
    );
}