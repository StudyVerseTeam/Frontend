<script>
  import {Person, Handshake, CheckCircle, Exam, Planet, Lightning} from "phosphor-svelte"
  import "$lib/css/home.css"
</script>
<head>
  <title>Studyverse</title>
</head>
<meta charset="utf-8" />
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, user-scalable=no"
/>
  <body >
    <!-- Wrapper -->
    <div >
      <!-- Header -->
      <header id="header">
        <a href="/" class="logo">
          <strong>Study</strong> <span>Verse</span></a>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>

      <!-- Menu -->
      <nav id="menu">
        <ul class="links">
          <li><a href="/page">Page template</a></li>
          <li><a href="/page2">Page template</a></li>
        </ul>
        <ul class="actions stacked">
          <li><a href="/signup" class="button primary fit">Get Started</a></li>
          <li><a href="/login" class="button fit">Log In</a></li>
        </ul>
      </nav>

      <!-- Banner -->
      <section id="banner" class="major">
          <header >
            <h1>Studyverse</h1>
          </header>
          <div class="content">
            <p>
              An all in one learning platform that extends student's minds and improves their organization skills.
            </p>
            <ul class="actions">
              <li>
                <a href="#one" >See the features</a>
              </li>
            </ul>
          </div>
      </section>

      <!-- Main -->
      <div id="main">
        <!-- One -->
        <section id="one" class="tiles">
          <!-- Tile 1-->
          <article>
            <header class="major">
                <h3 ><a  href="/signup" class="link">Organize your life</a><CheckCircle color="#837AB6" weight="fill" size="{53}"/></h3>
              <p>Organize your life by using the built in To-Do app, and agenda manager (both coming soon). No more needing to find seperate apps for school, everything is (almost) already here on StudyVerse.</p>
            </header>
          </article>
          <!-- Tile 2-->
          <article>
            <header class="major">
              <h3> <a href="/signup" class="link" >Grades</a> <Exam color="#05c3f2" weight="fill" size="{53}" /> </h3>
              <p>Stop procrastinating, start doing. Get motivated to study by gaining awards and reputation (coming soon). You can flex on your peers all while maintaining good grades.</p>
            </header>
          </article>
          <!-- Tile 3-->
          <article>
              <header class="major">
                <div class="">
                  <h3 ><a  href="/signup" class="link">Help Others</a><Handshake weight="fill" color="#606b75" size="{53}"/></h3>
                </div>
								<p>Enhance your teaching skills! Create planets (Study Sets) (coming soon) and share them with friends. You gain awards and reputation whenever someone plays it!</p>
							</header>
					</article>
          <!-- Tile 4-->
          <article>
							<header class="major">
                <div class="">
                  <h3 ><a  href="/signup" class="link">Work Together</a><Person weight="fill" size="{46}" color="#fff314"/><Person weight="fill" size="{46}" color="#fff314"/></h3>
                </div>
								<p>Work together with your friends by creating a customized calendar schedule (coming soon). It can be for studying times, playing games, and pretty much everything else.</p>
							</header>
					</article>
          <!-- Tile 5-->
          <article>
							<header class="major">
                <div class="">
                  <h3 ><a  href="/signup" class="link">Galaxies</a><Planet color="#6140f5" weight="fill" size="{53}"/></h3>
                </div>
                <p>Take your teaching game to the next level with galaxies (courses) (coming soon). Galaxies are bundles of planets combined with stars (lectures/typed papers) to help enhance student's skills.</p>
							</header>
					</article>
          <!-- Tile 6-->
          <article>
							<header class="major">
                <div class="">
                  <h3 ><a  href="/signup" class="link">Meteors</a><Lightning color="#fff314" weight="fill" size="{53}"/></h3>
                </div>
								<p>Make graded assignments with Meteors (assignments) (coming soon). Monotoring your students (or friends) progress is a great way to gain understanding and provide for them better.</p>
							</header>
					</article>
        </section>

        <!-- Two -->
      </div>

  </body>
