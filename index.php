<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>AniFlex</title>
    <!-- this is for bootstrap  -->
    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css
" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  </head>
  <body>

    <!-- test welcome -->
  <div id="welcome-page" class="container">
    <p id="user-id" data-id></p>
    <div class="row outside">
      <div class="col left-panel">
        <img id="welcome-rand-img" class="img-hor img-ver" src="" alt="">
      </div>
      <div class="col right-panel">
          <header>
            <img class="login-icon" src="https://image.flaticon.com/icons/svg/149/149067.svg" alt="">
            <h1>Welcome to AniFlex</h1>
          </header>
          <main>
            <form class="form-group" id="username-form" action="" method="post">
              <label for="username">Choose your username to get started</label>
              <input class="form-control" id="username-input" type="text" name="username" id="username" value="">
            </form>
          </main>
      </div>
    </div>
  </div>
  <!-- end test -->

  <!-- test menu -->
  <div id="menu-page" class="container" style="display: none;">
    <div class="row outside">
      <div class="col left-panel">
        <img id="menu-rand-img" class="img-hor img-ver" src="https://i.pinimg.com/736x/88/33/65/883365d2193450642e2b787dc251b1dd--fmab-fma-brotherhood.jpg" alt="">
      </div>
      <div class="col right-panel">
          <header>
            <img class="menu-icon"src="https://image.flaticon.com/icons/svg/992/992195.svg" alt="">
            <h1>El Menu</h1>
          </header>
          <main>
            <h3 class="list-group-item-action" onclick="renderLists()">Have a gander at your lists</h3>
            <h3 class="list-group-item-action" onclick="renderSearch()">Get a recommendation!</h3>
          </main>
      </div>
    </div>
  </div>
  <!-- end test menu -->

  <!-- test list -->
  <div id="list-page" class="container" style="display: none;">
    <div class="row nav-rows">
        <img id="nav-menu-icon" class="menu-icon"src="https://image.flaticon.com/icons/svg/992/992195.svg" alt="">
        <img class="keyup" src="https://www.flaticon.com/premium-icon/icons/svg/670/670066.svg" alt="">
    </div>
    <div class="row outside">
      <div class="col left-panel">
        <img id="list-rand-img" class="img-hor img-ver" src="https://i.pinimg.com/736x/88/33/65/883365d2193450642e2b787dc251b1dd--fmab-fma-brotherhood.jpg" alt="">
      </div>
      <div class="col right-panel">
          <header>
            <img class="list-icon" src="https://image.flaticon.com/icons/svg/148/148986.svg" alt="">
            <h1>Kimi no Listo</h1>
          </header>
          <main id="list-of-lists">
          </main>
      </div>
    </div>
    <div class="row nav-rows">
      <img class="keydown" src="https://www.flaticon.com/premium-icon/icons/svg/242/242956.svg" alt="">
      <img id="nav-logout-icon" class="logout-icon" src="https://image.flaticon.com/icons/svg/529/529873.svg" alt="">
    </div>
  </div>
  <!-- end test list -->

  <!-- test search  -->
  <div id="search-page" class="container" style="display: none;">
    <img id="nav-menu-icon" class="menu-icon"src="https://image.flaticon.com/icons/svg/992/992195.svg" alt="">
    <img class="keyup" src="https://www.flaticon.com/premium-icon/icons/svg/670/670066.svg" alt="">
    <div class="row outside">
      <div class="col left-panel">
        <img id="search-rand-img" class="img-hor img-ver" src="https://i.pinimg.com/736x/88/33/65/883365d2193450642e2b787dc251b1dd--fmab-fma-brotherhood.jpg" alt="">
      </div>
      <div class="col right-panel">
        <header class="card-header">
          <img class="search-icon" src="https://image.flaticon.com/icons/svg/660/660706.svg" alt="">
          <h1>Find New Anime</h1>
        </header>
        <main id="quiz-page"class="card-body">
          <h3>How are you feeling today?</h3>
          <form id='quiz-form'>
            <input type="radio" name="quizEntry" value="happy"> Happy!</input><br/>
            <input type="radio" name="quizEntry" value="sad"> A bit sad...</input><br/>
            <input type="radio" name="quizEntry" value="tired"> Exhausted from coding bootcamp and looking for an emotional escape.</input><br/>
            <input type="radio" name="quizEntry" value="random"> I dunno, just show me something!</input><br/>
            <input type="submit" class="btn btn-info" value="Submit Button"></input>
          </form>
        </main>
      </div>
    </div>
    <img class="keydown" src="https://www.flaticon.com/premium-icon/icons/svg/242/242956.svg" alt="">
    <img id="nav-logout-icon" class="logout-icon" src="https://image.flaticon.com/icons/svg/529/529873.svg">
  </div>
  <!-- end test search -->

