import variables from "sass/variables.module.sass"

export default function Playground() {
    return (
        <>
            <div
                id="container"
                className="h-screen flex justify-center items-center text-[5rem] font-[600]"
                style={{
                    backgroundColor: variables.bgColorGreen
                }}>
                olamundo
            </div>
        </>
    )
}