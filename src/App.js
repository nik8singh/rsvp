import './home.css';

import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./home";
import * as React from "react";
import {rsvpApiEndpoint} from "./config";

function App() {
  // return (
  //     <HashRouter>
  //       <Routes>
  //           <Route path="/" element={<Home />} />
  //       </Routes>
  //     </HashRouter>
  // );

    const [buttonText, setButtonText] = React.useState('Submit');
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const [nameValue, setNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [selectedPaathRsvp, setSelectedPaathRsvp] = React.useState("No");
    const [paathHeadcount, setpaathHeadcount] = React.useState("1");
    const [selectedPartyRsvp, setSelectedPartyRsvp] = React.useState("No");
    const [partyHeadcount, setpartyHeadcount] = React.useState("1");

    const submitRsvp = (event) => {
        console.log("calling Create API")
        setButtonText("Submitting...")
        setButtonDisable(true)

        if (selectedPaathRsvp === "No")
            setSelectedPaathRsvp("0");

        if (selectedPartyRsvp === "No")
            setSelectedPartyRsvp("0");

        window.fetch(`${rsvpApiEndpoint}/createRsvp`,{
            method: "POST",
            body: JSON.stringify({
                name: `${nameValue}`,
                email: `${emailValue}`,
                paathRsvp: `${selectedPaathRsvp}`,
                partyRsvp: `${selectedPartyRsvp}`,
                paathHeadcount: `${paathHeadcount}`,
                partyHeadcount: `${partyHeadcount}`
            }),
            headers:{
                "content-type":"application/json; charset=UTF-8",
                'Accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then(
            function (response) {
                if(response.status !==200){
                    console.log("Problem: "+response.status)
                    return;
                }
                console.log("Problem: "+response.status)
                setButtonText("RSVP Submitted Successfully")
            }).catch(function (err){ console.log("Error:-S", err)});

    };

    return (

        <div className="pageContainer columnCenter">
            <form onSubmit={e => {submitRsvp(); e.preventDefault()}}>
                <div className="pageHeader columnCenter">
                    {/*<div className="imgParent">*/}
                    {/*    <img src={pic}/>*/}
                    {/*</div>*/}
                    <div className="columnCenter">
                        <h1 className="mainTitle">Making Memories in Our New Home</h1>
                        <h3 className="subTitle">You're Invited. RSVP by Oct 15th and it better be a Yes!</h3>
                    </div>
                </div>

                <div className="pageBody">
                    <div className="text_inputs">
                        <div className="single_input">
                            <input type="text" id="name" className="form_input" placeholder=" "
                                   onChange={e => setNameValue(e.target.value)}
                                   value={nameValue}
                                   required
                            />
                            <label htmlFor="name" className="form_label">Name</label>
                        </div>
                        <div className="single_input">
                            <input type="email" id="email" className="form_input" placeholder=" "
                                   onChange={e => setEmailValue(e.target.value)}
                                   value={emailValue}
                                   required
                            />
                            <label htmlFor="email" className="form_label">Email</label>
                        </div>
                    </div>
                    <div className="event_details_container">
                        <div className="event_container">
                            <div className="event_title_container">
                                <h2>Sukhmani Sahib & Kirtan followed by Langar</h2>
                                <span className="date">Saturday 26th October 2024 at 11:30 am</span>
                            </div>
                            <div className="event_rsvp_container">
                                <div className="radio_tile_group">
                                    <div className="radio_input_container">
                                        <input type="radio" name="paath" id="yes_paath" value="Yes"
                                               onChange={e => setSelectedPaathRsvp(e.target.value)}
                                               required
                                        />
                                        <div className="radio_tile">
                                            <label htmlFor="yes_paath">Gratefully, I’ll join in seeking Waheguru’s
                                                blessings.</label>
                                        </div>
                                    </div>
                                    <div className="radio_input_container">
                                        <input type="radio" name="paath" id="no_paath" value="No"
                                               onChange={e => setSelectedPaathRsvp(e.target.value)}
                                        />
                                        <div className="radio_tile">
                                            <label htmlFor="no_paath">I cannot attend, but my Ardaas for
                                                peace
                                                will be with you.</label>
                                        </div>
                                    </div>
                                </div>
                                {selectedPaathRsvp === "Yes" &&
                                    <div className="headcount_container">
                                        <div className="single_input">
                                            <input type="number" id="paathHeadcount" className="form_input headcount" placeholder=" "
                                                   onChange={e => setpaathHeadcount(e.target.value)}
                                                   value={paathHeadcount}
                                            />
                                            <label htmlFor="paathHeadcount" className="form_label">Headcount</label>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="separator_span">✧✧✧
                        </div>
                        <div className="event_container">
                            <div className="event_title_container">
                                <h2>Housewarming & Diwali</h2>
                                <span className="date">Sunday 27th October 2024 at 7:00 pm</span>
                                <span className="note">Dress Code: Indian - black or red or gold</span>
                            </div>
                            <div className="event_rsvp_container">

                                <div className="radio_tile_group">
                                    <div className="radio_input_container">
                                        <input type="radio" name="party" id="yes_party" value="Yes"
                                               onChange={e => setSelectedPartyRsvp(e.target.value)}
                                               required
                                        />
                                        <div className="radio_tile">
                                            <label htmlFor="yes_party">Yes, I’ll bring my sparkle to your Diwali
                                                housewarming!</label>
                                        </div>
                                    </div>
                                    <div className="radio_input_container">
                                        <input type="radio" name="party" id="no_party" value="No"
                                               onChange={e => setSelectedPartyRsvp(e.target.value)}
                                        />
                                        <div className="radio_tile">
                                            <label htmlFor="no_party">I can’t attend, but may your home be filled with
                                                light and love.</label>
                                        </div>
                                    </div>
                                </div>
                                {selectedPartyRsvp === "Yes" &&
                                    <div className="headcount_container">
                                        <div className="single_input">
                                            <input type="number" id="partyHeadcount" className="form_input headcount" placeholder=" "
                                                   onChange={e => setpartyHeadcount(e.target.value)}
                                                   value={partyHeadcount}
                                            />
                                            <label htmlFor="partyHeadcount" className="form_label">Headcount</label>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <button className="button" type="submit" disabled={buttonDisable}>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </form>

            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <div className="footerInfo">
                    <h1>Address: 4216 Promontory Point Trail, Georgetown, TX 78626</h1>
                </div>
            </footer>
        </div>
    );
}

export default App;
