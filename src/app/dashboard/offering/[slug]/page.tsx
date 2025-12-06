"use client"

import { useParams } from "next/navigation"

export default function Bot() {
    const param = useParams()

    return (
        <div className="min-h-screen pl-6 flex items-center justify-center bg-white">
            <div className="p-10 rounded-3xl   w-full 
                            bg-white flex">

             <div className="flex-1">
                   <h1 className="font-extrabold text-5xl mb-6 text-neutral-900 text-center tracking-tight">
                    {param.slug}
                </h1>

                <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                    Artificial intelligence bots help bridge the space between human intent and machine execution.
                    They interpret context, learn from interactions, and refine their decision-making with every
                    conversation. These systems don’t just give answers—they adapt, evolve, and shape themselves
                    around a user’s habits and goals. A well-designed bot reduces cognitive load, speeds up tasks,
                    and transforms raw data into something meaningful and actionable.
                </p>
             </div>

                <ul className="space-y-3 text-lg flex-1">
                    <li className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                        Understands natural language and adapts to context
                    </li>
                    <li className="p-4 rounded-xl border border-neutral-200 bg-white">
                        Produces fast, structured, or creative responses
                    </li>
                    <li className="p-4 rounded-xl border border-neutral-200 bg-white">
                        Learns from user interactions to improve accuracy
                    </li>
                    <li className="p-4 rounded-xl border border-neutral-200 bg-white">
                        Automates repetitive and complex tasks efficiently
                    </li>
                    <li className="p-4 rounded-xl border border-neutral-200 bg-white">
                        Works across domains without additional setup
                    </li>
                </ul>
            </div>
        </div>
    )
}
