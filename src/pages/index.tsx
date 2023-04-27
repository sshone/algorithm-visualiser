import SortingAlgorithms from '../components/SortingAlgorithms'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <SortingAlgorithms />
      </div>
    </main>
  )
}
