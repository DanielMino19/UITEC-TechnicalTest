export interface Product {
        id: number;
        name: string;
        value: number;
        expire_date?: string; 
        amount_stock: number;
        imgs?: string[]; 
        perishables: boolean;
        categorie_id: number;
}
