import { QueryBox } from '@/component/query/queryBox';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'template Title',
    description: 'template Description'
};

export default function template() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <QueryBox />
        </div>
    );
};