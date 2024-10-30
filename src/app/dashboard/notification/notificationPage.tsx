import { useState } from 'react';
import { CheckCircle, Bell, Trash2, Eye } from 'lucide-react';

const notificationsData = [
  {
    id: 1,
    title: "Nouvelle commande",
    description: "Une nouvelle commande a été passée par le client X.",
    time: "Il y a 5 minutes",
    status: "unread",
    priority: "high"
  },
  {
    id: 2,
    title: "Mise à jour du système",
    description: "Une mise à jour sera appliquée demain à 3h du matin.",
    time: "Il y a 2 heures",
    status: "read",
    priority: "medium"
  },
  {
    id: 3,
    title: "Rapport de ventes",
    description: "Le rapport des ventes de la semaine est disponible.",
    time: "Il y a 1 jour",
    status: "unread",
    priority: "low"
  },
  {
    id: 4,
    title: "Nouveau message",
    description: "Vous avez reçu un nouveau message de l'administrateur.",
    time: "Il y a 3 heures",
    status: "unread",
    priority: "medium"
  },
  {
    id: 5,
    title: "Stock faible",
    description: "Le stock de l'article Y est faible, pensez à le réapprovisionner.",
    time: "Il y a 5 heures",
    status: "unread",
    priority: "high"
  },
  {
    id: 6,
    title: "Facture en attente",
    description: "La facture du fournisseur Z est en attente de paiement.",
    time: "Il y a 1 jour",
    status: "read",
    priority: "medium"
  },
  {
    id: 7,
    title: "Rapport mensuel",
    description: "Le rapport mensuel est maintenant disponible pour consultation.",
    time: "Il y a 2 jours",
    status: "unread",
    priority: "low"
  }
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notif) => ({
      ...notif,
      status: "read"
    }));
    setNotifications(updatedNotifications);
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button
          onClick={markAllAsRead}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-600"
        >
          Marquer tout comme lu
        </button>
      </header>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start p-4 bg-white rounded-lg shadow-md ${
              notif.status === "unread" ? "border-l-4 border-indigo-500" : ""
            }`}
          >
            <div className="flex-shrink-0">
              <Bell className={`w-6 h-6 ${
                notif.priority === "high"
                  ? "text-red-500"
                  : notif.priority === "medium"
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`} />
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{notif.title}</h2>
              <p className="text-gray-600">{notif.description}</p>
              <p className="text-xs text-gray-400">{notif.time}</p>
            </div>
            <div className="ml-4 flex space-x-2">
              <button
                onClick={() => deleteNotification(notif.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button className="text-blue-500 hover:text-blue-700">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center text-gray-500">
          <CheckCircle className="w-10 h-10 mx-auto mb-4" />
          <p>Pas de nouvelles notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
