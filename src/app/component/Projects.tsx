"use client"

import { IProject } from "@/types/project";
import React, { useEffect, useState } from "react";


export default function Projects() {


    const [jsonData, setJsonData] = useState<IProject[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const fetchJsonData = async () => {


        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`/api/json?type=projects`)

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "Failed to fetch JSON data")
            }

            const data = await response.json()
     
            setJsonData(data)
        } catch (err) {

            setError(err instanceof Error ? err.message : "An unknown error occurred")
            setJsonData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        fetchJsonData()
    }, [])


    return (
        <section
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Projects"
            id="projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <ol className={"group/list"}>
                {jsonData.map((project, index) => (
       
                    <li key={index} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                <img
                                    alt={project.thumbnail}
                                    loading="lazy"
                                    width="200"
                                    height="48"
                                    decoding="async"
                                    data-nimg="1"
                                    className="aspect-video object-contain rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                    style={{ color: "transparent" }}
                                    src={project.thumbnail}
                                />
                            </header>

                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a
                                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label={`${project.title} (opens in a new tab)`}
                                        >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                            <span>
                                                {project.title}
                                                <span className="inline-block">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>

                                <p className="my-2 text-sm leading-normal">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
                <div className="mt-12">
                    <a
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                        aria-label="View Full Project Archive"
                        href="/archive"
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                View Full Project{" "}
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                    Archive
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                    </a>
                </div>
            </ol>
        </section>
    );
}
