import React from 'react'
import Delivery from "@/assets/images/ScootScoot.svg";
import Order from "@/assets/images/iphone.svg";
import Restorenet from "@/assets/images/Storefront.svg";
import { EasyToOrderCardWrapper, EasyToOrderWrapper } from './styled';
import { Heading, InfoCard } from '@/components';

export const EasyToOrder = () => {
    return (
        <EasyToOrderWrapper>
            <Heading
                heading="Easy To Order"
                subheading="How It Works"
                textAlign="center"
                desc='Ordering food has never been easier. Just a few simple steps and your meal is on its way!'
            />
            <EasyToOrderCardWrapper>
                <InfoCard
                    imageSrc={Order}
                    title="Browse & Order"
                    description="Select from our wide range of delicious vegetarian dishes."
                />
                <InfoCard
                    imageSrc={Restorenet}
                    title="Freshly Prepared"
                    description="Our chefs cook your meal with love and care."
                />
                <InfoCard
                    imageSrc={Delivery}
                    title="Delivered to You"
                    description="Enjoy quick, contactless home delivery at your doorstep."
                />
            </EasyToOrderCardWrapper>
        </EasyToOrderWrapper>
    )
}
