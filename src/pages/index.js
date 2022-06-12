import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Start" />
      <Layout>
        <BannerModule
          title="Witaj na wejdzonline.pl"
          subTitle="Strony na wordpress, które sprzedają. Trener personalny? Dietetyk? Działasz w gastronomii? Mały biznes i większa firma. Tworzenie www, prowadzenie i administracja Twoją stroną - wejdz online!"
        />
        <BasicTextModule
          title="WEJDŹ ONLINE I TU ZOSTAŃ"
          content="Skoro tu trafiłeś to znaczy, że zależy Ci na własnym biznesie. Czasami jednak trzeba się mocno napocić, żeby przyciągnąć klientów lub ich utrzymać. Daj się poznać w sieci, możesz tylko zyskać!"
          link="/products"
          linkText="Zobacz usługi"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Usługi"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="Dla kogo?"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
