"use client";

import DonationForm from "./DonationForm";

interface DonationCardsProps {
    pageType?: "donation" | "zakat";
}

export default function DonationCards({
    pageType = "donation",
}: DonationCardsProps) {
    return <DonationForm pageType={pageType} />;
}
