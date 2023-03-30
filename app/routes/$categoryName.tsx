import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import { prisma } from "~/db.server";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export async function loader({ request, params }: LoaderArgs) {
  const category = params.categoryName;

  const desserts = await prisma.dessert.findMany({
    where: {
      category: {
        name: category,
      },
    },
  });

  return { desserts };
}

export default function Index() {
  const { desserts } = useLoaderData<typeof loader>();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {desserts.map((dessert) => (
              <p>{dessert.name}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
