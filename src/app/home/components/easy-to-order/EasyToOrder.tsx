import React from 'react'
import Delivery from "@/assets/images/ScootScoot.svg";
import Order from "@/assets/images/iphone.svg";
import Restorenet from "@/assets/images/Storefront.svg";
import { EasyToOrderWrapper} from './styled';
import { InfoCard } from '@/components';

export const EasyToOrder = () => {
    return (
        <EasyToOrderWrapper>
            <InfoCard
                imageSrc={Order}
                title="Step 1"
                description="Select from our wide range of delicious vegetarian dishes."
            />
            <InfoCard
                imageSrc={Restorenet}
                title="Step 2"
                description="Customize your order and add it to your cart."
            />
            <InfoCard
                imageSrc={Delivery}
                title="Step 3"
                description="Sit back and enjoy fast home delivery at your doorstep."
            />
        </EasyToOrderWrapper>
    )
}
