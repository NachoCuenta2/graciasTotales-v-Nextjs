"use client"
import { authStore } from '@/store/auth/auth-store';
import { uiAddProductModalStore } from '@/store/ui/modal/add-product-modal'
import { IoAddCircleOutline } from 'react-icons/io5'

export const AddProductButton = () => {
    const { setIsActiveAddProductModal } = uiAddProductModalStore();
    const { mode } = authStore()
    return (
        <div className={`${mode === 'Admin' ? 'fixed' : 'hidden'} right-[10%] bottom-[10%] cursor-pointer`} onClick={() => setIsActiveAddProductModal(true)}>
            <IoAddCircleOutline size={50} className='cursor-pointer text-blue-500' />
        </div>
    )
}
