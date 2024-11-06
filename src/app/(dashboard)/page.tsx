import { ProductsGrid } from '@/component/products/products-grid';
import { VerificationComponent } from '@/component/verificationComponent';
import { initialData } from '@/seed/seed';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'hola Title',
    description: 'hola Description'
};

const products = initialData.products;
export default function hola() {

    return (
        <>

            <div className="mt-[80px]"
            // style={{ backgroundColor: '#C19A6B' }}
            >
                <ProductsGrid products={products} />

            </div>

        </>
    );
};