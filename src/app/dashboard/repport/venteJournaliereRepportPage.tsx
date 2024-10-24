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

const VenteJournaliereRepportPage = () => {
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
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
      },
      {
        label: 'Semaine dernière',
        data: [180, 220, 160, 200, 280, 250, 290],
        borderColor: 'rgb(229, 231, 235)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      }
    ]
  };

  const stackedBarData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'OM',
        data: [70, 65, 80, 90, 60, 75, 80, 85, 70, 75, 85, 90],
        backgroundColor: 'rgb(99, 102, 241)',
        barThickness: 12,
      },
      {
        label: 'Cash',
        data: [60, 70, 65, 75, 55, 70, 60, 65, 75, 60, 70, 75],
        backgroundColor: 'rgb(229, 231, 235)',
        barThickness: 12,
      },
    ],
  };

  const doughnutData = {
    labels: ['Lubrifiant', 'Gaz', 'Essuie-glace'],
    datasets: [{
      data: [45, 30, 25],
      backgroundColor: [
        'rgb(99, 102, 241)',
        'rgb(147, 151, 255)',
        'rgb(224, 231, 255)'
      ],
      borderWidth: 0,
    }]
  };

  const radarData = {
    labels: ['Ventes', 'Stock', 'Clients', 'Commandes', 'Retours', 'Satisfaction'],
    datasets: [
      {
        label: 'Performance',
        data: [85, 70, 75, 80, 60, 75],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
      }
    ]
  };

  const lineOptions: ChartOptions<'line'> = {
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

  const stackedBarOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { stacked: true, grid: { color: 'rgba(0, 0, 0, 0.1)' } },
    },
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
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
      r: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } },
    },
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <h1 className="text-2xl font-bold">Ventes Journalières</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Tendances de Ventes</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">310</span>
                <span className="text-sm text-green-500 flex items-center">
                  <ArrowUp className="w-4 h-4" />
                  15.2% vs hier
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Trier par : Jour</option>
            </select>
          </div>
          <div className="h-[200px]">
            <Line data={lineData} options={lineOptions} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Ventes du 1-7 Décembre, 2023
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Ventes par Mode de Paiement</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">1.250.000</span>
                <span className="text-sm text-red-500 flex items-center">
                  <ArrowDown className="w-4 h-4" />
                  3.2% vs hier
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Trier par : Jour</option>
            </select>
          </div>
          <div className="h-[200px]">
            <Bar data={stackedBarData} options={stackedBarOptions} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Ventes du 1-12 Décembre, 2023
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Ventes par Catégorie</h2>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">890</span>
                <span className="text-sm text-green-500 flex items-center">
                  <ArrowUp className="w-4 h-4" />
                  5.7% vs hier
                </span>
              </div>
            </div>
            <select className="border rounded-md p-2">
              <option>Trier par : Jour</option>
            </select>
          </div>
          <div className="h-[200px] relative">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-sm font-medium">Matin</div>
              <div className="text-xs text-gray-500">8h - 12h</div>
              <div className="font-bold">890 ventes</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Du 1-7 Décembre, 2023
          </div>
        </div>

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
              <option>Trier par : Jour</option>
            </select>
          </div>
          <div className="h-[200px]">
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Métriques de performance Décembre 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenteJournaliereRepportPage;