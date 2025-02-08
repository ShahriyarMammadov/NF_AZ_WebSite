import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <h2>Təbiət Dostları Azərbaycan</h2>

          <p>
            Azərbaycanda 2008-ci ildən "Yaşıl Velosipedçilər Klubu", “Ekotur
            Azərbaycan” kimi tanınan Təbiət Dostları ölkədə rəsmi qeydiyyatdan
            keçərək Gənclər Təşkilatı kimi fəaliyyətini davam edir. Təşkilat
            Qafqazda xüsusi ilə də Azərbaycanda ətraf mühitin mühafizəsini
            təşviqi, sağlam həyat tərzinin təbliği, açıq-havada təlim və
            tədrisin inkişafı məqsədi ilə yerli və beynəlxalq layihələr icra
            edir.
          </p>
        </div>
        {/* <div className="right">
          <h3>Get Notified</h3>

          <p>
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
            aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
            iusto porro.
          </p>

          <div className="subscribe">
            <form action="">
              <input type="email" placeholder="Email Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div> */}
      </div>
      <p className="copyright">© Copyright Nature Friends Azerbaijan | 2025</p>
    </footer>
  );
};

export default Footer;
