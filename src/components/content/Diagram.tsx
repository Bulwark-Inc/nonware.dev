import Image from "next/image";

type DiagramProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Diagram({
  src,
  alt,
  caption,
}: DiagramProps) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="mx-auto h-auto"
        />
      </div>

      {caption && (
        <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}