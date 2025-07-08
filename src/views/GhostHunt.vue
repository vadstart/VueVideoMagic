<template>
  <main class="project-content">
      <article>
        <h1>Ghost the Most - Snap Spectacles AR</h1>
        <p>🎃 Port of my "Ghost the most" game to the new Spectacles by Snap Inc. 👻 </p>

        <div class="video-container">
          <video controls autoplay muted loop>
            <source src="/assets/GhostHunt/ghostthemost-v2-dv.mp4" type="video/mp4">
            your browser does not support the video tag.
          </video>
        </div>

        <p>In the current version you can summon the wisps to dynamically reveal the SDF-fog (static by default in lens Studio) with your right hand and collect the coins procedurally hidden around your room by physically picking them up with your fingers. Could there be more spooky surprises and spells hidden in the final version? Who knows :)</p>
<p>Read the slides to find out how I've made it. You can also play the game yourself by scanning the Snapcode (there's one for the Mobile version on the slide and the one for Spectacles at the bottom of the page)</p>

<div class="video-container">
          <video controls autoplay muted loop>
            <source src="/assets/GhostHunt/ghosthunt2.mp4" type="video/mp4">
            your browser does not support the video tag.
          </video>
        </div>

        <div class="video-container">
          <video controls autoplay muted loop>
            <source src="/assets/GhostHunt/ghostthemost.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <p>Using Raymarched Volumetric Mist to hide the purple ghost from the player. You can either walk around with the Candle to find it, or disperse the mist with your friendly Cyan Ghosts.</p>

        <a href="/assets/GhostHunt/lensstudio-mistexploration.jpg" target="_blank"><img src="/assets/GhostHunt/lensstudio-mistexploration.jpg" alt="Project Image"></a>
        <a href="/assets/GhostHunt/lensstudio-mistexploration2.jpg" target="_blank"><img src="/assets/GhostHunt/lensstudio-mistexploration2.jpg" alt="project image"></a>

<div class="video-container">
          <video controls autoplay muted loop>
            <source src="/assets/GhostHunt/vfx.mp4" type="video/mp4">
            your browser does not support the video tag.
          </video>
        </div>

<p>as you can see, vfx graph particles collision in lens studio is not ideal</p>

<a href="/assets/GhostHunt/lensstudio-mistexploration3.jpg" target="_blank"><img src="/assets/GhostHunt/lensstudio-mistexploration3.jpg" alt="project image"></a>
<div class="video-container">
          <video controls autoplay muted loop>
            <source src="/assets/GhostHunt/ghosthunt-mist-demo.mp4" type="video/mp4">
            your browser does not support the video tag.
          </video>
        </div>

<p>With my method you can have potentially infinite amount of Colliders affecting the Mist in real time.</p>

<a href="/assets/GhostHunt/ghost-snapcode.jpg" target="_blank"><img src="/assets/GhostHunt/ghost-snapcode.jpg" alt="project image"></a>
<p>Snapcode so you can experience the game through your Spectacles too</p>

        <router-link to="/" class="back-button">← Back to Portfolio</router-link>
      </article>
    </main>
</template>

<script>
export default {
  name: 'Project',
};
</script>
