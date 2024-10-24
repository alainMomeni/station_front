import React from 'react';
import FormComponent from '@/components/form/formComponent';
import { formConfigs } from '@/components/form/metadata/form';

const ProductFormPage: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <main className="flex-1 p-8 overflow-y-auto">
        <FormComponent config={formConfigs.produit} />
      </main>
    </div>
  );
};

export default ProductFormPage;