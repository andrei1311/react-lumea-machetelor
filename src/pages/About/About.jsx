import React from 'react';
import Layout from '../../components/Layout/Layout';
import Profile from '../../assets/images/profil.jpg';
import "./About.css";

function About() {
    return(
        <Layout>
            <div className="container">
                <h1 className="mb-5">Despre mine</h1>
                <div className="row">
                    <div className="profile-img col-12 col-md-6 mb-5">
                    <img src={Profile} alt="Imagine Profil" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="mb-3">
                            Bine ai venit pe site-ul meu!
                        </h3>
                        <p>
                         Salut, eu sunt Andrei , am 32 de ani, iar 13 ani am lucrat in vanzari. Am urmat o facultate de Marketing si sigur acum te intrebi ce legatura au toate acestea web design-ul.
                            
                            <p><strong>Cum am ajuns sa fac web-design?</strong></p>
                             
                        <p>
                            Acum 2 ani de zile, la sfaturile unui bun prieten care vedea un potential creativ in mine, am inceput cursurile de web design. <br></br>
                            Astfel, am invatat HTML & CSS, ulterior am facut un curs de JavaScript Fundamentals, iar dupa finalizarea acestuia am inceput cursul de JavaScript Advanced - React. <br></br>
                            Asa am devenit din ce in ce mai pasionat de noile tendinte de design, tehnologii si solutii creative, toate acestea transformandu-se in noul meu hobby, pe care incerc din rasputeri sa-l dezvolt.
                        </p>

                        <p>
                            Acesta este primul meu "mare proiect" si cu siguranta nu ultimul, intrucat deja sunt multe pe lista care asteapta sa fie realizate in cel mai profesionist si atractiv mod posibil.
                        </p>

                            <p>
                                In cazul in care iti place lucrarea mea astept feedback-ul tau la adresa <strong><a href="mailto:andrei.agrigoroaie@gmail.com">andrei.agrigoroaie@gmail.com.</a></strong>
                            </p>
                    </div>
               </div>
            </div>
        </Layout>
        
    );
}

export default About;