// Pattern: Repository + Service
// Ziel: Prisma-Zugriff und fachliche Entscheidung trennen.

type RestaurantRecord = {
  id: string;
  slug: string;
  name: string;
};

type RestaurantRepository = {
  findBySlug(slug: string): Promise<RestaurantRecord | null>;
};

export function createRestaurantService(repository: RestaurantRepository) {
  return {
    async getPublicRestaurant(slug: string) {
      const restaurant = await repository.findBySlug(slug);

      if (!restaurant) {
        return { ok: false as const, reason: "not_found" as const };
      }

      return {
        ok: true as const,
        value: {
          slug: restaurant.slug,
          name: restaurant.name,
        },
      };
    },
  };
}

// In einer echten App waere das Prisma:
// export const restaurantRepository = {
//   findBySlug: (slug: string) => prisma.restaurant.findUnique({ where: { slug } }),
// };
