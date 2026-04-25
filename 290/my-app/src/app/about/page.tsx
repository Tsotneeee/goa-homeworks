import Link from "next/link"

export default function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        page
        <Link href="/">go back</Link>
    </div>
  )
}
