"use client"

import { Experience as ExperienceType } from "@/types/experience";
import React, { useEffect, useState } from "react";


export const Experience = () => {

    
    const [jsonData, setJsonData] = useState<ExperienceType[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const fetchJsonData = async () => {
       

        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`/api/json?type=experience`)

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

    return jsonData.map(job => (
        <li key={job.company} className="mb-12 font-inter">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                    className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={`${job.startDate}-${job.endDate}`}
                >
                    {job.startDate} — {job.endDate}
                </header>

                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium font-inter leading-snug text-slate-200">
                        <div>
                            <a
                                className="inline-flex items-baseline font-medium font-inter leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={job?.link}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${job.position} (opens in a new tab)`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>
                                    {job.position} ·{" "}
                                    <span className="inline-block">
                                        {job.company}
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

                    <p className="my-2 text-sm leading-normal">{job.description}</p>

                    <ul className="list-disc list-inside">
                        {job.highlights.map((highlight, index) => (
                            <li key={index} className="text-slate-400 text-sm mb-2">
                                {highlight}
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {job.techStack.map((tech, index) => (
                            <li key={index} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {tech}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    ));
};

export default Experience;
