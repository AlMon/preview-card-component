import Head from "next/head"
import CarInfo from "../components/CarInfo"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Preview Card</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen bg-[#f2f2f2] overflow-hidden text-[15px] flex flex-wrap items-center justify-center">
        <div className="mx-10 grid lg:grid-cols-3 grid-cols-1 max-w-[950px] rounded-xl overflow-hidden">
          <CarInfo
            type="Sedans"
            primaryColor="#e38826"
            cardIcon={"/icon-sedans.svg"}
          />
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            aperiam exercitationem eum nulla laudantium dicta, rerum, libero
            minus nobis perspiciatis veritatis ut natus debitis aliquam nemo
            quam fuga velit sed.
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            aperiam exercitationem eum nulla laudantium dicta, rerum, libero
            minus nobis perspiciatis veritatis ut natus debitis aliquam nemo
            quam fuga velit sed.
          </div>
        </div>
      </main>
    </div>
  )
}
