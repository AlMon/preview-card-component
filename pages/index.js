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
        <div className="mx-10 grid lg:grid-cols-3 grid-cols-1 max-w-[920px] rounded-lg overflow-hidden">
          <CarInfo
            type="Sedans"
            primaryColor="#e38826"
            icon={"/icon-sedans.svg"}
            description={
              "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            }
          />
          <CarInfo
            type="SUVs"
            primaryColor="#006970"
            icon={"/icon-suvs.svg"}
            description={
              "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            }
          />
          <CarInfo
            type="Luxury"
            primaryColor="#004241"
            icon={"/icon-luxury.svg"}
            description={
              "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            }
          />
        </div>
      </main>
    </div>
  )
}
