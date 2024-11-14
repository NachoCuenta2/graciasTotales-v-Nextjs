import { QueryBox } from '@/component/query/queryBox';
import { VerificationModeComponent } from '@/component/verificationModeComponent';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'template Title',
    description: 'template Description'
};

export default async function template() {

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <VerificationModeComponent showAlert={true}>

                <QueryBox />
            </VerificationModeComponent>
        </div>
    );
};