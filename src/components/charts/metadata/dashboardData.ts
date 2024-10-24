import type { DashboardConfig } from '@components/types/dashboard/dashboard';

export const dashboardData: { venteFuel: DashboardConfig } = {
  venteFuel: {
    title: "Ventes Produits boutique",
    charts: [
      {
        type: "bar",
        title: "Ventes par Mode de Paiement",
        metric: {
          value: "7.852.000",
          trend: {
            value: 2.1,
            isPositive: true,
            text: "vs last month"
          }
        },
        chartData: {
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
        },
        footer: "Sales from 1-12 Dec, 2020",
      },
      {
        type: "line",
        title: "Ventes Mensuelles",
        metric: {
          value: "2,568",
          trend: {
            value: 2.1,
            isPositive: false,
            text: "vs last month"
          }
        },
        chartData: {
          labels: ['01', '02', '03', '04', '05', '06', '07'],
          datasets: [
            {
              label: 'Cette semaine',
              data: [200, 250, 180, 220, 300, 270, 310],
              borderColor: 'rgb(99, 102, 241)',
              tension: 0.4,
              borderWidth: 2,
              pointRadius: 0,
              fill: false
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
        },
        footer: "Sales from 1-30 Dec, 2020"
      },
      {
        type: "doughnut",
        title: "Ventes par Catégorie",
        metric: {
          value: "1890",
          trend: {
            value: 5.7,
            isPositive: true,
            text: "vs hier"
          }
        },
        chartData: {
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
        },
        footer: "From 1-30 Dec, 2020"
      },
      {
        type: "radar",
        title: "Performance Générale",
        metric: {
          value: "75%",
          trend: {
            value: 2.3,
            isPositive: false,
            text: "vs hier"
          }
        },
        chartData: {
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
        },
        footer: "Performance metrics December 2020"
      }
    ]
  }
};