export type Address = {
    id: string;
    userId: string;
    street: string | null;
    city: string;
    postalCode: string | null;
    country: string;
    createdAt: Date;
    updatedAt: Date;
};