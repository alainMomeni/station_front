import { useState, FC } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Form: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form className="mt-10 space-y-6">
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Entrez votre email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:outline-none focus:ring-purple-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Mot de passe
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="**********"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:outline-none focus:ring-purple-500 focus:border-transparent transition"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500 focus:outline-none"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 transform hover:-translate-y-1"
        >
          Se connecter
        </button>
        <button
          type="button"
          className="w-full py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 flex items-center justify-center space-x-2"
        >
          <img src="/src/assets/images/icon-google.png" alt="Google icon" className="w-5 h-5" />
          <span>Se connecter avec Google</span>
        </button>
      </div>
    </form>
  );
};

