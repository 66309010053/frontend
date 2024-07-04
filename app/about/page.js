import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
export default function about() {
    return (
      <>
      <Navbar />
      <h1>About</h1>
      <div class="card">
  <div class="card-header">
  ร้านอาหารเป็นสถานที่ที่สำคัญในชีวิตประจำวันของคนหลายคน เป็นที่ที่ผู้คนมารวมตัวกันเพื่อรับประทานอาหาร
  </div>
  <img src="/img/9.png" className="card-img-top custom-img" alt="Card Image" />
  <div class="card-body">
    <h5 class="card-title">1914 translation by H. Rackham</h5>
    <p class="card-text">
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally 
      circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    <Footer />
      </>
    );
  }
  