<!-- anime show page -->
  <div id="anime-show-page" class="container" style="display: none;">
    <img id="nav-menu-icon" class="menu-icon"src="https://image.flaticon.com/icons/svg/992/992195.svg" alt="">
    <img class="keyup" src="https://www.flaticon.com/premium-icon/icons/svg/670/670066.svg" alt="">
    <div class="row outside">
      <div class="col left-panel">
        <img id="anime-image" class="img-hor img-ver" src="" alt="">
      </div>
      <div class="col right-panel">
        <header class="">
          <button type="button" id="add-to-list" class="btn btn-danger" name="add-to-list">Add to List</button>
          <h1 id="anime-title"></h1>
        </header>
        <main id=""class="">
          <h5 class="anime-description"></h5>
          <p id='anime-id-placeholder' style="display: none;" data-id></p>
          <a href="" id="see-more-link" target="_blank" onclick="alert('Opening a new tab!')">See more?</a><br><br>
          <h3 class="list-group-item-action" onclick="renderSearch()">Get another recommendation!</h3>
        </main>
      </div>
    </div>
    <img class="keydown" src="https://www.flaticon.com/premium-icon/icons/svg/242/242956.svg" alt="">
    <img id="nav-logout-icon" class="logout-icon" src="https://image.flaticon.com/icons/svg/529/529873.svg">
  </div>
<!-- end of anime show page -->

<!-- add anime to list view -->
  <div id="add-anime-view" class="container" style="display: none;">
    <div class="">
      <form class="form-group" id="create-list-form" action="" method="">
        <select id="list-collection" class="form-control" name="list-collection">

        </select><br>
        <label id="new-list-input-label" for="new-list-input">New List Name</label>
        <input id="new-list-input" class="form-control" type="text" name="new-list-input" value="" placeholder="new list name"><br>
        <input id="add-to-list-btn" class="btn btn-warning" type="submit" name="add-to-list-btn" value="Add to this List!">
      </form>
    </div>
  </div>
<!-- end of add anime to list view -->

<!-- users animes page -->
  <div id="user-animes-view" class="container" style="display: none;">
    <div class="row outside">
      <div class="col left-panel">

      </div>
      <div class="col right-panel">
        <header>
          <h1>Tu Animes</h1>
        </header>
        <main>
          <ul id="user-animes-list">

          </ul>
        </main>
      </div>
    </div>

  </div>
<!-- end og users animes page -->

<!-- js files -->
  <script src="genreLister.js"></script>
  <script src="index.js"></script>
  <script src="menu.js"></script>
  <script src="recommendation.js"></script>
  <script src="recommendedShow.js"></script>
  <script src="welcome.js"></script>
  <script src="quiz.js"></script>
  <script src="list.js"></script>

  <!-- <script src="test.js"></script> -->
  <link rel="stylesheet" href="index.css">

<!-- end of js files -->

<!-- this is for bootstrap -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<!-- end of bootstrap -->

  </body>
</html>
