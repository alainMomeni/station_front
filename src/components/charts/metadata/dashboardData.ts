export const dashboardData = {
    venteFuel: {
      title: "Ventes Fuels",
      charts: [
        {
          type: "bar" as const,  // Important: utilisez "as const" pour le typage littéral
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
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            datasets: [
              {
                label: "OM",
                data: [750, 650, 700, 600, 800, 850, 750, 650, 700, 600, 800, 850],
                backgroundColor: "rgb(99, 102, 241)",
                barThickness: 12
              },
              {
                label: "Cash",
                data: [450, 500, 480, 530, 420, 400, 440, 460, 380, 450, 400, 350],
                backgroundColor: "rgb(229, 231, 235)",
                barThickness: 12
              }
            ]
          },
          footer: "Sales from 1-12 Dec, 2023"
        }
      ]
    }
  } as const;