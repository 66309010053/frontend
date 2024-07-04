import Navbar from '../app/component/nav';
import Footer from '../app/Footter/footter';
export default function Home() {
  return (
    <>
      <Navbar />

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/4.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <br />
        <br />
      </div>
      
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/8.png" className="card-img-top custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">ข้าวซอยไก่</h5>
                <p className="card-text">
                  ข้าวซอย คืออาหารพื้นเมืองทางภาคเหนือของประเทศไทย เดิมเรียกว่า “ก๋วยเตี๋ยวฮ่อ” เป็นอาหารที่คล้ายเส้นบะหมี่
                  ในน้ำซุปที่ใส่เครื่องแกง รสจัดจ้าน มีเครื่องเคียงได้แก่ ผักกาดดอง หอมแดง และมีเครื่องปรุงรส เช่น พริกผัดน้ำมัน น้ำมะนาว น้ำปลา น้ำตาล
                  ในตำรับดั้งเดิมเนื้อที่ใช้เป็นเนื้อไก่หรือเนื้อวัว ทางศูนย์อาชีพและธุรกิจมติชน จึงได้นำเอาหลักสูตร “ข้าวซอยไก่”
                </p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/6.png" className="custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">ข้าวมันไก่ต้ม</h5>
                <p className="card-text">
                  ใครอยากทำอาหารขายในยุคที่ข้าวยากหมากแพง ข้าวมันไก่ ข้าวมันไก่ทอด
                  จัดเป็น recommend menu อาหารจานเดียวที่คุ้มค่าการลงทุน ยิ่งได้สูตรเด็ดยิ่งทำเงินไก่ต้ม ต้องมีลักษณะไก่ตอน
                  มีความเหนียวนุ่ม หนึบ ฉ่ำน้ำ ไม่แห้ง ข้าวต้องมันเงา เป็นเม็ด นุ่ม หอม รสชาติกลมกล่อม และน้ำจิ้ม ต้องกลมกล่อม 3 รส
                  ได้รสชาติพอดี ฉะนั้นจะขาดอย่างหนึ่งอย่างใดไม่ได้ ต้องอร่อย 3 อย่าง.
                </p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/9.png" className="card-img-top custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">ต้มยำกุ้ง</h5>
                <p className="card-text">
                  ใครอยากทำอาหารขายในยุคที่ข้าวยากหมากแพง ข้าวมันไก่ ข้าวมันไก่ทอด
                  จัดเป็น recommend menu อาหารจานเดียวที่คุ้มค่าการลงทุน ยิ่งได้สูตรเด็ดยิ่งทำเงินไก่ต้ม ต้องมีลักษณะไก่ตอน
                  มีความเหนียวนุ่ม หนึบ ฉ่ำน้ำ ไม่แห้ง ข้าวต้องมันเงา เป็นเม็ด นุ่ม หอม รสชาติกลมกล่อม และน้ำจิ้ม ต้องกลมกล่อม 3 รส
                  ได้รสชาติพอดี ฉะนั้นจะขาดอย่างหนึ่งอย่างใดไม่ได้ ต้องอร่อย 3 อย่าง.
                </p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
