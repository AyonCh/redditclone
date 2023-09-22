export default async function Subreddits({
  params,
}: {
  params: { name: string };
}) {
  const res = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/subreddit?name=${params.name}`,
      {
        cache: "no-cache",
      },
    )
  ).json();

  return (
    <>
      <div className="flex justify-evenly mx-20 gap-5">
        <div className="p-5 rounded-lg w-full">
          <h1 className="text-2xl font-bold">r/{params.name}</h1>
        </div>
        <div className="sticky top-0 bg-accent p-5 rounded-lg">
          <div className="flex justify-between gap-10">
            <h2 className="text-xl font-bold">r/{params.name}</h2>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}