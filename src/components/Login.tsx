import { clientLogin } from "../lib/auth/client-login";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500/90">
      <div className="container flex flex-1 flex-col items-center justify-center px- md:px-6 space-y-4 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">The Best Products, Reviewed By You</h1>
          <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover new products and share your experiences. Join our community of reviewers.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
        <button className="my-16 w-80 py-3 text-lg font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700" onClick={clientLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
