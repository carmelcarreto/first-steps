import type { Metadata } from "next";

export const metadata: Metadata= {
    title: 'Seo Title',
    description: 'Seo Description',
    keywords: ['About Page','Kathy', 'information','...'],
};

export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}
