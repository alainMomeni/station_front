import { LogoIcon } from "@/assets/svg/logo";
import { Link } from "react-router-dom";

const NotificationsModal: React.FC = () => {
  return (
    <div className="absolute top-12 right-0 w-80 z-20 bg-white shadow-lg rounded-lg">
      <div>
        <ul className="space-y-0">
          {/* Notification 1 */}
          <li className="flex items-start cursor-pointer w-full rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md p-3 border-b">
            <LogoIcon className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-sm text-gray-700">Vous avez reçu un nouveau message</p>
              <p className="text-xs text-blue-500">Il y a quelques minutes</p>
            </div>
          </li>

          {/* Notification 2 */}
          <li className="flex items-start cursor-pointer w-full rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md p-3 border-b">
            <LogoIcon className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-sm text-gray-700">Vous avez reçu un nouveau message</p>
              <p className="text-xs text-blue-500">Il y a 10 minutes</p>
            </div>
          </li>

          {/* Notification 3 */}
          <li className="flex items-start cursor-pointer w-full rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md p-3 border-b">
            <LogoIcon className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-sm text-gray-700">Vous avez reçu un nouveau message</p>
              <p className="text-xs text-blue-500">Il y a 44 minutes</p>
            </div>
          </li>

          {/* Voir plus */}
          <li className="flex items-center justify-center cursor-pointer w-full rounded-lg transition duration-300 ease-in-out bg-gray-100 hover:shadow-md p-2 border-b">
            <Link to="/notifications" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-sm text-gray-700">Voir plus</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationsModal;
