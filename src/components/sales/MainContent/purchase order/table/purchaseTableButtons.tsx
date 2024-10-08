import { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttons from "@/components/sales/MainContent/purchase order/table/metadata/buttons.json";
import { PathAttributes } from "@/components/types/sales/supply/PathAttributes";
import DeleteModalPurchaseOrderTable from "./deleteModalPurchaseOrderTable";

const PurchaseTableButtons: React.FC = () => {
  const navigate = useNavigate();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleButtonClick = (buttonText: string) => {
    switch (buttonText) {
      case "Ajouter":
        navigate("/approvisionnement/bons-de-commande/form");
        break;
      case "Supprimer":
        setIsDeleteDialogOpen(true);
        break;
        case "Modifier":
          navigate("/approvisionnement/bons-de-commande/form");
          break;
      default:
        break;
    }
  };

  const handleDeleteConfirm = () => {
    setIsDeleteDialogOpen(false);
    // Ajoutez ici la logique de suppression
    console.log("Suppression confirmée");
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-2 mb-6 overflow-x-auto">
        <div className="flex space-x-4 min-w-max flex-wrap">
          {buttons.buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button.text)}
              className={`${
                index === 0 ? "md:pl-4 pl-2" : ""
              } py-2 flex items-center hover:text-customIndigoHover transition duration-300 whitespace-nowrap`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mr-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id={button.icon.id}>
                  {button.icon.paths.map((path: PathAttributes, pathIndex) => (
                    <path
                      key={pathIndex}
                      id={path.id}
                      d={path.d}
                      fillRule={
                        path.fillRule === "nonzero" || path.fillRule === "evenodd"
                          ? path.fillRule
                          : undefined
                      }
                      clipRule={path.clipRule}
                      fill={path.fill}
                      stroke={path.stroke}
                      strokeLinecap={
                        path.strokeLinecap === "round" ||
                        path.strokeLinecap === "inherit" ||
                        path.strokeLinecap === "butt" ||
                        path.strokeLinecap === "square"
                          ? path.strokeLinecap
                          : undefined
                      }
                      strokeLinejoin={
                        path.strokeLinejoin === "round" ||
                        path.strokeLinejoin === "inherit" ||
                        path.strokeLinejoin === "miter" ||
                        path.strokeLinejoin === "bevel"
                          ? path.strokeLinejoin
                          : undefined
                      }
                    />
                  ))}
                </g>
              </svg>
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <DeleteModalPurchaseOrderTable
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

export default PurchaseTableButtons;