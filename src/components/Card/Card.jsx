import React from 'react';
import './Card.css';
import TopHits from '../../assets/TopHits.jpg';
import RapCaviar from '../../assets/RapCaviar.jpg';

function Card(props) {
    console.log(props.arrayPlaylist)
    return (
        <div className="card">
            <h2>
                Playlist do Spotify
            </h2>
            <div className="card-container">
                {props.arrayPlaylist.map((item) => {
                    return(
                        <div key={item.id} className="cards">
                        {/* image #1 */}
                        <img src={item.thumb} alt="Top Hits" className="card-img" />
                        <div className="card-title">{item.title}</div>
                        <div className="card-info">
{item.description}
                        </div>
                    </div>
                    )
                })} 
                <div className="cards">
                    {/* image #1 */}
                    <img src={TopHits} alt="Top Hits" className="card-img" />
                    <div className="card-title">Today's Top Hits</div>
                    <div className="card-info">
                        Nicki Minaj & Ice Spice are on top of the Hottest 50!
                    </div>
                </div>
                <div className="cards">
                    {/* image #2 */}
                    <img src={RapCaviar} alt="Top Hits" className="card-img" />
                    <div className="card-title">Today's Top Hits</div>
                    <div className="card-info">
                        Nicki Minaj & Ice Spice are on top of the Hottest 50!
                    </div>
                </div>
                <div className="cards">
                    {/* image #2 */}
                    <img src={RapCaviar} alt="Top Hits" className="card-img" />
                    <div className="card-title">Today's Top Hits</div>
                    <div className="card-info">
                        Nicki Minaj & Ice Spice are on top of the Hottest 50!
                    </div>
                </div>
                <div className="cards">
                    {/* image #2 */}
                    <img src={RapCaviar} alt="Top Hits" className="card-img" />
                    <div className="card-title">Today's Top Hits</div>
                    <div className="card-info">
                        Nicki Minaj & Ice Spice are on top of the Hottest 50!
                    </div>
                </div>
                <div className="cards">
                    {/* image #2 */}
                    <img src={RapCaviar} alt="Top Hits" className="card-img" />
                    <div className="card-title">Today's Top Hits</div>
                    <div className="card-info">
                        Nicki Minaj & Ice Spice are on top of the Hottest 50!
                    </div>
                </div>
            </div>
            <h2 style={{marginTop: "1.8rem" }}>
                Foco
            </h2>
            <div className="card-container">
                <div className="cards">
                        {/* image #1 */}
                        <img src={TopHits} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                </div>
            <h2 style={{marginTop: "1.8rem" }}>
                Foco
            </h2>
            <div className="card-container">
                <div className="cards">
                        {/* image #1 */}
                        <img src={TopHits} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                    <div className="cards">
                        {/* image #2 */}
                        <img src={RapCaviar} alt="Top Hits" className="card-img" />
                        <div className="card-title">Today's Top Hits</div>
                        <div className="card-info">
                            Nicki Minaj & Ice Spice are on top of the Hottest 50!
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Card;
