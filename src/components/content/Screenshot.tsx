import Image from "next/image";

type ScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Screenshot({
  src,
  alt,
  caption,
}: ScreenshotProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full"
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