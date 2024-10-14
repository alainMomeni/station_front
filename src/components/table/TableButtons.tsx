import React from "react";
import AddIcon from "@/assets/svg/ajouter";
import EditIcon from "@/assets/svg/modifier";
import DeleteIcon from "@/assets/svg/suprimer";
import { Button } from "@components/types/table/tableTypes";

interface TableButtonsProps {
  buttons: Button[];
  handleButtonClick: (buttonText: string) => void;
}

const TableButtons: React.FC<TableButtonsProps> = ({
  buttons,
  handleButtonClick,
}) => (
  <div className="bg-white rounded-xl shadow-md p-4 pl-4 mb-6 overflow-x-auto"> {/* Ajout de `md:pl-6` pour décaler les boutons */}
    <div className="flex space-x-4 min-w-max flex-wrap pr-2">
      {buttons.map((button: Button, index: number) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.text)}
          className="flex items-center space-x-2 hover:text-customIndigoHover transition duration-300 group"
        >
          {button.text === "Ajouter" && (
            <AddIcon className="w-5 h-5 group-hover:text-customIndigoHover transition-colors duration-300" />
          )}
          {button.text === "Modifier" && (
            <EditIcon className="w-6 h-6 group-hover:text-customIndigoHover transition-colors duration-300" />
          )}
          {button.text === "Supprimer" && (
            <DeleteIcon className="w-5 h-5 group-hover:text-customIndigoHover transition-colors duration-300" />
          )}
          <span>{button.text}</span>
        </button>
      ))}
    </div>
  </div>
);

export default TableButtons;
