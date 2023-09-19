import axios from "axios"
import { useState } from "react"

export default function Home() {
    const [prompt, setPrompt] = useState('')

    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()

        if (prompt.trim() === '') {
            return
        }

        axios.post('http://localhost:5000/generate', {
            prompt: prompt
        }).then((response) => {
            console.log(response.data)
        })
    }

    return (
        <div className="flex flex-col h-screen w-full pt-5">
            <h1 className="text-4xl font-semibold text-center text-gray-600 ml-auto mr-auto mb-10">
                LLM - MinC
            </h1>
            
            <div className="items-center justify-center">
                <form className="flex mt-4 w-full mx-auto max-w-3xl">
                    <div className="w-full border border-gray-900/50 text-white rounded-xl shadow-xs bg-gray-700">
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
                            className="bg-blue-600 rounded-r-full px-4 py-2 hover:bg-blue-500 focus:outline-none"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
