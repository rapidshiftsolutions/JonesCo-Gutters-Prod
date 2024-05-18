import Link from 'next/link';


export default function Example() {
    return (
        <div className="relative isolate bg-white px-6 py-10 sm:py-32 lg:px-8">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-JonesCo-Blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="50%"
                        y={-64}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-JonesCo-Blue-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-JonesCo-Blue-900">Let’s talk about your project</h2>
                <p className="mt-2 text-lg leading-8 text-JonesCo-Blue-600">
                    We help companies and individuals solve their gutter problems.
                </p>
                <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form name="contact" netlify>
                        <p>
                            <label>Name <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Email <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                    <div className="lg:mt-6 lg:w-80 lg:flex-none">
                        <img className="h-12 w-auto" src="/JC/JonesCo.webp" alt="" />
                        <figure className="mt-10">
                            <blockquote className="text-lg font-semibold leading-8 text-JonesCo-Blue-900">
                                <p>
                                    “Our mission is to make sure the job is done right, the first time, every time.
                                    If you aren&apos;t happy, we&apos;ll make it right.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex gap-x-6">
                                <img
                                    src="/Stock/john.webp"
                                    alt=""
                                    className="h-12 w-12 flex-none rounded-full bg-JonesCo-Blue-50"
                                />
                                <div>
                                    <div className="text-base font-semibold text-JonesCo-Blue-900">John Jones</div>
                                    <div className="text-sm leading-6 text-JonesCo-Blue-600">CEO of JonesCo</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
