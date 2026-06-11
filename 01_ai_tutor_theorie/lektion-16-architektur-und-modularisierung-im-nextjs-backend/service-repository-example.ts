//root/lektion-16-architektur-und-modularisierung-im-nextjs-backend/service-repository-example.ts
// @ts-nocheck

type CreateOrderInput = {
  userId: string;
  productIds: string[];
};

type Order = {
  id: string;
  userId: string;
  productIds: string[];
};

class OrderRepository {
  async create(input: CreateOrderInput): Promise<Order> {
    // In echt: DB Insert
    return {id: "ord_1", userId: input.userId, productIds: input.productIds};
  }
}

export class OrderService {
  constructor(private readonly repo: OrderRepository) {}

  async createOrder(input: CreateOrderInput) {
    if (input.productIds.length === 0) {
      throw new Error("Mindestens ein Produkt ist erforderlich.");
    }

    return this.repo.create(input);
  }
}
