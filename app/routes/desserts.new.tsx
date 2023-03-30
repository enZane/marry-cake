import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";

import { getUserId } from "~/session.server";
import { prisma } from "~/db.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;

  if (!name || !description || !price) {
    return json(
      {
        errors: {
          name: !name ? "Name is required" : undefined,
          description: !description ? "Description is required" : undefined,
          price: !price ? "Price is required" : undefined,
        },
      },
      {
        status: 400,
      }
    );
  }

  const dessert = await prisma.dessert.create({
    data: {
      name,
      description,
      price: Number(price),
      category: {
        connect: {
          id: "clfuc6wj200020xgf7vk3yjfb",
        },
      },
    },
  });

  return redirect(`/Pasteles`);
}

export const meta: V2_MetaFunction = () => [{ title: "Sign Up" }];

export default function Join() {
  const [searchParams] = useSearchParams();
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                required
                autoFocus={true}
                name="name"
                type="text"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="name-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.name && (
                <div className="pt-1 text-red-700" id="name-error">
                  {actionData.errors.name}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <input
                id="description"
                required
                autoFocus={true}
                name="description"
                type="text"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="description-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.description && (
                <div className="pt-1 text-red-700" id="description-error">
                  {actionData.errors.description}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="mt-1">
              <input
                id="price"
                required
                autoFocus={true}
                name="price"
                type="text"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="price-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.price && (
                <div className="pt-1 text-red-700" id="price-error">
                  {actionData.errors.price}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Create Dessert
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
