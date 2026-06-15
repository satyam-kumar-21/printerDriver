import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorsPick() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[140px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]" />

                
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                        Editor's Pick
                    </span>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        This Week's Featured Read
                    </h2>
                </div>

                {/* Featured Card */}
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white">
                    <div className="grid lg:grid-cols-2">
                        {/* Left Side */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-8 lg:p-12">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

                            <div className="relative flex h-full flex-col justify-between">
                                {/* Badge */}
                                <div className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                                    <span className="text-sm font-medium text-white">
                                        Driver Fundamentals
                                    </span>
                                </div>

                                {/* Main Content */}
                                <div className="py-12">
                                    <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                                        Understanding Drivers
                                    </h3>

                                    <p className="mt-4 max-w-md text-base leading-7 text-blue-50 sm:text-lg">
                                        Learn the simple idea behind every driver.
                                        Software speaks one language, hardware speaks another,
                                        and drivers connect the two.
                                    </p>

                                    {/* Flow */}
                                    <div className="mt-10 flex items-center gap-4">
                                        <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-md">
                                            <p className="font-semibold text-white">
                                                Software
                                            </p>
                                        </div>

                                        <div className="h-[2px] flex-1 bg-white/30" />

                                        <div className="rounded-2xl bg-white px-5 py-4">
                                            <p className="font-bold text-blue-600">
                                                Driver
                                            </p>
                                        </div>

                                        <div className="h-[2px] flex-1 bg-white/30" />

                                        <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-md">
                                            <p className="font-semibold text-white">
                                                Hardware
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Card */}
                                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                                    <p className="text-sm text-blue-100">
                                        Featured Beginner Guide
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-white">
                                        5 Minute Read
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center p-8 sm:p-10 lg:p-14">
                            <div>
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                        Beginner
                                    </span>

                                    <span className="text-sm text-slate-500">
                                        5 min read · Featured
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl lg:text-3xl">
                                    What Is a Driver, Really? A Five-Minute Friendly Explainer
                                </h3>

                                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                                    Forget the jargon — a driver is just a translator between
                                    your computer and the hardware connected to it. This piece
                                    starts with the core idea and works outward, until you have a
                                    working mental model that holds up across every category
                                    covered on this site.
                                </p>

                                <Link
                                    href="/"
                                    className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    Read the Full Article

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}