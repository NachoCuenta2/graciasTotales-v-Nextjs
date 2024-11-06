import type { Metadata } from 'next'
import { UnLoggedButton } from '../../../ui/components/auth/login/unLoggedButton';
import { VerificationComponent } from '@/component/verificationComponent';


export const metadata: Metadata = {
    title: 'Home Title',
    description: 'Home Description'
};

export default function Home() {
    return (
        <>


            <span className=''>Home</span>

            <UnLoggedButton />

        </>
    );
};