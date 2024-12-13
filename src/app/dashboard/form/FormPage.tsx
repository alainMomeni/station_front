import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch } from '@components/statement/store/store';
import FormComponent from '@components/form/formComponent';
import { formConfigs } from '@/components/form/metadata/form';

const EntityFormPage: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const configMap: Record<string, keyof typeof formConfigs> = {
    "/produits/form": "produits", // Correction ici
    "/fiche-de-prix/form": "fiche-de-prix", // Correction ici
  };

  const formKey = configMap[location.pathname] as keyof typeof formConfigs | undefined;
  const formConfig = formKey ? formConfigs[formKey] : undefined;

  const handleSubmit = async (formData: any) => {
    const thunk = id ? updateItem : createItem;
    await dispatch(thunk(formData));
  };

  if (!formKey || !formConfig) {
    return <div>Formulaire non trouvé</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <main className="flex-1 p-8 overflow-y-auto">
        <FormComponent
          config={formConfig}
          onSubmit={handleSubmit}
          mode={id ? 'edit' : 'create'}
          initialData={id ? currentItem : undefined}
        />
      </main>
    </div>
  );
};

export default EntityFormPage;
