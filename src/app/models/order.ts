export class Order{
    public constructor(
        public city?: string,
        public mealType?: string,
        public numOfMeals?: number,
        public side?: string,
        public drink?: string,
        public comments?: string,
        public price?: number

    ){}
}