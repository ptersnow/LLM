'use client'

import axios from "axios"
import { useState } from "react"

type Chat = {
    prompt: string,
    response: string
}

export default function Home() {
    const [prompt, setPrompt] = useState('')
    const [chats, setChats] = useState<Chat[]>([])

    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()

        if (prompt.trim() === '') {
            return
        }

        /*axios.post('http://localhost:5000/generate', {
            prompt: prompt
        }).then((response) => {
            console.log(response.data)
            setPrompt('')

            setChats([...chats, {
                'prompt': prompt,
                'response': response.data
                }
            ])
        })*/

        setPrompt('')

        setChats([...chats, {
            'prompt': prompt,
            'response': 'response'
            }
        ])
        console.log(chats)
    }

    return (
        <div className="flex flex-col h-screen w-full pt-5">
            <h1 className="text-4xl font-semibold text-center text-gray-600 ml-auto mr-auto mb-5">
                LLM - MinC
            </h1>
            
            
            <div className="h-4/5 overflow-auto">
                {chats.map((chat, index) => (
                    <div key={index} className="w-full mt-4 mx-auto max-w-3xl">
                        <div className="flex flex-col p-4 gap-2">
                            <div className="border border-gray-900/60 rounded-xl shadow-xs py-2 pr-12 pl-4">
                                <p className="text-lg text-gray-400">{chat.prompt}</p>
                            </div>
                            <div className="bg-gray-700 rounded-xl py-4 pr-12 pl-4">
                                <p className="text-lg text-gray-400">{chat.response}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full my-4 mx-auto max-w-3xl border border-gray-900/50 text-white rounded-xl shadow-xs bg-gray-700">
                <form className="flex flex-row">
                    <input
                        id="prompt-input"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        tabIndex={0}
                        placeholder="Escreva sua requisição"
                        className="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 py-4 pr-12 pl-4"
                        spellCheck={false}
                        data-gramm={false}
                    />
                    <button
                        onClick={handleClick}
                        className="bg-blue-600 rounded-r-xl px-4 py-2 hover:bg-blue-500 focus:outline-none"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
