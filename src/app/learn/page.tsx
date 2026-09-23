import Link from "next/link";

export default function LearnPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold">Learn</h1>

        <p className="mt-4 max-w-2xl text-gray-600">
            Beginner-friendly tutorials that teach you by building real things.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
            href="/learn/nextjs"
            className="rounded-xl border p-6 transition hover:shadow-md"
            >
            <h2 className="text-xl font-semibold">Next.js</h2>

            <p className="mt-2 text-sm text-gray-600">
                Learn how to build modern web applications with Next.js.
            </p>
            </Link>

            <Link
            href="/learn/git"
            className="rounded-xl border p-6 transition hover:shadow-md"
            >
            <h2 className="text-xl font-semibold">Git</h2>

            <p className="mt-2 text-sm text-gray-600">
                Learn the fundamentals of version control.
            </p>
            </Link>

            <Link
            href="/learn/docker"
            className="rounded-xl border p-6 transition hover:shadow-md"
            >
            <h2 className="text-xl font-semibold">Docker</h2>

            <p className="mt-2 text-sm text-gray-600">
                Learn how to package applications into containers.
            </p>
            </Link>

            <Link
            href="/learn/javascript"
            className="rounded-xl border p-6 transition hover:shadow-md"
            >
            <h2 className="text-xl font-semibold">JavaScript</h2>

            <p className="mt-2 text-sm text-gray-600">
                Welcome to the JavaScript tutorial! This tutorial is designed for beginners who want to learn the fundamentals of JavaScript programming. Throughout this tutorial, you will gain a solid understanding of JavaScript concepts and how to apply them in real-world scenarios.
            </p>
            </Link>
        </div>
        </main>
    );
}