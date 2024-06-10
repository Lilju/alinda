export const Musique = () => {
    return (<section id="musique">
        <div className="music-flex-container">
                <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9Cf7gwOLnPo?si=wu80TgLezNHQXvQ8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="description">
                <h2>Musique</h2>
                <p>Enregistré et publié en 2022, l'album a pour thématique les éléments naturels. Chaque titre porte le nom d'un élément en sanscrit, du feu à la glace, du métal au bois, de l'air à la terre. Les arrangements de handpan et de violoncelle sont accompagnés d'ambiances sonores correspondant à ces éléments. Il est disponible en CD et à l'écoute sur les plateformes de streaming.</p>
                </div>
                </div>
          <div className="linkcontainer">
                <a href="https://music.imusician.pro/a/pGPXgQbf?fbclid=IwAR1lJySy1zMPERbubkF8Q9rlhnNsXWWHOId3TnFMxPlUiCADak19s3cgM4c" target="_blank">Ecouter l'album sur les plateformes de streaming</a>
                <a href="https://alindamusic.bandcamp.com/album/linda" target="_blank">Ecouter l'album ou acheter le CD sur Bandcamp</a>
            </div>
            </section>);
};