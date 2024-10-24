import { ArrowUp, ArrowDown } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  RadialLinearScale
} from 'chart.js';
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const VenteProduitRepportPage = () => {
  const barData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'OM',
        data: [750, 650, 700, 600, 800, 850, 750, 650, 700, 600, 800, 850],
        backgroundColor: 'rgb(99, 102, 241)',
        barThickness: 12,
      },
      {
        label: 'Cash',
        data: [450, 500, 480, 530, 420, 400, 440, 460, 380, 450, 400, 350],
        backgroundColor: 'rgb(229, 231, 235)',
        barThickness: 12,
      }
    ]
  };

  const lineData = {
    labels: ['01', '02', '03', '04', '05', '06', '07'],
    datasets: [
      {
        label: 'Cette semaine',
        data: [200, 250, 180, 220, 300, 270, 310],
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        fill: false // Retiré le remplissage
      },
      {
        label: 'Semaine dernière',
        data: [180, 220, 160, 200, 280, 250, 290],
        borderColor: 'rgb(229, 231, 235)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      }
    ]
  };

  const doughnutData = {
    labels: ['Lubrifiant', 'Gaz', 'Essuie-glace'],
    datasets: [{
      data: [40, 32, 28],
      backgroundColor: [
        'rgb(99, 102, 241)',
        'rgb(147, 151, 255)',
        'rgb(224, 231, 255)'
      ],
      borderWidth: 0,
    }]
  };

  // Nouvelles données pour le graphique radar
  const radarData = {
    labels: ['Ventes', 'Stock', 'Clients', 'Commandes', 'Retours', 'Satisfaction'],
    datasets: [
      {
        label: 'Performance',
        data: [85, 65, 75, 80, 90, 70],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
      }
    ]
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: { 
        grid: { 
          display: false 
        } 
      },
      y: { 
        grid: { 
          color: 'rgba(0, 0, 0, 0.1)' 
        },
        // Ajustez l'échelle Y pour mieux répartir les lignes
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100
        }
      },
    },
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '75%',
  };

  const radarOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <h1 className="text-2xl font-bold">Ventes Produits boutique</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ventes par Mode de Paiement */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Ventes par Mode de Paiement</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">7.852.000</span>
                <span className="text-sm text-green-500 flex items-center">
                  <ArrowUp className="w-4 h-4" />
                  2.1% vs last month
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Short by : Month</option>
            </select>
          </div>
          <div className="h-[200px]">
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Sales from 1-12 Dec, 2020
          </div>
        </div>

        {/* Ventes Mensuelles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Ventes Mensuelles</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">2,568</span>
                <span className="text-sm text-red-500 flex items-center">
                  <ArrowDown className="w-4 h-4" />
                  2.1% vs last month
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Short by : Month</option>
            </select>
          </div>
          <div className="h-[200px]">
            <Line data={lineData} options={lineOptions} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Sales from 1-30 Dec, 2020
          </div>
        </div>

        {/* Ventes par Catégorie */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
          <div>
              <h2 className="text-lg font-semibold">Ventes par Catégorie</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">1890</span>
                <span className="text-sm text-green-500 flex items-center">
                  <ArrowUp className="w-4 h-4" />
                  5.7% vs hier
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Short by : Month</option>
            </select>
          </div>
          <div className="h-[200px] relative">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-sm font-medium">Afternoon</div>
              <div className="text-xs text-gray-500">1pm - 4pm</div>
              <div className="font-bold">1,890 ventes</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            From 1-30 Dec, 2020
          </div>
        </div>

        {/* Nouveau graphique Radar - Performance Générale */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
          <div>
              <h2 className="text-lg font-semibold">Performance Générale</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">75%</span>
                <span className="text-sm text-red-500 flex items-center">
                  <ArrowDown className="w-4 h-4" />
                  2.3% vs hier
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Short by : Month</option>
            </select>
          </div>
          <div className="h-[200px]">
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Performance metrics December 2020
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenteProduitRepportPage;