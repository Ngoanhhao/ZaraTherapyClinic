$(document).ready(function(){
    $(".navbar").html(`
    <div class="navs container-fluid s-16">
    <!-- Logo -->
    <a class="navbar-brand logo" href="./index.html">
      <img src="./assets/Img/logo_new.gif" width="158px" alt="">
    </a>
    <!-- Menu list on mobile -->
    <button class="navbar-toggler p-3" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menu list -->
    <div class="navs-content collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html">home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Problems we treat
          </a>
          <ul class="dropdown-menu dropdown-menu-first ProblemsWeTreat" aria-labelledby="navbarDropdown">
            <div class="d-flex">
              <div class="">
                <li><a class="dropdown-item" href="./DiscSyndrome.html">Disc Syndrome</a></li>
                <li><a class="dropdown-item" href="./Sciatica.html">Sciatica</a></li>
                <li><a class="dropdown-item" href="./NeckPain.html">Neck Pain</a></li>
                <li><a class="dropdown-item" href="./Headaches.html">Headaches</a></li>
                <li><a class="dropdown-item" href="./foot.html">Foot Problems</a></li>
                <li><a class="dropdown-item" href="./elbow.html">Elbow Pain</a></li>
              </div>
              <div class="">
                <li><a class="dropdown-item" href="./wirst.html">Wrist Pain</a></li>
                <li><a class="dropdown-item" href="./low.html">Low back pain</a></li>
                <li><a class="dropdown-item" href="./Scoliosis.html">Scoliosis</a></li>
                <li><a class="dropdown-item" href="./knee.html">Knee Pain</a></li>
                <li><a class="dropdown-item" href="./ShoulderPain.html">Shoulder Pain</a></li>
                <li><a class="dropdown-item" href="./ankle.html">Ankle Pain</a></li>
              </div>
            </div>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Combined Therapies
          </a>
          <ul class="dropdown-menu dropdown-menu-second ProblemsWeTreat" aria-labelledby="navbarDropdown">
            <div class="d-flex">
              <div>
                <li><a class="dropdown-item" href="./ChiropracticAdjustment.html">Chiropractic Adjustment</a></li>
                <li><a class="dropdown-item" href="./PneumexPneuBack.html">Pneumex PneuBack</a></li>
                <li><a class="dropdown-item" href="./ClassIVLaserTherapy.html">Class IV Laser Therapy</a></li>
                <li><a class="dropdown-item" href="./ShockWaveTherapy.html">Shockwave Therapy</a></li>
                <li><a class="dropdown-item" href="./Vertetrac.html">Vertetrac and Cervico 2000</a></li>
              </div>
              <div>
                <li><a class="dropdown-item" href="./FootOrthortics.html">Foot Orthotics</a></li>
                <li><a class="dropdown-item" href="./Physiotherapy.html">Physiotherapy</a></li>
                <li><a class="dropdown-item" href="./DTSDecompressionTractionTherapy.html">DTS Decompression Traction
                    Therapy</a></li>
                <li><a class="dropdown-item" href="./Manual-Therapy.html">Manual Therapy</a></li>
                <li><a class="dropdown-item" href="./Active-Therapeutic-Movement.html">Active Therapeutic Movement
                    (ATM2)</a></li>
              </div>
            </div>

          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            about
          </a>
          <ul class="dropdown-menu dropdown-menu-third ProblemsWeTreat" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">About us</a></li>
            <li><a class="dropdown-item" href="#">Our doctors</a></li>
            <li><a class="dropdown-item" href="#">Our clincs</a></li>
            <li><a class="dropdown-item" href="#">Our parteners</a></li>
            <li><a class="dropdown-item" href="#">Join us at Chiropractor</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./shop.html">Shopping</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./contact.html">Contact</a>
        </li>
      </ul>
      <!-- sign -->
      <div class="d-flex DN justify-content-end p-3" role="search" method="">
        <button class="border-0 container-search_btn border-bottom s-14 m-2 signin" type="button">Sign in</button>
      </div>
    </div>
  </div>
    `)
})