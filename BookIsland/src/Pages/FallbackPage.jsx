import { Link } from "react-router-dom"

export const FallbackPage = () => {
  return (
    <div className="h-screen bg-primary flex justify-center items-center flex-col p-4">
     {/* <div className="flex column flex-col justify-center align-middle h-1/2 bg-primary"> */}
      <h2 className="text-5xl">404...</h2>
      <p className="text-2xl pb-[20px] text-center">The page you searched for does not exist</p>
      <Link to="/home" className="color-black font-sans underline">Click here to get to the front page</Link>
    </div>
  )
}
