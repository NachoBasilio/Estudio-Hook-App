import { useEffect } from "react"

export default function Message() {
    useEffect(() => {
        const onMouseMove = function (e){
            console.log(e)
        }

        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        };
    }, []);
  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
