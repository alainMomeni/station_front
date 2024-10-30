import { Mail, Phone, User, Briefcase } from 'lucide-react';

const UserProfilePage = () => {
  const userInfo = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    jobTitle: "Responsable des ventes",
    joinedDate: "12 Mars 2020",
    location: "Paris, France"
  };

  return (
    <div className="p-8 bg-gray-50 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Profil Utilisateur</h1>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-semibold">
            {userInfo.name[0]}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{userInfo.name}</h2>
            
            <p className="text-gray-500">{userInfo.jobTitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <User className="text-indigo-500 w-5 h-5" />
            <div>
              <p className="text-gray-500">Nom Complet</p>
              <p className="text-gray-700">{userInfo.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="text-indigo-500 w-5 h-5" />
            <div>
              <p className="text-gray-500">Titre du Poste</p>
              <p className="text-gray-700">{userInfo.jobTitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-indigo-500 w-5 h-5" />
            <div>
              <p className="text-gray-500">Email</p>
              <p className="text-gray-700">{userInfo.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-indigo-500 w-5 h-5" />
            <div>
              <p className="text-gray-500">Téléphone</p>
              <p className="text-gray-700">{userInfo.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <User className="text-indigo-500 w-5 h-5" />
            <div>
              <p className="text-gray-500">Date d'inscription</p>
              <p className="text-gray-700">{userInfo.joinedDate}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <User className="text-indigo-500 w-5 h-5" />
            <div>
              <p className="text-gray-500">Lieu</p>
              <p className="text-gray-700">{userInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
