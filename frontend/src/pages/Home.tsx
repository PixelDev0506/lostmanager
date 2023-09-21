import useDocumentTitle from '@hooks/useDocumentTitle'
import imgMaxCapital from '@assets/img/pages/home/max_capital.webp'
import ParallaxEffect from '@components/ParallaxEffect'
import Button from '@components/Button'
import useDashboardNavigate from '@hooks/useDashboardNavigate'
import Spacer from '@components/Spacer'
import Content from '@components/Content'

export default function Home() {
  const heading = useDocumentTitle('Lost Clans')
  const dashboardRedirect = useDashboardNavigate()

  return (
    <>
      <header className="fullscreen">
        <ParallaxEffect title="LOST CLANS" strength={300} bgImage={imgMaxCapital} button={<Button onClick={dashboardRedirect}>Zur Webapp</Button>}>
          Willkommen auf der Website der Lost Family. Hier findest du alle Informationen rund um unsere Clans.
        </ParallaxEffect>
        <ParallaxEffect title="Aktiver Clasher?" button={<Button to="/apply">Jetzt bewerben</Button>} strength={300} bgImage={imgMaxCapital}>
          Wir sind ständig auf der Suche nach neuen Mitgliedern. Du bist aktiv und hast Spaß am Spiel? Dann bewirb dich jetzt!
        </ParallaxEffect>
      </header>
      <Spacer size="large" />
      <Content>
        <main>
          {heading}
          <section>
            <article>
              <h2>Clandorf Weltrekord</h2>
              <p>
                Wir sind die Lost Family, eine Community von leidenschaftlichen Clashern. Unsere Clans wurden vom Youtuber und Streamer Trymacs ins
                Leben gerufen. Durch den Support der Community haben wir einen Weltrekord aufgestellt: die Clans Lost F2P, Lost F2P 2, Lost 3 und Lost
                4 haben weltweit Geschichte geschrieben, indem sie die ersten waren, die ein vollständig gemaxtes Stadtdorf hatten. Das bedeutet, dass
                alle Truppen, Verteidigungen und Mauern auf dem höchsten Level sind. Diesen Erfolg hätten wir niemals ohne die Community erreicht -
                ein großes Dankeschön an jeden einzelnen, der uns dabei geholfen hat 💙
              </p>
            </article>
            <article>
              <h2>Werde ein Teil von uns</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis modi, similique voluptate deserunt animi dolores laudantium
                molestias praesentium. Accusamus doloribus exercitationem voluptate eligendi, cupiditate illo blanditiis aperiam, deserunt officiis,
                quas quos numquam corrupti vero totam modi at odit architecto sit aliquam. Veritatis, excepturi corporis esse mollitia quos iure
                eveniet doloremque vel dolore tempore facere inventore tenetur atque. Quam magnam ipsam quia exercitationem sapiente deleniti eius
                maiores laborum nemo sed iusto minus laudantium praesentium, illum quod delectus, doloribus iste odit ipsa libero ad. Expedita aut
                laudantium natus aliquid repellendus deleniti corporis fuga! Necessitatibus, fugiat cupiditate mollitia sit asperiores perferendis
                expedita.
              </p>
            </article>
          </section>
        </main>
      </Content>
    </>
  )
}
