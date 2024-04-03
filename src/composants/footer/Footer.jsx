import React from 'react';

function Footer() {
  return (
    <div className="">
        <img src="../images/footer.svg" alt="" />
      <div className="bg-red-700">
        
        <section className="flex items-center p-5 ">
        <div>
            <img src="../images/download.jpg" alt=""  className="max-w-64"/>
        </div>
         <div className=" text-white m-5 ">
            <strong>Téléchargez Notre Livre de Recettes Gratuit !</strong>
            <p className="text-balance m-1">
                Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! 
                Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. 
                Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable.
                Ne manquez pas cette occasion - votre prochain plat préféré vous attend !
            </p>
            <button className="bg-white text-emerald-700 px-12 py-2 font-semibold rounded-md">Télécharger Maintenant</button>
         </div>
        </section>
      </div>
      <div className="bg-red-900 ">
        <p className="text-center text-white font-semibold py-5">© Copyright 2024 Let's Cook</p>
      </div>
    </div>
  );
}

export default Footer;