export default function Card({
  username = "Benji",
  post = "Not assigned yet",
  img,
}) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full"
          src={img}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              eaque temporibus iusto enim quas odio vitae tempora, ipsam,
              inventore beatae maiores repellat nam possimus reiciendis aliquid
              cumque nobis. Maiores, cum.
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
