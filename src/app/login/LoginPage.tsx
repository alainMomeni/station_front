import { Form } from "./form";
import HomePicture from '@assets/images/home-bg.png'

export const Login: React.FC = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center w-full min-h-screen p-4">
      <div className="bg-white rounded-2xl overflow-hidden max-w-6xl w-full shadow-2xl flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4">
                <svg width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5 34.888c-1.033 0-2.08-.23-2.898-.71L7.123 29.291C3.67 26.963 3.454 26.609 3.454 22.955V14.044c0-3.654.2-4.009 3.592-6.306l8.541-4.934c1.618-.94 4.162-.94 5.78 0l8.51 4.902c3.454 2.328 3.67 2.682 3.67 6.336v8.896c0 3.654-.2 4.009-3.592 6.306l-8.54 4.933c-.832.478-1.88.71-2.912.71Zm0-30.464c-.647 0-1.279.124-1.726.387L8.295 9.712C5.782 11.408 5.782 11.408 5.782 14.044v8.896c0 2.636 0 2.636 2.575 4.378l8.418 4.857c.91.524 2.56.524 3.47 0l8.479-4.902c2.497-1.695 2.497-1.695 2.497-4.331v-8.896c0-2.636 0-2.636-2.575-4.378L20.227 4.81c-.448-.262-1.08-.387-1.727-.387Z"
                    fill="black"
                  />
                  <path
                    d="M18.5 24.281c-3.191 0-5.781-2.59-5.781-5.781s2.59-5.781 5.781-5.781 5.781 2.59 5.781 5.781-2.59 5.781-5.781 5.781Zm0-9.25a3.469 3.469 0 0 0-3.469 3.469 3.469 3.469 0 0 0 3.469 3.469 3.469 3.469 0 0 0 3.469-3.469 3.469 3.469 0 0 0-3.469-3.469Z"
                    fill="black"
                  />
                </svg>
                <h1 className="text-3xl font-bold ml-2 text-gray-800">Station OLA</h1>
              </div>
              <p className="text-gray-600">Nous sommes heureux de vous revoir sur la plateforme</p>
            </div>

            {/* Formulaire */}
            <Form />

            {/* Footer */}
            <div className="mt-8 text-sm text-gray-600">
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out" />
                  <span>Se souvenir de moi</span>
                </label>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-150 ease-in-out">
                  Mot de passe oublié ?
                </a>
              </div>
              <p className="text-center">
                <span>Vous n'avez pas de compte ? </span>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-150 ease-in-out font-medium">
                  Inscrivez-vous gratuitement !
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full hidden lg:block">
          <img className="w-full h-full object-cover" src={HomePicture} alt="Fun background" />
        </div>
      </div>
    </div>
  );
};

export default Login;


