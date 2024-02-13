import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Price page of my services',
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
