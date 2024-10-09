import { FormConfig } from '@/components/types/form/formTypes';

export const formConfigs: Record<'supply' | 'purchaseOrder', FormConfig> = {
  supply: {
    title: "Nouvel approvisionnement",
    cancelRoute: "/approvisionnement",
    buttons: [
      {
        text: "Enregistrer",
        icon: {
          id: "download-file",
          paths: [
            {
              id: "Vector",
              d: "M17.8571 17.8572C17.8571 18.2361 17.7065 18.5995 17.4387 18.8674C17.1708 19.1352 16.8074 19.2858 16.4285 19.2858H3.57139C3.19251 19.2858 2.82915 19.1352 2.56124 18.8674C2.29334 18.5995 2.14282 18.2361 2.14282 17.8572V2.14293C2.14282 1.76404 2.29334 1.40068 2.56124 1.13277C2.82915 0.864865 3.19251 0.714355 3.57139 0.714355H12.8571L17.8571 5.71436V17.8572Z",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "vector 377",
              d: "M12.8571 11.4287L9.99997 14.2859L7.14282 11.4287",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "vector 378",
              d: "M10 14.2859V6.42871",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ]
        }
      },
      {
        text: "Annuler",
        icon: {
          id: "mail-send-reply-all",
          paths: [
            {
              id: "Vector",
              d: "M10.7144 3.57153L6.42871 7.85725L10.7144 12.143",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "Vector_2",
              d: "M19.2859 16.4286V13.5715C19.2859 12.0559 18.6839 10.6025 17.6121 9.53085C16.5406 8.45922 15.0871 7.85718 13.5716 7.85718H6.42871",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "Vector_3",
              d: "M5.00007 3.57153L0.714355 7.85725L5.00007 12.143",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ]
        }
      }
    ],
    formInputs: [
      {
        label: "Commande N",
        type: "text"
      },
      {
        label: "Bon de Livraison",
        type: "text"
      },
      {
        label: "Quantité livrée",
        type: "number"
      },
      {
        label: "Unité de mesure",
        type: "text"
      },
      {
        label: "Capacité récipient",
        type: "number"
      },
      {
        label: "Valorisation",
        type: "text"
      }
    ],
    showFooter: true
  },
  purchaseOrder: {
    title: "Nouveau bon de commande",
    cancelRoute: "/approvisionnement/bons-de-commande",
    buttons: [
      {
        text: "Enregistrer",
        icon: {
          id: "download-file",
          paths: [
            {
              id: "Vector",
              d: "M17.8571 17.8572C17.8571 18.2361 17.7065 18.5995 17.4387 18.8674C17.1708 19.1352 16.8074 19.2858 16.4285 19.2858H3.57139C3.19251 19.2858 2.82915 19.1352 2.56124 18.8674C2.29334 18.5995 2.14282 18.2361 2.14282 17.8572V2.14293C2.14282 1.76404 2.29334 1.40068 2.56124 1.13277C2.82915 0.864865 3.19251 0.714355 3.57139 0.714355H12.8571L17.8571 5.71436V17.8572Z",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "vector 377",
              d: "M12.8571 11.4287L9.99997 14.2859L7.14282 11.4287",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "vector 378",
              d: "M10 14.2859V6.42871",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ]
        }
      },
      {
        text: "Annuler",
        icon: {
          id: "mail-send-reply-all",
          paths: [
            {
              id: "Vector",
              d: "M10.7144 3.57153L6.42871 7.85725L10.7144 12.143",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "Vector_2",
              d: "M19.2859 16.4286V13.5715C19.2859 12.0559 18.6839 10.6025 17.6121 9.53085C16.5406 8.45922 15.0871 7.85718 13.5716 7.85718H6.42871",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            {
              id: "Vector_3",
              d: "M5.00007 3.57153L0.714355 7.85725L5.00007 12.143",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ]
        }
      }
    ],
    formInputs: [
      {
        label: "Reference",
        type: "text"
      }
    ],
    showFooter: true
  }
};