import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "AutoVault",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2025-05-10T14:30:00.000Z",
    id: "andromeda",
    collections: [
        {
            auction: "andr1anv0l6ymv97qjgj3drzyapd2vp46l4m4vj8ykhze4sdtse99erqs4m6227",
            cw721: "andr1efjzkuf8pjwqzdmty0nvp3qf4j8nhzyyn7rxn7hddwn9x7ylnazsl8xk9w",
            name: "AutoVault",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ClassicFerrari"
        },
        {
            auction: "andr1anv0l6ymv97qjgj3drzyapd2vp46l4m4vj8ykhze4sdtse99erqs4m6227",
            cw721: "andr1efjzkuf8pjwqzdmty0nvp3qf4j8nhzyyn7rxn7hddwn9x7ylnazsl8xk9w",
            name: "Classics",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-classics",
            featured: "ClassicFerrari"
        },
        {
            auction: "andr1anv0l6ymv97qjgj3drzyapd2vp46l4m4vj8ykhze4sdtse99erqs4m6227",
            cw721: "andr1efjzkuf8pjwqzdmty0nvp3qf4j8nhzyyn7rxn7hddwn9x7ylnazsl8xk9w",
            name: "Supercars",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-supercars",
            featured: "SupercarLambo"
        },
        {
            auction: "andr1anv0l6ymv97qjgj3drzyapd2vp46l4m4vj8ykhze4sdtse99erqs4m6227",
            cw721: "andr1efjzkuf8pjwqzdmty0nvp3qf4j8nhzyyn7rxn7hddwn9x7ylnazsl8xk9w",
            name: "Concept Cars",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-concepts",
            featured: "FutureConcept"
        }
    ],
};

export default CONFIG;