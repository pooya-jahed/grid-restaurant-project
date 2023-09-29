

document.getElementById("fa-IR").addEventListener("click",function(){
    document.querySelector("body").innerHTML=`  <!-- *TODO: need to optimize image size for better loading and also using css sprite for optimize  server request -->

    <div class="container">
      <!-- ----------------------------------------------------------------------- -->
      <!--                             HEADER SECTION                              -->
      <!-- ----------------------------------------------------------------------- -->
      <header class="header">
      <span class="language position-absolute">
      <a class="header-lan header-lan-en position-absolute" href="" id="en-US">English</a>
       <a class="header-lan header-lan-fa position-absolute" id="fa-IR">Persian</a></span>
        <h3 class="lang header1" key="welcome"> به سایت </h3>
        <h1 class="header2">
          <span class="header-text"> غذای لذیذ </span>
          خوش آمدید
        </h1>
        <button class="header-btn">سفارش غذا</button>
      </header>
      <!-- ----------------------------------------------------------------------- -->
      <!--                              STORY SECTION                              -->
      <!-- ----------------------------------------------------------------------- -->
      <section class="story">
        <div>
          <h3 class="section-title">استوری ها</h3>
        </div>
        <section class="story-images">
          <img
            class="image image-1"
            src="/img/story-gallery1.jpg"
            alt="DELICIOUS FOOD RESTAURANT"
          />
          <img
            class="image image-2"
            src="/img/story-gallery2.jpg"
            alt="DELICIOUS FOOD RESTAURANT"
          />
          <img
            class="image image-3"
            src="/img/story-gallery3.jpg"
            alt="DELICIOUS FOOD RESTAURANT"
          />
          <img
            class="image image-4"
            src="/img/story-gallery4.jpg"
            alt="DELICIOUS FOOD RESTAURANT"
          />
        </section>
      </section>
      <!-- ----------------------------------------------------------------------- -->
      <!--                             SERVICE SECTION                             -->
      <!-- ----------------------------------------------------------------------- -->
      <section class="service">
        <div>
          <h3 class="section-title">خدمات ما</h3>
        </div>
        <section class="services-section">
          <div class="service-box">
            <img
              class="service-image img-1"
              src="/img/service-gallery-img1.jpg"
              alt=""
            />
            <h4 class="service-text pt-10">رایگان</h4>
            <h6 class="service-text text">ارسال رایگان</h6>
          </div>
          <div class="service-box">
            <img
              class="service-image img-1"
              src="/img/service-gallery-img2.jpg"
              alt=""
            />
            <h4 class="service-text pt-10">رایگان</h4>
            <h6 class="service-text text">ارسال رایگان</h6>
          </div>
          <div class="service-box">
            <img
              class="service-image img-1"
              src="/img/service-gallery-img3.jpg"
              alt=""
            />
            <h4 class="service-text pt-10">رایگان</h4>
            <h6 class="service-text text">ارسال رایگان</h6>
          </div>
          <div class="service-box">
            <img
              class="service-image img-1"
              src="/img/service-gallery-img4.jpeg"
              alt=""
            />
            <h4 class="service-text pt-10">رایگان</h4>
            <h6 class="service-text text">ارسال رایگان</h6>
          </div>
          <div class="service-box">
            <img
              class="service-image img-1"
              src="/img/service-gallery-img5.jpg"
              alt=""
            />
            <h4 class="service-text pt-10">رایگان</h4>
            <h6 class="service-text text">ارسال رایگان</h6>
          </div>
          <div class="service-box">
            <img
              class="service-image img-1"
              src="/img/service-gallery-img6.jpg"
              alt=""
            />
            <h4 class="service-text pt-10">رایگان</h4>
            <h6 class="service-text text">ارسال رایگان</h6>
          </div>
        </section>
      </section>
      <!-- ----------------------------------------------------------------------- -->
      <!--                            RESERVE SECTION                             -->
      <!-- ----------------------------------------------------------------------- -->
      <section class="reserve">
        <div>
          <h3 class="section-title">سفارش</h3>
        </div>
        <section class="reserve-section">
          <div class="right">
            <h4 class="reserve-title">به راحتی سفارش بده!</h4>
            <h5 class="reserve-branch">شعب ما</h5>
            <h6>
              ایران<span class="parantes">(</span>تهران<span class="parantes"
                >)</span
              >
            </h6>
            <h6>
              فرانسه<span class="parantes">(</span>پاریس<span class="parantes"
                >)</span
              >
            </h6>
            <h6>
              کانادا<span class="parantes">(</span>تورنتو<span class="parantes"
                >)</span
              >
            </h6>
            <h6 class="order-text">
             شما میتوانید به راحتی غذای مورد علاقه خودتان را انتخاب کرده و رایگان تحویل بگیرید.
            </h6>
          </div>
          <div class="left">
            <h3 class="left-title">:تلفن</h3>
            <h4>658-854-144</h4>
            <h3 class="left-title">:ایمیل</h3>
            <h4>info@gmail.com</h4>
            <div class="leftbox">
              <img
                class="leftbox-img"
                src="/img/reserve-catalog-img1.jpg"
                alt=""
              />
              <img
                class="leftbox-img"
                src="/img/reserve-catalog-img2.jpg"
                alt=""
              />
              <img
                class="leftbox-img"
                src="/img/reserve-catalog-img3.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </section>
      <!-- ----------------------------------------------------------------------- -->
      <!--                             GALLERY SECTION                             -->
      <!-- ----------------------------------------------------------------------- -->
      <section class="gallery">
        <div>
          <h3 class="section-title">گالری</h3>
        </div>
        <section class="gallery-section">
          <div class="image-gallery gallery1"></div>
          <div class="image-gallery gallery2"></div>
          <div class="image-gallery gallery3"></div>
          <div class="image-gallery gallery4"></div>
          <div class="image-gallery gallery5"></div>
        </section>
      </section>
      <!-- ----------------------------------------------------------------------- -->
      <!--                             FOOTER SECTION                              -->
      <!-- ----------------------------------------------------------------------- -->
      <!-- left  subsection -->

      <footer class="footer">
        <div class="footer-section">
          <ul>
            <li style="margin-top: 15px">
              <h3 class="footer-title">سرویس ها</h3>
            </li>
            <li style="margin-top: 15px"><h5>سوالات</h5></li>
            <li style="margin-top: 15px"><h5>گزارش خطا</h5></li>
            <li style="margin-top: 15px"><h5>امنیت</h5></li>
          </ul>
          <!-- middle  subsection -->

          <ul>
            <li style="margin-top: 15px">
              <h3 class="footer-title">راه های ارتباط با ما</h3>
            </li>
            <li style="margin-top: 15px">
              <a href=""
                ><h5 class="واتس آپ">
                  <i class="fa-brands fa-whatsapp fa-lg logo"></i> واتس آپ
                </h5></a
              >
            </li>

            <li style="margin-top: 15px">
              <a href=""
                ><h5 class="youtube" style="margin-right: 5px">
                  <i class="fa-brands fa-youtube fa-lg logo-3"></i> یوتیوب
                </h5></a
              >
            </li>
            <li style="margin-top: 15px">
              <a href=""
                ><h5 class="telegram">
                  <i class="fa-brands fa-telegram fa-lg logo"> </i> تلگرام
                </h5></a
              >
            </li>
          </ul>
          <!-- right side subsection -->
          <ul>
            <li style="margin-top: 15px">
              <h3 class="footer-title">غذاها</h3>
            </li>
            <li style="margin-top: 15px"><h5>رزرو آنلاین</h5></li>
            <li style="margin-top: 15px"><h5>دستور های  پخت</h5></li>
            <li style="margin-top: 15px"><h5>استخدام آشپز</h5></li>
          </ul>
        </div>
        <h4 class="copy">
          &copy;تمامی حقوق این سایت متعلق به 
          <span class="copy-text"> DELICIOUS </span>food میباشد
        </h4>
      </footer>
      <!-- *TODO: need to optimize image size for better loading and also using css sprite for optimize  server request -->
    </div>
    <script src="./lang.js"></script>`;
})


document.getElementById("en-US").addEventListener("click",function(){
    window.location.reload();})